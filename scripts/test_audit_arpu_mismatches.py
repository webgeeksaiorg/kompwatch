"""Unit tests for scripts/audit-arpu-mismatches.py.

Runs without pytest — just `python3 scripts/test_audit_arpu_mismatches.py`.
Covers the founding-customer metadata contract (ticket 5c62) so future
edits don't regress the "$29/mo founding is not an ARPU mismatch" behavior
that the webhook code comment (src/app/api/webhooks/stripe/route.ts)
promises.
"""

from __future__ import annotations

import importlib.util
import os
import sys
from pathlib import Path

# Ensure a clean env so plan resolution falls back to amount-based inference
# (mirrors production where the audit runs with only STRIPE_SECRET_KEY set).
for key in (
    "STRIPE_PRICE_PRO",
    "STRIPE_PRICE_PRO_ANNUAL",
    "STRIPE_PRICE_TEAM",
    "STRIPE_PRICE_TEAM_ANNUAL",
):
    os.environ.pop(key, None)

SCRIPT_PATH = Path(__file__).parent / "audit-arpu-mismatches.py"
spec = importlib.util.spec_from_file_location("audit_arpu", SCRIPT_PATH)
audit = importlib.util.module_from_spec(spec)
assert spec.loader is not None
spec.loader.exec_module(audit)


def _mksub(
    unit_amount: int,
    *,
    interval: str = "month",
    quantity: int = 1,
    price_id: str = "price_x",
    metadata: dict | None = None,
) -> dict:
    return {
        "id": "sub_test",
        "customer": "cus_test",
        "status": "active",
        "metadata": metadata or {},
        "items": {
            "data": [
                {
                    "price": {
                        "id": price_id,
                        "unit_amount": unit_amount,
                        "recurring": {"interval": interval},
                    },
                    "quantity": quantity,
                }
            ]
        },
    }


def test_founding_at_29_is_ok() -> None:
    row = audit._check_subscription(
        _mksub(2900, metadata={"founding_customer": "true"})
    )
    assert row["is_founding"] is True
    assert row["mismatch"] is False, f"$29/mo founding should be OK, got {row}"
    assert row["resolved_plan"] == "PRO"


def test_founding_at_wrong_amount_flags_amount_mismatch() -> None:
    row = audit._check_subscription(
        _mksub(999, metadata={"founding_customer": "true"})
    )
    assert row["is_founding"] is True
    assert row["mismatch"] is True
    assert "FOUNDING_AMOUNT_MISMATCH" in row["reason"]


def test_non_founding_at_999_is_unknown_price() -> None:
    row = audit._check_subscription(_mksub(999))
    assert row["is_founding"] is False
    assert row["mismatch"] is True
    assert "UNKNOWN_PRICE" in row["reason"]


def test_canonical_pro_is_ok() -> None:
    row = audit._check_subscription(_mksub(4900))
    assert row["mismatch"] is False
    assert row["resolved_plan"] == "PRO"
    assert row["is_founding"] is False


def test_founding_on_team_flags_plan_mismatch() -> None:
    row = audit._check_subscription(
        _mksub(14900, metadata={"founding_customer": "true"})
    )
    assert row["is_founding"] is True
    assert row["mismatch"] is True
    assert "FOUNDING_PLAN_MISMATCH" in row["reason"]


def test_founding_annual_flags_interval_mismatch() -> None:
    # $29 * 12 = 34800 cents — an annual founding sub that shouldn't exist.
    row = audit._check_subscription(
        _mksub(2900 * 12, interval="year", metadata={"founding_customer": "true"})
    )
    assert row["is_founding"] is True
    assert row["mismatch"] is True
    assert "FOUNDING_INTERVAL_MISMATCH" in row["reason"]


def test_audit_report_includes_founding_count(monkeypatch=None) -> None:
    calls = {"n": 0}

    def fake_list(endpoint: str, params: dict | None = None) -> list:
        calls["n"] += 1
        if calls["n"] == 1:  # active
            return [
                _mksub(2900, metadata={"founding_customer": "true"}),
                _mksub(4900),
                _mksub(999),  # unknown-price mismatch
            ]
        return []  # trialing

    original = audit._list_all
    audit._list_all = fake_list  # type: ignore[assignment]
    try:
        report = audit.audit()
    finally:
        audit._list_all = original  # type: ignore[assignment]

    assert report["subscriptions_audited"] == 3
    assert report["founding_count"] == 1
    assert report["mismatch_count"] == 1  # only the $9.99 unknown-price


def _run_all() -> int:
    tests = [obj for name, obj in globals().items() if name.startswith("test_") and callable(obj)]
    failures = 0
    for t in tests:
        try:
            t()
            print(f"[OK]  {t.__name__}")
        except AssertionError as e:
            failures += 1
            print(f"[FAIL] {t.__name__}: {e}")
    print()
    if failures:
        print(f"{failures}/{len(tests)} tests failed")
        return 1
    print(f"All {len(tests)} tests passed")
    return 0


if __name__ == "__main__":
    sys.exit(_run_all())

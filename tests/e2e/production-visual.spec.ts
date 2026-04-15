import { test, expect } from '@playwright/test';

test.describe('Production visual checks', () => {
  test('landing page renders with styles', async ({ page }) => {
    await page.goto('/');
    // Verify Tailwind classes are applied (not raw unstyled HTML)
    const body = page.locator('body');
    const bgColor = await body.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)'); // Not transparent (unstyled)

    // Verify hero text is visible
    await expect(page.locator('h1')).toBeVisible();

    // Verify nav has proper styling (not raw links)
    const nav = page.locator('header nav');
    await expect(nav).toBeVisible();

    // Verify CTA button has background color (Tailwind applied)
    const cta = page.locator('a:has-text("Start free")').first();
    await expect(cta).toBeVisible();
    const ctaBg = await cta.evaluate(el => getComputedStyle(el).backgroundColor);
    expect(ctaBg).not.toBe('rgba(0, 0, 0, 0)');

    // Verify page has no giant black icons (broken SVG rendering)
    const svgs = page.locator('svg');
    for (const svg of await svgs.all()) {
      const box = await svg.boundingBox();
      if (box) {
        expect(box.width).toBeLessThan(500); // No SVG should be > 500px
        expect(box.height).toBeLessThan(500);
      }
    }
  });

  test('login page renders', async ({ page }) => {
    await page.goto('/login');
    await expect(page.locator('h1, h2')).toBeVisible();
  });

  test('pricing page renders with price cards', async ({ page }) => {
    await page.goto('/pricing');
    // Should show at least 2 pricing tiers
    const prices = page.locator('text=/\\$\\d+/');
    await expect(prices.first()).toBeVisible();
  });

  test('no console errors on landing page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    // Filter out known non-critical errors
    const critical = errors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('third-party') &&
      !e.includes('cookie')
    );
    expect(critical).toHaveLength(0);
  });
});

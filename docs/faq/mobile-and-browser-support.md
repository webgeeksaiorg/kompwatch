# Mobile & Browser Support

KompWatch is fully responsive and works on phones, tablets, and desktops.

## Does KompWatch have a mobile app?

No — KompWatch is a web app, not a native iOS or Android app. You access it at [kompwatch.com](https://kompwatch.com) in your mobile browser. The dashboard is fully responsive on all screen sizes.

## Mobile Dashboard

The KompWatch dashboard is designed to work on any screen size:

- **Hamburger navigation** — on small screens, the sidebar collapses into a top-right menu button. Tap it to access Competitors, Digests, and Settings.
- **Stacked forms** — competitor add/edit forms stack vertically so they're easy to fill out on a touchscreen.
- **Responsive tables** — the Changes and Competitors tables scroll horizontally on narrow screens so no data is hidden.

You can monitor competitors, review change alerts, and manage your account entirely from a phone or tablet.

## Recommended Browsers

KompWatch works in any modern browser:

| Browser | Support |
|---------|---------|
| Chrome / Edge | Full support |
| Safari (iOS & macOS) | Full support |
| Firefox | Full support |
| Samsung Internet | Full support |

Browsers older than 2 years may have minor display issues. We recommend keeping your browser up to date.

## Digest Emails on Mobile

Digest emails use a fully responsive HTML template with a mobile breakpoint at 480px. The template includes:

- **Viewport meta tag** — prevents iOS Mail from auto-zooming the layout
- **Apple Mail reformatting override** — `x-apple-disable-message-reformatting` stops Apple Mail from scaling text unexpectedly
- **Reduced padding at 480px** — container and card padding shrinks from 24px to 12–16px so content isn't squeezed
- **Simplified change rows** — the badge/type column is hidden on narrow screens; the AI summary takes full width for easier reading
- **Larger footer tap targets** — footer links get a taller click area on touchscreens
- **System font stack** — renders as native text in iOS Mail, Gmail app, and Outlook without web font loading

Tested email clients: Gmail (iOS + Android), Apple Mail (iOS + macOS), Outlook (iOS + Android + desktop), Samsung Mail.

## Adding Competitors on Mobile

You can add a new competitor from your phone:

1. Tap the **hamburger menu** (top right) → **Competitors**
2. Tap **Add Competitor**
3. Enter the name, URL, and optional CSS selector
4. Tap **Save**

The first snapshot runs immediately — no desktop required.

## What's Easier on Desktop

- Setting a precise **CSS selector** is easier on desktop where you can use browser DevTools to inspect elements.
- Reviewing large **HTML diffs** is more comfortable on a wider screen.
- **Screenshot previews** (visual snapshots of competitor pages) display best on larger screens but are still viewable on mobile by pinching to zoom.

## My Layout Looks Broken — What Should I Try?

1. **Hard refresh** — `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux) to clear cached styles
2. **Check zoom level** — browsers zoomed above 125% can break some layouts; reset with `Cmd+0` / `Ctrl+0`
3. **Try a different browser** — Safari on iOS occasionally has scrolling quirks with sticky headers
4. **Email us** — if the issue persists, send a screenshot to [support@kompwatch.com](mailto:support@kompwatch.com) with your browser version and device

---
*Questions? Email [support@kompwatch.com](mailto:support@kompwatch.com) and a team member will follow up within 24 hours.*

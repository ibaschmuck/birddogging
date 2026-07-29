# Birddogging

A joke site for Terry. Static HTML — no build step, no framework, no dependencies.

## Look at it locally

```bash
cd ~/birddogging
python3 -m http.server 8899
# open http://127.0.0.1:8899
```

Opening `index.html` directly in a browser also works; the visitor counter just won't
persist, because `localStorage` is blocked on `file://`.

## Files

| File | What's in it |
|---|---|
| `index.html` | All the content and the inline SVG job-site photos |
| `styles.css` | The whole design system |
| `observe.js` | Visitor counter, and the work-order form's `mailto:` handler |
| `assets/` | Terry, cropped three ways |
| `vercel.json` | Clean URLs and asset caching |

## Things you'll probably want to change

- **Terry's email** — `TERRY_EMAIL` at the top of `observe.js`. Right now it's
  `terry@birddogging.com`, which doesn't exist, so the work-order form composes an email
  that goes nowhere.
- **The phone number** — `(360) 555-0147` is a deliberately fake 555 number. It appears in
  five places in `index.html` and once in the pocket-protector SVG.
- **Town names** — the gallery and testimonials are set in Brush Prairie, Ridgefield,
  Yacolt, Camas, Battle Ground and Washougal, and the service-area strip lists everything
  inside sixty miles. Swap in towns Terry actually complains about and it gets funnier.

## Regenerating Terry's crops

`assets/terry-original.jpg` is the source photo. The three derived crops were made with
Pillow — the script lives outside this repo, but the crops are checked in, so you only need
it if you swap the photo.

## Deploy

```bash
cd ~/birddogging
npx vercel --prod
```

Needs `npx vercel login` once first — that step is interactive.

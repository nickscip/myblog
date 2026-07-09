# Art section + Pottery subsection

## Goal

Add a new top-level "Art" section to the blog, with a "Pottery" subsection
showing a gallery of pottery photos/videos shared by the user (from
`~/Desktop/Pottery/`).

## Navigation

Add `Art` to `config.toml`'s `[extra.nav].links`, after `Projects`:

```
Blog -> Projects -> Art
```

## Content structure

Mirrors the existing `Projects` section pattern.

- `content/art/_index.md` — new section, `template = "section.html"`,
  `sort_by = "weight"`. Short intro blurb plus a link to Pottery, in the same
  style as `content/projects/_index.md`.
- `content/art/pottery/_index.md` — the gallery page, `template = "section.html"`,
  `weight = 1`. Built as a Zola page bundle: photo/video files live directly
  next to this `_index.md` so Zola serves them as page assets, referenced via
  relative paths in markdown.

Content is grouped by piece, one `## heading` per piece, in this order:

1. **Microbangs** — 3 photos (`Microbangs.jpg`, `Microbangs2.jpg`, `Microbangs3.jpg`), shown side-by-side in a row
2. **Willpower Mug** — 2 photos (`WillpowerMug.jpg`, `WillPowerMug2.jpg`), shown side-by-side in a row
3. **Use Me Plate** — 1 photo (`UseMePlate.jpg`)
4. **I ❤ Art** — 1 video (from `IHeartArt.mov`), autoplay/muted/loop/playsinline, no controls
5. **Incense Diffuser** — 1 video (from `IncenseDiffuser.mov`), autoplay/muted/loop/playsinline, no controls

Photos/videos use duckquill's existing `image()` / `video()` shortcodes so
they inherit the site's standard rounded-corner/shadow/hover treatment.

## Styling

Add one small addition to `static/custom.css`: a `.gallery-row` class
(flexbox, `flex-wrap: wrap`, `gap`) so multi-photo pieces for a single item
sit side-by-side responsively, wrapping to a stacked layout on narrow
viewports. Single-photo/video pieces don't need the wrapper.

## Media processing

Originals in `~/Desktop/Pottery/` are left untouched; only compressed copies
are added to the repo (into `content/art/pottery/`).

- **Photos**: resize/compress with `sips` (already installed) — cap the
  longest edge (e.g. 2000px) and reduce JPEG quality slightly to shrink file
  size while staying sharp enough for a gallery display.
- **Videos**: transcode both `.mov` files to `.mp4` (H.264) with `ffmpeg`
  (now installed) — scale down resolution (e.g. 1280px wide) and encode with
  a reasonable CRF, so the 22MB `IncenseDiffuser.mov` doesn't autoplay-download
  at full size for every visitor.

## Out of scope

- Per-piece individual pages (user opted for a single grouped gallery page).
- Auto-generated gallery from folder contents (this is a hand-authored
  markdown page, not a template that lists arbitrary dropped-in files).
- Adding "Art"/"Pottery" to the footer links (only top nav, per user's answer).

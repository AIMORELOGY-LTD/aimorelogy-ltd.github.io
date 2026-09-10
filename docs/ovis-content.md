# OVIS content and media

The product page is `/[en|zh|ru|ar]/products/ovis/ovis-camera-module/`. Its shared specification values are in `data/ovisData.ts`; translated copy is in `locales/ovis/`. The home hero and product spotlight share `components/OvisHero.tsx` and the scoped `components/ovis.css` stylesheet.

## Sources

Content and images come from the user-supplied `OVIS-product-page-handoff-2026-09-09.zip`, especially `PRODUCT_FACTS.json`, the source-document text extracts, and `04-page-reference/assets/`. The product-page desktop banner uses `未标题-2.png` (1175 × 500). The homepage uses `review-fix-1530.png` (1920 × 1080) across the full carousel, with its redundant top-left logo removed because the site header provides the brand mark. Mobile uses the supplied product cutout.

The product menu has a separate OVIS Series category. The home feature area links to detection, low-light imaging, modular hardware and manager sections, alongside connectivity and platform integration. Product-page hash navigation scrolls after the lazy-loaded page mounts.

- `product`, `stack`, `kit-dual`, `kit-triple`: corresponding product and configuration images.
- `interface-core`, `interface-cvbs`: v11 interface annotations; `interface-sensor`: v12 annotations.
- `manager-*`: supplied demonstration-state screenshots, not customer deployments.
- `people`, `drone`, `street`, `fpv` videos: source videos 03–06, respectively.
- `lowlight` and `ai-isp` videos: source videos 07 and 08. These are separate demonstrations, not a validated before/after pair.

Images were resized without upscaling and encoded to WebP. Videos were encoded as H.264 / yuv420p, capped at 1280px width, 30 recording FPS, with fast-start metadata and no audio. Their recording/export frame rates must not be described as algorithm throughput. Videos use `preload="none"` and native playback controls.

## Specification boundaries

- The revised part number is CV1842H-P; early documents use CV1842HP.
- 1.5 TOPS is the INT8 rating; BF16 support is listed separately.
- DDR3 2Gb equals 256MB and is separate from the 256MB NAND storage.
- 1080p @ 60 FPS is sensor capture. 8MP @ 25 FPS is the encoding capability ceiling.
- Lens FOV values are theoretical for a 1/2.9-inch image format, not measured whole-module FOV.
- Inference reference rates are 30 FPS for the P2 people/vehicle detector and 55 FPS for drone detection and tracking. These are supplied reference values, not a newly performed benchmark.
- MS7024 is the CVBS expansion board. Wi-Fi, IMU and custom I/O are customization directions rather than included kit components.
- Do not add power, temperature, pricing, delivery or accessory claims without a confirmed source.

The SDK repository, documentation, web manager and forum returned HTTP 200 on 2026-09-10. The user subsequently confirmed that the HDK is open source and users can design and stack expansion boards for their own requirements; the modular hardware section and home feature now state this explicitly. GitHub did not report a recognized SDK repository license during the earlier check; do not extend the HDK confirmation to unspecified SDK licensing terms.

## Retired routes and validation

The AFC-V1 route is only retained as compatibility navigation to the same-language home product spotlight. The prerender script emits noindex redirect HTML for those URLs after rendering the normal pages; retired routes are excluded from the sitemap. These are browser redirects, not HTTP 301 responses.

The former `/[lang]/products/camera-module/ovis/` path redirects to `/[lang]/products/ovis/ovis-camera-module/`. Both the React route and generated static redirect preserve query parameters and section anchors. Canonical links, language alternates, navigation and content indexes use the new path.

Use the repository build and prerender checks. The prerender script launches Vite through Node for Windows compatibility. Check all four language variants, native video playback, exclusive playback, image detail zoom, manager/board selectors, hash navigation, old routes and narrow-screen tables. `debug/` holds local tooling and is excluded from TypeScript compilation and Git.

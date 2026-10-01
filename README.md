# Kajuva static website

Open index.html directly, or serve this folder with a static web server. No build step, packages, external fonts, or API keys are required.

- index.html: content and page structure
- styles.css: responsive styling
- script.js: mobile navigation and WhatsApp enquiry builder
- assets/: optimized images extracted from the supplied packaging artwork

Contact links use +91 96569 15303 and sales@mscashews.com. The enquiry form opens a prepared WhatsApp message for the visitor to review and send; it does not submit or store customer data. Pack links also open WhatsApp. Prices and availability are handled by enquiry.

For deployment, upload only the contents of this website folder. The surrounding business documents are not website assets.

Content decisions: KAJUVA is the consumer brand, M S Cashews is the business. The address uses 691577 from GST/FSSAI records; packaging drafts use 691571 and should be reconciled. W180/W240/W320 and drum roasting come from the pouch specification. The owner has confirmed the family's cashew-trading roots began in 1965 with their great-grandfather and continued through successive generations. The page presents this as family heritage, not the incorporation date of the current entity or the launch date of Kajuva. Exclusive Kollam sourcing and international-standard claims remain omitted. No registered-trademark claim is made from an application alone.

The original HTML is preserved in ../.review/index.original.html. The page has been checked in Edge at desktop and mobile sizes, including 320 px, with navigation, images, FAQs and WhatsApp message generation verified. This is a local website, not a deployed site.

Imagery update: the site now uses a generated dimensional emerald-and-gold pouch concept based on the supplied September 30 PNG references, plus generated premium food imagery. The original draft packaging is no longer displayed. Production-ready WebP images are in assets/kajuva-pouch-premium.webp, assets/cashews-editorial.webp and assets/cashew-bowl-premium.webp. Exact prompts are preserved in ../.review/image-prompts.md. Packaging remains a concept, as stated below the collection.

Family and media update: all eight supplied Images photographs are included as optimized WebP files. All three MP4 clips are copied into assets with poster frames. Videos use native controls, play inline, start muted, do not autoplay, and use preload=none. Raw-stock images are in an expandable gallery. Original files in Images are unchanged. Update GitHub by replacing index.html, styles.css and script.js and uploading the complete assets folder beside them.

## Local SEO update — 1 October 2026

- Added the requested business-first title, a 153-character description, canonical URL, Open Graph and Twitter card metadata using the existing 1200 × 1200 WebP hero image.
- The single H1 now describes premium cashews from Kollam, Kerala. The hero retains the Kajuva brand statement and connects M S Cashews to the family's cashew-trade roots since 1965. Story and premises copy clarify the location without adding manufacturer, exporter or wholesale claims.
- Added LocalBusiness JSON-LD with the visible name, address, telephone, email and Kajuva brand relationship. The family heritage date is not represented as the current entity's founding date.
- Added a contact location heading and full address, refined premises image descriptions, and retained existing links, scripts, media attributes, visual styling and responsive breakpoints. The heritage group uses a neutral container beneath the story rather than a separate section without a heading.
- Added robots.txt allowing crawling and sitemap.xml listing only the homepage. Upload both to the production document root alongside index.html.

No production hostname or preferred www/non-www version was configured in this project. Per the requested fallback, all absolute SEO URLs consistently use https://www.mscashews.com/. Confirm this host before deployment; if another canonical host is required, update index.html, robots.txt and sitemap.xml together. Configure permanent redirects from alternate host/protocol versions at the hosting provider and verify the live site serves the homepage, assets, robots and sitemap successfully without an X-Robots-Tag: noindex header. Local verification cannot confirm hosting response headers, DNS, redirects or Google indexing.

Manual follow-up:

1. Provide the verified Google Business Profile / Maps location URL; the contact location contains the requested TODO comment and no empty map.
2. Create/verify the Search Console property. Supply its verification meta tag if using HTML-tag verification; the head contains the requested TODO. Submit the live sitemap after deployment.
3. Confirm the canonical production host above. The existing README's packaging-postcode discrepancy (691571 versus the business address 691577) still needs reconciliation outside the website; the visible address and JSON-LD consistently use 691577.
4. Prices, stock, grade/size combinations, hours and coordinates remain unasserted where unverified. They are not required to deploy this enquiry-based page.

Product schema is intentionally omitted for this multi-product enquiry homepage: no published offers/prices or genuine reviews exist, and Google product snippets require an offer, review or aggregate rating as well as product-focused content. Descriptive schema.org Product data can be valid without those fields, but would not qualify this page for Google product rich results. The visible grades, sizes and availability-by-enquiry explanation remain intact. Guidance: https://developers.google.com/search/docs/appearance/structured-data/product-snippet

FAQPage schema is intentionally omitted while preserving every visible FAQ. Google's current changelog says FAQ rich results stopped appearing on 7 May 2026 and the associated documentation was removed in June: https://developers.google.com/search/updates

Validation: headless Edge passed at 320, 375, 760, 768, 1024 and 1440 px with no horizontal overflow or browser errors. Checked one H1, JSON-LD parsing, canonical consistency, unique IDs, local assets, all fragment targets, image decoding, mobile menu opening/closing/Escape, FAQ and stock-gallery expansion, video playback and single-video behavior. Intercepted WhatsApp form output confirmed the telephone, selected grade, bulk pack and correctly encoded special characters without sending a message. Hero and contact screenshots were inspected at mobile/tablet sizes. Review-only checks and screenshots are stored outside the deployable folder in ../.review/.

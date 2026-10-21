# Threadline Cultural Provenance Passport

An early-stage ecommerce widget concept designed to sit inside a retailer's product detail page (PDP).

## Files
- `index.html`: fictional fashion PDP with the widget in context.
- `threadline-widget.js`: reusable widget script.
- `threadline-enquiry.html`: prototype enquiry destination.

## Shopper journey
1. Shopper stays on the retailer's PDP.
2. A compact Threadline widget appears with the product information.
3. Clicking the widget opens a side drawer without navigating away.
4. The drawer has five segments: garment anatomy, meaning and cultural context, materials and techniques, making and craftsmanship, and provenance and authorship.
5. A shopper who needs deeper help follows the enquiry link to Threadline.

## Embed concept
After GitHub Pages is enabled, add a mount point to a compatible storefront and load the hosted script:

```html
<div id="threadline-passport-widget"
     data-product-name="The Heritage Weave"
     data-brand-name="Example Designer"
     data-threadline-url="https://YOUR-THREADLINE-ENQUIRY-PAGE">
</div>
<script src="https://joygraham.github.io/threadline-passport/threadline-widget.js" defer></script>
```

For Shopify, product and brand information can be filled in with Liquid in an appropriate theme section. Replace the enquiry URL with Threadline's actual public contact page before a pilot.

## Limitations
This is a user-experience prototype with fictional sample copy. It is not a verified passport. The enquiry form does not send or store submissions. There is no live product database, content-management workflow, analytics, Shopify app block or verification process yet. Production use requires designer-approved content, supporting evidence and platform-specific integration.

## GitHub Pages
Open repository **Settings → Pages** and set the source to **GitHub Actions**. Check the **Actions** tab for the deployment result.

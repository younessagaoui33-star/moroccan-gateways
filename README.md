# Moroccan Gateways website

Static site (HTML + CSS + JS). No build step, no dependencies.

## Run in VS Code
1. File > Open Folder... and choose this folder.
2. Install the "Live Server" extension (VS Code will suggest it).
3. Right-click `index.html` > "Open with Live Server".

Do not open it by double-clicking in a few browsers: use Live Server (or any local web server) so everything loads correctly.

## Files
- `index.html` – page structure
- `style.css` – all styles
- `script.js` – tours data, routing, translations (EN / ES / FR), animations
- `images/` – all photos (your own photos)

## Where to edit
- Contact data (phone, WhatsApp 212651725529, email, Instagram): search in `index.html` and `script.js`
- Tripadvisor link: `var TA=` in `script.js`
- Reviews: `var RV=` in `script.js`
- Tours: `var C=[` in `script.js`

## Before going public
- Confirm you have the right to use every photo (people shown, third-party images).
- Replace the generic Facebook link in the footer.

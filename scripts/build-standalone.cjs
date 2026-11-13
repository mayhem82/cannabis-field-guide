const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
let html = read('index.html');
for (const css of ['style.css', 'readability.css', 'custom.css']) {
  html = html.replace(`<link rel="stylesheet" href="./${css}">`, `<style>\n${read(css)}\n</style>`);
}
const icon = fs.readFileSync(path.join(root, 'favicon.svg')).toString('base64');
html = html.replace('./favicon.svg', `data:image/svg+xml;base64,${icon}`);
const hero = fs.readFileSync(path.join(root, 'assets/hero.png')).toString('base64');
const script = read('app.js').replace('./assets/hero.png', `data:image/png;base64,${hero}`).replace(/<\/script/gi, '<\\/script');
html = html.replace('<script src="./app.js" defer></script>', `<script>\n${script}\n</script>`);
if (html.includes('src="./app.js"') || html.includes('./assets/hero.png')) throw new Error('Could not embed site assets');
fs.writeFileSync(path.join(root, 'cannabis-field-guide.html'), html);
console.log('Updated cannabis-field-guide.html');

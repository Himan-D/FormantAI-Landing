const HTMLtoJSX = require('html-to-jsx');
const fs = require('fs');

const converter = new HTMLtoJSX({
  createClass: false,
});

const files = ['header', 'top-section', 'demos', 'partners', 'contact', 'footer'];

for (const file of files) {
  const html = fs.readFileSync(`./src/${file}.html`, 'utf-8');
  if (html) {
    const jsx = converter.convert(html);
    fs.writeFileSync(`./src/${file}.tsx`, `export default function ${file.charAt(0).toUpperCase() + file.slice(1).replace('-', '')}() {\n  return (\n    <>\n      ${jsx}\n    </>\n  );\n}\n`);
  }
}

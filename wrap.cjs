const fs = require('fs');

const files = [
  { name: 'header.tsx', wrapStart: '<header class="sc-a3e19eb5-0 iqeUBr">', wrapEnd: '</header>' },
  { name: 'demos.tsx', wrapStart: '<section id="demos" class="sc-cc486fe9-0 hiknHT sc-c6950d85-0 jYumZO">', wrapEnd: '</section>' },
  { name: 'partners.tsx', wrapStart: '<section id="partners" class="sc-cc486fe9-0 hiknHT sc-b2a7b073-0 boBIWz">', wrapEnd: '</section>' },
  { name: 'contact.tsx', wrapStart: '<section id="contact" class="sc-cc486fe9-0 hiknHT sc-299d2936-0 kuRnKr">', wrapEnd: '</section>' },
  { name: 'footer.tsx', wrapStart: '<footer class="sc-90713da0-0 cXXjGE">', wrapEnd: '</footer>' },
];

for (const {name, wrapStart, wrapEnd} of files) {
  const filepath = 'src/' + name;
  let content = fs.readFileSync(filepath, 'utf-8');
  if (content.includes(wrapStart)) {
    console.log(`Skipping ${name} (already wrapped)`);
    continue;
  }
  // Replace `return parse(`...`);`
  content = content.replace(/return parse\(`(.*)`\);/s, `return parse(\`${wrapStart}$1${wrapEnd}\`);`);
  fs.writeFileSync(filepath, content);
  console.log(`Wrapped ${name}`);
}

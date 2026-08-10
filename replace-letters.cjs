const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'top-section.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// The new string we want to insert.
const newText = "BUILDING HYSTERESIS IN AI".split('');

// Extract the H2 block.
const h2Start = content.indexOf('<h2');
const h2End = content.indexOf('</h2>') + 5;
const h2Content = content.substring(h2Start, h2End);

// Find all top-level spans with data-character.
const regex = /<span data-character="([^"]*)" class="sc-35e34011-0 [^"]*">(.*?)<\/span>/g;
let match;
const spans = [];
while ((match = regex.exec(h2Content)) !== null) {
  spans.push(match[0]);
}

let newH2 = '<h2 class="sc-ed4608bb-0 bXHLJU">';
let spanIndex = 0;

for (let i = 0; i < newText.length; i++) {
  const char = newText[i];
  
  if (char === ' ') {
    newH2 += '<span data-character=" " class="sc-35e34011-0 fbyDOU"></span>';
    // Add the break line span if needed. Wait, in original there is `<span class="sc-ed4608bb-1 ka-dKDD"></span>` to force a line break, let's keep it after the first space.
    if (i === 8) { // After "BUILDING"
        newH2 += '<span class="sc-ed4608bb-1 ka-dKDD"></span>';
    } else if (i === 19) { // After "HYSTERESIS"
        newH2 += '<span class="sc-ed4608bb-1 ka-dKDD"></span>';
    }
  } else {
    // take the next available letter span from the original
    let template = spans[spanIndex % spans.length];
    // replace its data-character
    template = template.replace(/data-character="[^"]*"/, `data-character="${char}"`);
    newH2 += template;
    spanIndex++;
  }
}
newH2 += '</h2>';

const newContent = content.substring(0, h2Start) + newH2 + content.substring(h2End);
fs.writeFileSync(targetFile, newContent);
console.log("Updated top-section.tsx");

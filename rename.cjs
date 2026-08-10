const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  // Replacements
  content = content.replace(/Plastic Labs/g, 'Hystersis');
  content = content.replace(/PLASTIC LABS/g, 'HYSTERSIS');
  content = content.replace(/Plastic/g, 'Hystersis');
  content = content.replace(/PLASTIC/g, 'HYSTERSIS');
  content = content.replace(/plasticlabs\.ai/g, 'hystersis.com');
  content = content.replace(/plasticlabs/g, 'hystersis');
  
  // Specific taglines / branding if needed
  content = content.replace(/RADICALLY DECENTRALIZING AI ALIGNMENT/g, 'BUILDING MEMORY AND HYSTERESIS IN AI');
  content = content.replace(/Radically Decentralizing Alignment/g, 'Building Memory and Hysteresis in AI');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git'].includes(file)) {
        walkDir(fullPath);
      }
    } else {
      if (/\.(html|ts|tsx|json|js)$/.test(file)) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(__dirname);

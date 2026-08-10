const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/Hystersis/gi, 'Formant AI');
  content = content.replace(/Plastic Labs/gi, 'Formant AI');
  content = content.replace(/PlasticLabs/gi, 'FormantAI');
  content = content.replace(/Building Memory and Hysteresis in AI/gi, 'SOTA Deepfake Audio Detection');
  content = content.replace(/An engineering-driven AI lab building at the intersection of machine learning and cognitive science/gi, 'A deepfake detection lab mapping the physical constraints of the human vocal tract.');
  
  // Custom replaces for subpages and links
  content = content.replace(/Knowledge Graph/gi, 'Architecture');
  content = content.replace(/Semantic Memory/gi, 'Late-Fusion Models');
  content = content.replace(/Graph Explorer/gi, 'Try Demo');
  content = content.replace(/Memory API/gi, 'API Docs');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('dist')) {
        traverseDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.html') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
        replaceInFile(fullPath);
      }
    }
  }
}

traverseDir(__dirname);
console.log('Conversion to Formant AI completed.');

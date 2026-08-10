const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Replace everything between <body> and </body> with our root div and main.tsx script
html = html.replace(/<body[^>]*>([\s\S]*?)<\/body>/i, '<body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>');

// Remove _next scripts
html = html.replace(/<script[^>]*src="\/_next[^>]*><\/script>/gi, '');
html = html.replace(/<script[^>]*>self\.__next_f\.push[\s\S]*?<\/script>/gi, '');

fs.writeFileSync('index.html', html);
console.log('Fixed index.html');

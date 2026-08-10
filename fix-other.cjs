const fs = require('fs');
['blog.html', 'neuromancer.html'].forEach(file => {
  if (fs.existsSync(file)) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<body[^>]*>([\s\S]*?)<\/body>/i, '<body><div id="root"></div><script type="module" src="/src/main.tsx"></script></body>');
    html = html.replace(/<script[^>]*src="\/_next[^>]*><\/script>/gi, '');
    html = html.replace(/<script[^>]*>self\.__next_f\.push[\s\S]*?<\/script>/gi, '');
    fs.writeFileSync(file, html);
    console.log('Fixed ' + file);
  }
});

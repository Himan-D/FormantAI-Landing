const fs = require('fs');

// Update top-section.tsx
let top = fs.readFileSync('src/top-section.tsx', 'utf8');
top = top.replace(
  /Hystersis is an engineering-driven AI lab building at the intersection of machine learning and cognitive science\./g,
  'Hystersis is an AI infrastructure platform that provides persistent memory for AI agents.'
);
top = top.replace(
  /Our focus is developing.*?for individual alignment\./g,
  'Our platform enables AI agents to retain information across conversations and sessions, moving beyond stateless prompts. We utilize <span class="sc-d81dc29e-1 jEWSET">graph-powered storage</span>, semantic search, and proprietary compression algorithms to manage memory at enterprise scale, powering multi-hop reasoning and true contextual awareness.'
);
fs.writeFileSync('src/top-section.tsx', top);

// Update demos.tsx
let demos = fs.readFileSync('src/demos.tsx', 'utf8');
demos = demos.replace(/>Products</g, '>Features<');
demos = demos.replace(/>Honcho</g, '>Knowledge Graph<');
demos = demos.replace(/>Neuromancer models</g, '>Semantic Memory<');
demos = demos.replace(/>Enter honcho</g, '>Graph Explorer<');
demos = demos.replace(/>Enter neuromancer</g, '>Memory API<');

demos = demos.replace(/>Demos</g, '>Capabilities<');
demos = demos.replace(/>Honcho Chat</g, '>Spreading Activation<');
demos = demos.replace(/>Penny for your thoughts</g, '>Persistent Context<');
demos = demos.replace(/>Yousim</g, '>Agent SDKs<');
demos = demos.replace(/>Enter yousim</g, '>SDK Docs<');
demos = demos.replace(/>Enter Penny for your thoughts</g, '>Context Engine<');
fs.writeFileSync('src/demos.tsx', demos);

console.log('Updated content.');

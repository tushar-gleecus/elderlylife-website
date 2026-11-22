// Copies the static site from public/ to build/ and adds 404.html,
// so any old URL (for example /plans) shows the same holding page.
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, 'build');
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, 'public'), out, { recursive: true });
fs.copyFileSync(path.join(out, 'index.html'), path.join(out, '404.html'));
console.log('Built holding page into build/');

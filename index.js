const marked = require('marked');
const fs = require('fs');
const inputFile = './test.md';
const templateFile = './templates/html.html';
const outputFile = './out.html';

// get html template
const placeholder = '<++>'; // where to inject generated html
const html = fs.readFileSync(templateFile, 'utf8');

// read markdown and compile into html using template
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) throw err;
  fs.writeFileSync(outputFile, html.replace(placeholder, marked(data)));
});
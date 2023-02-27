const fs = require('fs');
const pug = require('pug');

let compileFile = pug.compileFile('../modules/table.pug')
users = JSON.parse(fs.readFileSync('./accounts.json'));
console.log(compileFile(users));


// let html = compileFile(users);
// fs.writeFile(html)
// pug.renderFile('../modules/table.pug', { users: users });

// document.querySelector('.content__inner').innerHTML = tableHtml;

// var pug = require('pug');
// var fn = pug.compileFile('../modules/table.pug');
// var locals = require('./accounts.json');
// console.log(fn({
//     users: locals
// }));
// console.log(locals)



// - its works on Node.js local server
// const express = require('express');
// const app = express();
// const pug = require('pug');
// const { readFileSync } = require('fs');
// const path = require('path');


// const users = JSON.parse(readFileSync('./accounts.json'));
// console.log(users)

// app.use(express.static('/src'));

// app.get('/', (req, res) => {
//     const html = pug.renderFile('../index.pug', { users: users });
//     res.send(html);
// });



// app.get('/style/dist/output.css', function (req, res) {
//     res.setHeader('Content-Type', 'text/css');
//     res.sendFile(path.join(__dirname, '../style/dist/output.css'));
// });

// const fs = require('fs');
// const postcss = require('postcss');
// const postcssImport = require('postcss-import');

// const css = fs.readFileSync('../style/dist/style.css', 'utf8');

// postcss()
//     .use(postcssImport())
//     .process(css, { from: '../style/dist/style.css', to: '../style/dist/style.css' })
//     .then(result => {
//         fs.writeFileSync('../style/dist/output.css', result.css);
//     });


// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });










// didnt work
// accounts.forEach(elem => {
//     const tr = document.createElement('tr');
//     const tdContent = `<td>${elem.name}</td>
//                           <td>${elem.company}</td>
//                           <td>${elem.country}</td>
//                           <td>${elem.email}</td>
//                           <td>${elem.phoneNumber}</td>
//                           <td class='${elem.status === 'Active' ? 'active' : 'inactive'}'>${elem.status}</td>`;
//     tr.innerHTML = tdContent;
//     document.querySelector('table tbody').appendChild(tr);
// });









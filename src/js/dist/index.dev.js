"use strict";

var _require = require('fs'),
    readFileSync = _require.readFileSync;

var _require2 = require('pug'),
    compileFile = _require2.compileFile;

var compileFunc = compileFile('../modules/table.pug');
var users = JSON.parse(readFileSync('./accounts.json'));
var tableHtml = compileFunc({
  users: users
});
console.log(users); // window.querySelector('.content__table').innerHTML = tableHtml;
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
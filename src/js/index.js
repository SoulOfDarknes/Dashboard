const { readFileSync } = require('fs');
const { compileFile } = require('pug');

const compileFunc = compileFile('../modules/table.pug');

const users = JSON.parse(readFileSync('./accounts.json'));

const tableHtml = compileFunc({ users });
console.log(users)
// window.querySelector('.content__table').innerHTML = tableHtml;











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









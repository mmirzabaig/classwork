require('./db');

const Company = require('./schemaPage');
//
// Company.create({name: 'Apple',
// founded: 'April 1, 1976',
// employees: 15,
// active: true,
// products: ['computers'],
// ceo: {
//   name: 'Steve Jobs',
//   age: 21
// }},
// (err, createdCompany) => {
//   if(err){
//         console.log(err)
//     } else {
//         console.log(createdCompany);
//     }
// });
// Company.create({name: 'Google',
// founded: 'September 4, 1998',
// employees: 57100,
// active: true,
// products: ['search', 'maps', 'email'],
// ceo: {
//   name: 'Larry Page',
//   age: 43
// }},
// (err, createdCompany) => {
//   if(err){
//         console.log(err)
//     } else {
//         console.log(createdCompany);
//     }
// });



// Company.update(
//   {name: 'Apple'},
//   {$set: { name: 'Apple Inc'},
//            founded: 'September 5, 1999',
//            employees: 60000,
//            active: true,
//            products: ['computers', 'phones'],
//            ceo: {
//              name: 'Tim Cook',
//              age: 57
//            }
//         },
//         (err, createdCompany) => {
//           if (err) {
//             console.log(err)
//           } else {
//             console.log(createdCompany);
//           }
//         }
// )
// Company.updateOne(
//   {nane: 'Apple Inc'},
//   {$set: {name : 'Apple Apple'}}, (err, cCompany) => {
//     console.log('IT WORKING!');
//   }
// )

Company.find({
  name: 'Google'
}, (err, gCompany) => {
  console.log(gCompany);
});

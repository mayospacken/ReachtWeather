// var names = ['Paul', 'mario', 'seb'];
//
// names.forEach(function (name) {
//     console.log('forEach', name);
// });
//
// names.forEach((name) => {
//     console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Mayo'));

// var person = {
//     name: 'Mayo',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);
//         });
//     }
// };
//
// person.greet();

// Challenge
function add (a, b) {
    return a + b;
}
// Statement
var addStatement = (a, b) => {
    return a + b;
}

// Expression
var addExpression = (a, b) => a + b;

console.log(addStatement(4, 7));
console.log(addExpression(4,1));

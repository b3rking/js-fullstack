// modules

const names = require('./4-names')
const sayHi = require('./5-utils')
const sing = require('./6-alternative-flavor')

// console.log(names);

console.log(sing);

// sayHi(names.peter)
// sayHi(names.john)
// sayHi(names.susan)


console.log(sing.singlePerson.calcAge());
console.log(sing.singlePerson.age);
typeof(sing.singlePerson.age)
console.log(sing.singlePerson.name);
console.log(sing.items[1]);

sing.items.map((index)=> {
    console.log(index);
})

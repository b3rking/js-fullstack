const path = require('path')

console.log('first console');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
console.log(path.sep);
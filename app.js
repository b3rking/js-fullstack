const { readFile, writeFile } = require('fs')



// const first = readFile('./content/first.txt', 'utf-8', (err, res) => {
//     if (err) {
//         return null
//     }
//     const first = res
//     const second = readFile('./content/second.txt', 'utf-8', (err, res) => {
//         if (err) {
//             return null
//         }
//         const second = res
//     })
//     writeFile('./content/async.txt', `i did it ${first} and here the next one ${second}`, (err, res) => {})
// })








const first = readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        return null
    }
    return res
})

const second = readFile('./content/second.txt', 'utf-8', (err, res) => {
    if (err) {
        return null
    }
    return res
})

writeFile('./content/async.txt', `i did it ${first} and here the next one ${second}`, (err, res) => {})
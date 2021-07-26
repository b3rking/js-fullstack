const {readFile, writeFile} = require('fs');
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8')
        const second = await readFilePromise('./content/second.txt', 'utf8')
        await writeFilePromise('./content/learning.txt', `${first} ${second}`)
        console.log(first, second);
    } catch (err) {
        console.log(err);
    }
}

start()


// const getTxt = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }


// getTxt('./content/first.txt')
// .then((res)=> {console.log(res);})
// .catch((err) => {console.log(err);})

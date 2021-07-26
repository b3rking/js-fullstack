const {createReadStream} = require('fs')

const stream = createReadStream('./content/big-file.txt', 'utf8')

stream.on('data', (res) => {
    console.log(res);
})
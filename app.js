const http = require('http')


const server = http.createServer((req, res) => {
    res.end('my own server without any cheat')
})

server.listen(3200, ()=>{console.log('http://127.1.1:3200')})
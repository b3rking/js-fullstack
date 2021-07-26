const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('a server yayaaa')
    res.end()
})

server.listen(5000, () => {
    console.log('b3rking server started at http://localhost:5000');
})

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('welcome to the home page')
        res.end()
    }
    else if (req.url === '/about') {
        res.write('a short history of our company')
        res.end()
    }
    res.write(`
        <h1>Oops</h1>
        <strong><p>i think you're lost</p></strong>
    `)
    res.end()
})

server.listen(5000)
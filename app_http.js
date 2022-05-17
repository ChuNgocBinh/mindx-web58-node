const http = require('http')
const fs = require('fs')
const filePath = 'files/cats.txt'

const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Hello World</title>')
        res.write('<script>alert(1)</script>')
        res.write('</head>')
        res.write(`<body><h1>Biet trc da giau</h1><hr><br><span>${data}</span></body>`)
        res.write('</html>')
        res.end()
    })
})

server.listen(1114, 'localhost');
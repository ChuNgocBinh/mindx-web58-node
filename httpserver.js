const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile("file/name.json", (err, data) => {
        const info = JSON.parse(data)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.write('<html>')
        res.write('<head>')
        res.write('<title>Table</title>')
        res.write('</head>')
        res.write('<body>')
        res.write('<table border="1">')
        res.write('<tr>')
        res.write('<tr>')
        res.write('<tr>')
        res.write('<th>name</th>')
        info.map((item) => res.write(`<td>${item.name}</td>`))
        res.write('</tr>')
        res.write('<tr>')
        res.write('<th>age</th>')
        info.map((item) => res.write(`<td>${item.age}</td>`))
        res.write('</tr>')
        res.write('</table>')
        res.write('<body>')
        res.write('</html>')
        res.end()
    })
})

server.listen(8080, () => {
    console.log('connect port 8080')
});
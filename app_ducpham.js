const express = require('express') // import zzz from 'ten module'
const app = express() // Tao ra mot instance - thực thể của web server
const port = 1113

// Routing GET POST PUT DELETE
app.get('/', (req, res) => { // req: request res: respone
    res.send('Hom nay troi that dep')
})

app.get('/z', (req, res) => {
    res.send('Day la routing tu cai /z')
})

app.listen(port, () => {
    console.log(`Bai hoc dau tien ${port}`)
})
const express = require('express')
const path = require('path')
const app = express()

app.use('/public', express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
})

app.listen(9000, () => {
    console.log('connect port 9000')
})
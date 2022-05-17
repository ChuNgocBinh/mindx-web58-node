const fs = require('fs')

let fileContent = "Mèo đen, Mèo trắng, Mèo méo meo....."
let array = ["Mèo vàng", "Mèo nâu"]
let filePath = "files/cats.txt"

fs.writeFile(filePath, fileContent, (err) => {
    if (err) throw err;
    console.info('File đã đc tạo ở', filePath);
})
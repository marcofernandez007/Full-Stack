const http = require('http'),
fs = require('fs'),
//leerStream = 'juegos.txt
index = fs.createReadStream('./index.html')

let miservidor = (req,res) => {
res.writeHead(200, {'Content-Type': 'text/html'})
index.pipe(res)
}

http.createServer(miservidor).listen(8080)

console.log('Conexión Realizada')
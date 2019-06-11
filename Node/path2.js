const http = require('http'),
    path = require('path'),
    urls = [
        {
            ruta: '',
            salida: './Home.html'
        },

        {
            ruta: 'acerca',
            salida: './Acerca.html'
        },

        {
            ruta: 'contacto',
            salida: './Contacto.html'
        }
    ]

http.createServer((peticion,respuesta) => {
    let mensaje = "Bienvenido",
        rutaURL = path.basename(peticion.url)
    urls.forEach((posicion) => {
        if (posicion.ruta == rutaURL) {
            respuesta.writeHead(200, { 'Content-Type': 'text/html' })
            respuesta.end(mensaje + posicion.salida)
        }
    })

    if (!respuesta.finished) {
        respuesta.writeHead(404, { 'Content-Type': 'text/html' })
        respuesta.end('<h1>Error 404: Not Found</h1>')
    }

}).listen(8080)
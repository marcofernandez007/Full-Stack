const http = require('http'),
    path = require('path'),
    urls = [
        {
            ruta: '',
            salida: '<h2>Inicio>/h2>'
        },

        {
            ruta: 'acerca',
            salida: '<h1>Acerca de</h2>'
        },

        {
            ruta: 'contacto',
            salida: '<h2>Contacto</h2>'
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
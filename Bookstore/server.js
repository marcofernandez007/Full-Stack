let http = require('http'), fs = require('fs'), url = require('url');
http.createServer((peticion,respuesta)=>{
    var path = url.parse(peticion.url).pathname;
    console.log(path);
    if(path=="/"){
        fs.readFile('./inicio.html',(error,dato)=>{
            if(error==null){
                respuesta.write(dato);
                respuesta.end();
            }
            else{
                respuesta.end();
            };
        });
    }
    else{
        fs.readFile('./'+path,(error,dato)=>{
            if(error==null){
                respuesta.writeHead(200);
                respuesta.write(dato);
                respuesta.end();
            }
            else{
                fs.readFile('./404.html',(error,dato)=>{
                    respuesta.writeHead(404,{'Content-Type':'text/html'});
                    respuesta.write(dato);
                    respuesta.end();
                });
            };
        });
    };
}).listen(8080);
console.log('Servidor activo...');

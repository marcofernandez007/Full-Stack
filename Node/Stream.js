const fs = require('fs')
//Crear Lectura de un fragmento
//Stream -> Fragmentación
//chunk -> Fragmento, Porciòn de..., Trozo de..
leerStream = fs.createReadStream('./Juegos.txt')
//Crear Escritura del fragmento
escribirStream = fs.createWriteStream('./Juegos_copia.txt')

//Pipe -> Crear una pequeña tuberìa que va a transportar
//la informaciòn de un punto A a un punto B

leerStream.pipe(escribirStream)
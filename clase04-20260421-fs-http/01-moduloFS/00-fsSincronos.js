const fs=require("fs")

// import fs from "fs";

let ruta="./archivos/texto1.txt"

let texto1=`La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`



// fs.writeFileSync(ruta, "prueba...", {encoding:"utf-8"})
fs.writeFileSync(ruta, texto1, )
if(fs.existsSync(ruta)){
    console.log(`El archivo ${ruta} existe...!!!`)
}

let datosArchivo=fs.readFileSync(ruta, "utf-8")
console.log(datosArchivo)

fs.appendFileSync(ruta, "\n\nEditorial Planeta")

setTimeout(() => {
    fs.unlinkSync(ruta)
    
}, 2000);




// Utilizando fs con métodos sincronos:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantall
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo



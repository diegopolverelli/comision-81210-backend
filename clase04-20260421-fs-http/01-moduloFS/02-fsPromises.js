const fs=require("fs")

let rutaArchivo="./archivos/archivoPromesas.txt"
let texto3=`
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// fs.promises.writeFile(rutaArchivo, texto3, )
//     .then(()=>{
//         console.log("Archivo creado...!!!")

//         fs.promises.readFile(rutaArchivo, "utf-8")
//             .then(datosDelArchivo=>{
//                 console.log(datosDelArchivo)

//                 // append
//             })
//             .catch(e=>{
//                 console.log(`Error al procesar datos: ${e.message}`)
//             })
//     })
//     .catch(e=>{
//         console.log(`Error al procesar datos: ${e.message}`)
//     })


// fs.promises.writeFile(rutaArchivo, texto3, )
//     .then(()=>{
//         console.log("Archivo creado...!!!")
//         return fs.promises.readFile(rutaArchivo, "utf-8")
//     })
//     .then(datosDelArchivo=>{
//         console.log(datosDelArchivo)

//         return fs.promises.appendFile(rutaArchivo, "\n\nEditorial Planeta")
//     })
//     .then(()=>{
//         console.log(`Editorial añadida...!!!`)

//         return fs.promises.unlink(rutaArchivo)
//     })
//     .then(()=>{
//         console.log(`Arhivo eliminado...!!!`)
//     })
//     .catch(e=>{
//         console.log(`Error al procesar datos: ${e.message}`)
//     })


const archivos=async()=>{
    try {
        await fs.promises.writeFile(rutaArchivo, texto3)
        console.log(`Archivo generado...!!!`)
        let datosArchivo=await fs.promises.readFile(rutaArchivo, "utf8")
        console.log(datosArchivo)
        await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Planeta")
        console.log("Editorial agregada...!!!")
        
        setTimeout(async() => {
            await fs.promises.unlink(rutaArchivo)
        }, 2000);
        
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
}

archivos()



// Utilizando fs con métodos asíncronos / promesas:
// 1) crear un archivo, 
// 2) leer el archivo y mostrar contenido en pantall
// 3) agregar al final del archivo un renglon en blanco y luego 
//    el texto "Editorial Planeta"
// 4) eliminar el archivo



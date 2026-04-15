const suma = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten números como argumento...!!!`)   // falla o rechazada (rejected)
        } else {
            res(a + b)   // salió OK (resolve)
        }
    })
}

const multiplica = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten números como argumento...!!!`)   // falla o rechazada (rejected)
        } else {
            res(a * b)   // salió OK (resolve)
        }
    })
}


// 5 x 5
suma(5, 5)
    .then(res1=>{
        suma(5, res1)
            .then(res2=>{
                suma(5, res2)
                    .then(res3=>{
                        suma(5, res3)
                            .then(resFinal=>{
                                console.log(`Resultado 5 X 5 (con promise Hell) = ${resFinal}`)
                            })
                    })
            })
    })


suma(5, 5)
    .then(res1=>{
        // throw new Error("error prueba...")
        return suma(5, res1)
    })
    .then(res2=>{
        return suma(5, res2)
    })
    .then(res2=>{
        return suma(5, res2)
    })
    .then(resFinal=>{
        console.log(`Res 5 x 5 con cadena promesas: ${resFinal}`)
    })
    .catch(error=>{
        console.log(`Error: ${error.message}`)
    })


suma(3, 3)
    .then(res=>{
        return res.toFixed(2)
    })
    .then(res=>{
        return `El resultado es ${res}`
    })
    .then(otroRes=>{
        return otroRes.toUpperCase()
    })
    .then(r=>console.log(r))


// 3x4 + 2x9
let aux1
multiplica(3, 4)
    .then(res1=>{
        aux1=res1
        return multiplica(2, 9)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(aux1, res2)
    })
    .then(resFinal=>{
        console.log(`Res 3x4 + 2x9 = ${resFinal}`)
    })

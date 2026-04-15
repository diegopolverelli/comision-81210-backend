const suma = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(`Solo se admiten números como argumento...!!!`)   // falla o rechazada (rejected)
        } else {
            res(a + b)   // salió OK (resolve)
        }
    })
}

console.log(suma(5, 7))
console.log(suma(5, 7)+10)


fetch("https://swapi.info/api/people/4")
    .then(data => {
        data.json()
            .then(personaje=>{
                console.log(personaje)
            })
            .catch(e=>{
                console.log(e.message)
            })
    })
    .catch(e=>{
        console.log(e.message)
    })



suma(5, 4)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(`Error: ${error}`)
    })
    .finally(()=>{
        console.log(`Esto ejecuta siempre 5 + 4...`)
    })

suma(5, "Pedro")
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(`Error: ${error}`)
    })
    .finally(()=>{
        console.log(`Esto ejecuta siempre 5 + Pedro...`)
    })

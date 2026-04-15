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

// 3x4 + 2x9

const cuenta=async()=>{
    try {
        let res1=await multiplica(3, 4)
        // let res2=await multiplica(2, "juan")
        let res2=await multiplica(2, 9)
        let resFinal=await suma(res1, res2)
        // console.log(`Res 3x4 + 2x9 = ${resFinal}`)
        return `Res 3x4 + 2x9 = ${resFinal}`
    } catch (error) {
         return `Error...!!! ${error}`
    }
}

// cuenta()

const main=async()=>{   // controller
    let resultado=await cuenta()
    console.log(resultado)
}

main()


// fetch("https://swapi.info/api/people/4")
//     .then(data => {
//         data.json()
//             .then(personaje=>{
//                 console.log(personaje)
//             })
//             .catch(e=>{
//                 console.log(e.message)
//             })
//     })
//     .catch(e=>{
//         console.log(e.message)
//     })

const recuperaPersonaje=async(id)=>{
    try {
        let response=await fetch(`https://swapi.info/api/people/${id}`)
        let datos=await response.json()
        return datos
        
    } catch (error) {
        return `Error: ${error.message}`
    }
}


const app = async()=>{
    try {
        let personaje=await recuperaPersonaje(1)
        console.log(personaje.name)
    } catch (error) {
        console.log(error)
    }
}

app()
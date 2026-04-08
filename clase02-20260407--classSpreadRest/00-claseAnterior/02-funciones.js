function suma(a, b){

    // codigo

    return `El resultado de sumar ${a} y ${b} es ${a+b}`
}

console.log(suma(5,4))
console.log(suma(50,40))
console.log(suma(15,14))
console.log(suma(0,4))

// DRY

function saludo(){
    console.log("hola")
    // return undefined
}

saludo()

let retorno=saludo()
console.log(retorno)

let nombre="Mariana"
console.log(nombre)
nombre=100
console.log(nombre)

// suma="es tomar un número y añadirle otro..."

const suma1=function(a, b){
    return a+b
}

console.log(suma(5, 4))

// suma1="cualquier cosa..."

console.log(suma1(6, 5))

// const sumaFlecha=(a, b)=>{
//     return a + b
// }

const sumaFlecha=(a, b)=>a+b

console.log(sumaFlecha(3, 2))

// const cubo=(a)=>a*a*a
const cubo=a=>a*a*a


console.log(cubo(3))

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

usuarios.forEach(elemento=>console.log(elemento.nombre))

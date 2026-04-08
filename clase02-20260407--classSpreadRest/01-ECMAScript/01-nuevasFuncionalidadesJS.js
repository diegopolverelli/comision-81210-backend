// includes
let nombres=["Juan", "Mariana", "Carlos", "Sabrina", "Veronica"]
console.log(nombres.includes("Carlos"))
console.log(nombres.includes("Matias"))

let datoUsuarioRequest={nombre:"Juan", edad:42, email:"juan@test.com", altura: 1.83}
const propiedades=Object.keys(datoUsuarioRequest)
// console.log(propiedades)
if(!propiedades.includes("email")){
    console.log(`El email es requerido`)
    return
}
console.log(datoUsuarioRequest)



// operador potencia
let numero=10
let potencia=3
console.log(Math.pow(numero, potencia))
console.log(numero**potencia)



// métodos Object
let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]
console.log(Object.values(usuarios[0]))
console.log(Object.keys(usuarios[0]))



// operador spread / operador rest
let usuarioRequest={nombre: "Diana", apellido: "Rojas", email: "drojas@test.com", edad:29}
let idAsignado=100
let nuevoUsuario={
    idAsignado, 
    // nombre: usuarioRequest.nombre,
    // apellido: usuarioRequest.apellido
    ...usuarioRequest
}

console.log(nuevoUsuario)


let numeros1=[1,2,3,4]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros1, 100, 200, 300, ...numeros2]

console.log(todosLosNumeros)


// const suma=(a, b, ...resto)=>{
//     console.log(a)
//     console.log(b)
//     console.log(resto)
//     return a+b
// }

// console.log("1)",suma(5, 6, 10))
// console.log("2)",suma(5, 6))
// console.log("3)",suma(5, 6, "a", false, [1, 2, 3]))
// console.log("4)",suma())

const suma=(...operandos)=>{  // ... son aquí operador rest
    let resultado=0

    operandos.forEach(n=>resultado+=n)

    return resultado
}

console.log(suma())
console.log(suma(1, 2))
console.log(suma(1, 2, 3))
console.log(suma(1, 2, 3, 100, 200, 300))

console.log(suma(...numeros1))  // ... son acá el operador spread

let email="otrocorreo"

let {nombre, email:correo, colorOjos} = usuarioRequest
// console.log(nombre)
// console.log(correo)
// console.log(colorOjos)

let {nombre:nombre1, ...otrasPropiedades} = usuarioRequest  // ... son aquí el operador REST
console.log(nombre1)
console.log(otrasPropiedades)

usuarioRequest={
    domicilio:"calle nn, 104...", 
    // nombre: "Marco",
    email: "marco@test.com"
}
console.log(usuarioRequest)


let propiedadesValidas=["nombre", "email", "domicilio"]
let propiedadesNewUser=Object.keys(usuarioRequest)

let datosCorrectos=propiedadesNewUser.every(p=>propiedadesValidas.includes(p))
if(!datosCorrectos){
    console.log(`Error en los datos ingresados...!!!`)
    return 
}

console.log("Usuario validado...!!!")


// let nombre=usuarioRequest.nombre

// operador nulish ??




// array.flat()
let arrayAnidado=[1,2,3,[4,5,6],7,8,[9],10,11,12]



arrayAnidado=[1,2,3,[4,5,6],7,8,[9,[10,11,12],13,14,[15,[16,17,18]]],19,20]







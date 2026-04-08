console.log(typeof "hola")
console.log(typeof 100)
console.log(typeof true)
console.log(typeof 2n)

let persona={
    nombre: "Julian", 
    apellido: "Alvarez", 
    edad: 24,
}

console.log(typeof persona)

let numeros=[1, 2, 3, 4, 5, "juan", persona]

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
// String
// Object
console.log(Array.isArray(100))
console.log(Array.isArray(numeros))

console.log(persona)

console.log(Object.keys(persona))
console.log(Object.values(persona))


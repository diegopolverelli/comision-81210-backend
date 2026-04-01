function suma(a, b){
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


const miMap=(array=[], fn)=>{
    let resultado=[]

    array.forEach(valor=>{
        let resAuxiliar=fn(valor)
        resultado.push(resAuxiliar)
    })

    return resultado
}

function x3(numero){
    return numero*3
}

let numeros=[1,2,3,4,5]
let numerosx3=miMap(numeros, x3)
console.log(numeros)
console.log(numerosx3)

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

let usuariosNombres=miMap(usuarios, u=>u.nombre.toUpperCase())
console.log(usuariosNombres)


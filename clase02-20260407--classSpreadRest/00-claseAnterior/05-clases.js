// class

class Persona{

    static #cantidadPersonasDefinidas=0

    domicilio=""
    referencias=""
    #edad=0
    #email

    constructor(nombre, edad, email, domicilio, referencias){
        this.nombre=nombre
        this.#edad=edad
        this.#email=email
        this.domicilio=domicilio
        this.referencias=referencias
        Persona.#cantidadPersonasDefinidas++
    }

    static consultarCantidadPersonas(){
        return this.#cantidadPersonasDefinidas
    }


    saludar(){
        return `Hola me llamo ${this.nombre}; mi correo es ${this.#email}`
    }

    cambiarEdad(edad){
        // validacion
        if(edad<1){
            throw new Error("Edad tiene que ser positiva")
        }

        this.#edad=edad

    }


}

let persona01=new Persona("Juan", 34, "juan@test.com", "", "")
let persona02=new Persona("Matilde", 23, "mati@test.com", "", "")
let persona03=new Persona("Mariana", 42, "mariana@test.com", "", "")
let persona010=new Persona("Mariana10", 46, "mariana10@test.com", "", "")

// let persona04={
//     nombre:"Pedro", 
//     edad: 29
// }

console.log(persona01)
console.log(persona02)
console.log(persona03.saludar())
console.log(persona02.saludar())
// console.log(persona01.cambiarEdad(30))
console.log("intento imprimir edad:", persona01.edad)
persona01.cambiarEdad(30)
console.log("intento imprimir edad:", persona01.edad)
// persona01.
console.log("intento imprimir edad:", persona01.edad)
// persona01.cambiarEdad(-5)


console.log(`Se han definido ${Persona.consultarCantidadPersonas()} personas`)


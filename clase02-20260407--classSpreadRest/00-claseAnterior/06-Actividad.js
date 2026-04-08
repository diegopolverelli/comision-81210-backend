// Crear una clase llamada ProductManager que gestione un conjunto de 
// productos.
// Aspectos a Incluir:
// La clase debe crearse desde su constructor con el elemento products, 
// el cual será un arreglo vacío.

// Cada producto gestionado debe contar con las siguientes propiedades:
// - title (nombre del producto)
// - description (descripción del producto)
// - price (precio)
// - thumbnail (ruta de imagen)
// - code (código identificador)
// - stock (número de piezas disponibles)

// Métodos a Implementar
// addProduct: Este método debe agregar un producto al arreglo de productos
// inicial.
// Debe validar que no se repita el campo code y que todos los campos sean 
// obligatorios.
// Al agregar un producto, debe crearse con un id autoincrementable.

// getProducts: Este método debe devolver el arreglo con todos los 
// productos creados hasta el momento.

// getProductById: Este método debe buscar en el arreglo el producto que 
// coincida con el id.
// En caso de no encontrar ningún id coincidente, debe mostrar en consola 
// el error "Not found".


// let productos=[]

// productos.push({id:1, title:"Remera"})
// productos.push({id:1, title:"Remera"})
// productos.push({id:1, title:"Remera"})
// productos.push({id:1, title:"Remera"})

class ProductManager{

    #productos=[]

    constructor(){
        this.#productos=[]   // [{ id:1, title: "remera 1"}, { id:2, title: "remera 2"}, { id:3, title: "pantalon"}]
    }

    addProduct(title, price, stock){

        // validaciones
        if(!title || !price){
            console.log(`Title y price son requeridos`)
            return 
        }

        if(typeof price!="number"){
            console.log(`Precio debe ser numérico`)
            return
        }

        let id=1
        if(this.#productos.length>0){
            id=this.#productos[this.#productos.length-1].id+1
        }

        let newProduct={
            id, 
            title, 
            price, 
            stock
        }

        this.#productos.push(newProduct)
    }

    getProducts(){
        return this.#productos
    }

}

let productManager=new ProductManager()

// productManager.productos.push({id:1, title:"Remera"})

console.log(productManager.getProducts())

productManager.addProduct("Remera 1", 100, 4)
productManager.addProduct("Remera 2", 98.70, 12)
productManager.addProduct("Pantalon", 120, 20)
productManager.addProduct("Pantalon", "precio caro...", 20)


console.log(productManager.getProducts())
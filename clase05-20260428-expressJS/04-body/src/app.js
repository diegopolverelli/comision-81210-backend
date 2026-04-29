const express=require("express")
const { UsersManager } = require("./dao/UsersManager.js")

const PORT=3000

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const usersManager=new UsersManager("./src/data/users.json")

app.get("/productos", (req, res)=>{  //request / response

    res.send("productos...")
})

app.get("/users", async(req, res)=>{  //request / response

    try {
        // logica de informe users
        let users=await usersManager.getUsers()
    
        console.log(req.query)
        let {limit}=req.query
        if(limit){
            users=users.slice(0, limit)
        }
    
        res.send(users)
    } catch (error) {
        res.send({error:"Internal server error", message: error.message})
    }
})

app.get("/users/:id", async(req, res)=>{  //request / response
    
    // let id=req.params.id
    let {id}=req.params

    try {
        // logica de informe users
        let users=await usersManager.getUsers()
    
        // validaciones pertinentes... etc...
        let user=users.find(u=>u.id==id)
        if(!user){
            res.send({error: `No existen usuarios con id ${id}`})
            return 
        }
    
        res.send(user)
    } catch (error) {
        res.send({error:"Internal server error", message: error.message})
    }
})

app.get("/users/filtro/:name", async(req, res)=>{  //request / response
    
    // let id=req.params.id
    let {name}=req.params

    try {
        // logica de informe users
        let users=await usersManager.getUsers()
    
        // validaciones pertinentes... etc...
        let user=users.find(u=>u.name==name)
        if(!user){
            res.send({error: `No existen usuarios con name ${name}`})
            return 
        }
    
        res.send(user)
    } catch (error) {
        res.send({error:"Internal server error", message: error.message})
    }
})


app.post("/users", async(req, res)=>{  //request / response
    // logica de alta de user
    console.log(req.body)

    try {
        let {name, email, password, ...otros}=req.body  // los ... son el operador REST
        console.log(otros)
        if(!name || !email || !password){
            res.send({error: "email, name, y password son requeridos"})
            return 
        }

        // resto validaciones
        // let nuevoUsuario=await usersManager.createUser({name, email, password, ...otros}) // ... son spread
        let nuevoUsuario=await usersManager.createUser({name, email, password})

        res.send(nuevoUsuario)
    } catch (error) {
        res.send({error:"internal server error", message: error.message})
    }

})

app.delete("/users/:id", (req, res)=>{  //request / response
    // logica de alta de user


    res.send("eliminar user con id "+req.params.id)
})

app.get("/registro", (req, res)=>{  //request / response

    res.send("registro...")
})

app.get("/", (req, res)=>{  //request / response

    res.send("Home Page")
})

// app.get("*", (req, res)=>{  //request / response

//     res.send("404 - not found")
// })




app.listen(PORT, ()=>{
    console.log(`Server on line in port ${PORT}`)
})
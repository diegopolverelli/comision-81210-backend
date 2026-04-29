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

app.post("/users", (req, res)=>{  //request / response
    // logica de alta de user

    res.send("post users...")
})

app.delete("/users", (req, res)=>{  //request / response
    // logica de alta de user

    res.send("eliminar users...")
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
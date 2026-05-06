const { Router } = require("express")
const { UsersManager } = require("../dao/UsersManager.js")
const { logger, auth, formatUser } = require("../middlewares/middlewares.js")
// const express=require("express")

// express.Router()

const router = Router()

const usersManager=new UsersManager("./src/data/users.json")

router.get("/", async (req, res) => {  //request / response

    try {
        // logica de informe users
        let users = await usersManager.getUsers()

        console.log(req.query)
        let { limit } = req.query
        if (limit) {
            users = users.slice(0, limit)
        }

        res.send(users)
    } catch (error) {
        res.send({ error: "Internal server error", message: error.message })
    }
})

router.get(
    "/:id",
    logger,
    (req, res, next) => {
        console.log(`Middleware 2... `)
        next()
    },
    (req, res, next) => {
        console.log(`Middleware 3... `)
        next()
    },
    async (req, res) => {  //request / response

        // let id=req.params.id
        let { id } = req.params

        try {
            // logica de informe users
            let users = await usersManager.getUsers()

            // validaciones pertinentes... etc...
            let user = users.find(u => u.id == id)
            if (!user) {
                res.send({ error: `No existen usuarios con id ${id}` })
                return
            }

            res.send(user)
        } catch (error) {
            res.send({ error: "Internal server error", message: error.message })
        }
    }

)

router.get("/filtro/:name", async (req, res) => {  //request / response

    // let id=req.params.id
    let { name } = req.params

    try {
        // logica de informe users
        let users = await usersManager.getUsers()

        // validaciones pertinentes... etc...
        let user = users.find(u => u.name == name)
        if (!user) {
            res.send({ error: `No existen usuarios con name ${name}` })
            return
        }

        res.send(user)
    } catch (error) {
        res.send({ error: "Internal server error", message: error.message })
    }
})


router.post("/", auth, formatUser ,async (req, res) => {  //request / response
    // logica de alta de user
    console.log(req.body)

    try {
        let { name, email, password, ...otros } = req.body  // los ... son el operador REST
        console.log(otros)
        if (!name || !email || !password) {
            res.send({ error: "email, name, y password son requeridos" })
            return
        }

        if(req.validName){
            name=req.validName
        }

        // resto validaciones
        // let nuevoUsuario=await usersManager.createUser({name, email, password, ...otros}) // ... son spread
        let nuevoUsuario = await usersManager.createUser({ name, email, password })

        res.send(nuevoUsuario)
    } catch (error) {
        res.send({ error: "internal server error", message: error.message })
    }

})

router.delete(":id", (req, res) => {  //request / response
    // logica de alta de user


    res.send("eliminar user con id " + req.params.id)
})

module.exports={router}
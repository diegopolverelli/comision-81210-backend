const {UsersManager} = require("./UsersManager.js")
const http=require("http")

const usersManager=new UsersManager("./data/users.json")

// const app=async()=>{
//     console.log(await usersManager.getUsers())
// }

// app()

const app=http.createServer(async(req, res)=>{

    let usuarios=await usersManager.getUsers()

    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify(usuarios))
})


const PORT=3000
app.listen(PORT, ()=>{
    console.log(`Server escuchando en puerto ${PORT}`)
})

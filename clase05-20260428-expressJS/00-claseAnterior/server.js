const {UsersManager} = require("./UsersManager.js")
const http=require("http")
const url=require("url")

const usersManager=new UsersManager("./data/users.json")

// const app=async()=>{
//     console.log(await usersManager.getUsers())
// }

// app()

const app=http.createServer(async(req, res)=>{   // request / responese

    const parsedURL=url.parse(req.url, true)
    console.log(parsedURL)

    console.log(req.url.split("?")[0])

    if(parsedURL.pathname=="/registro"){
        res.setHeader("Content-Type", "text/plain")
        res.end("registro...")
        return 
    }

    if(parsedURL.pathname=="/productos"){
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>productos...</h1>")
        return 
    }

    // console.log(req.url)
    // console.log(req.headers)

    
    if(parsedURL.pathname=="/users"){
        let usuarios=await usersManager.getUsers()
    
        res.setHeader("Content-Type", "application/json")
        res.end(JSON.stringify(usuarios))
        return 
    }

    if(parsedURL.pathname=="/"){

        res.setHeader("Content-Type", "text/html")
        res.end("<h1>Home Page</h1>")
        return 
    }

    res.setHeader("Content-Type", "text/html")
    res.end("<h1>404 - not found</h1>")    

})


const PORT=3000
app.listen(PORT, ()=>{
    console.log(`Server escuchando en puerto ${PORT}`)
})

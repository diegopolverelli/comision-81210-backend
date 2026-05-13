const express=require("express")
const {Server} = require("socket.io")
const heroesRouter=require("./routes/heroesRouter.js")


const PORT=3000;

const app=express();

app.use(express.static("./public"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/heroes', heroesRouter)

app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.get('/oferta',(req,res)=>{

    let {oferta}=req.query
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`datos de la oferta son requeridos`})
    }

    serverSocket.emit("oferta", oferta, "MercadoPago")

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Oferta enviada...!!!');
})

const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

let mensajes=[]

const serverSocket=new Server(serverHTTP)     // io

serverSocket.on("connection", socket=>{
    console.log(`Se ha conectado un usuario con id ${socket.id}`)

    // socket.emit("saludo", {message: `Bienvenido...!!! Identificate`, from: "Server" })
    socket.emit("saludo", `Bienvenido...!!! Dime tu nombre`, `Server`, mensajes)

    socket.on("nombre", nombre=>{
        console.log(`El usuario con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (dato, origen)=>{
        mensajes.push({origen, dato})
        serverSocket.emit("nuevoMensaje", dato, origen)
    })


})

// on escucha eventos o mensajes
// emit emite eventos o mensajes

// server emite de 3 formas: socket.emit() 1 a 1; 
// socket.broadcast.emit() a todos, menos al que acaba de hacer algo
// serverSocket.emit() emite a todos     io.emit()


let temperatura=0
setInterval(() => {
    temperatura=Math.floor(Math.random()*(7)+25)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSocket.emit("temperatura", temperatura)
}, 1000);
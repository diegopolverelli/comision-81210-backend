const express=require('express');
const villanosRouter=require("./routes/villanos.router.js")
const viewsRouter=require("./routes/viewsRouter.js")
const {engine} =require("express-handlebars")
const PORT=3000;

const app=express();

app.use(express.static("./public"))
app.engine("handlebars", engine({}))
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/villanos", villanosRouter)
app.use("/", viewsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/prueba3", (req,res)=>{
    let {nombre, email}=req.query

    if(!nombre) nombre="usuario no identificado"
    if(!email) email="-"

    res.render("prueba", {
        nombre, 
        email,
    })
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

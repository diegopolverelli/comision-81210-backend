const express=require('express');
const { upload } = require('./utils.js');
const fs=require("fs")
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/personaje", upload.single("archivo"), (req, res)=>{

    let {mimetype, filename} = req.file
    let tipoArhivo=mimetype.split("/")[0]
    if(tipoArhivo!="image"){
        console.log(req.file.path)
        fs.unlinkSync(req.file.path)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Archivo ${filename} formato inválido`})
    }


    // grabo datos, imagen, etc...

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({user: req.body, datosImagen: req.file});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

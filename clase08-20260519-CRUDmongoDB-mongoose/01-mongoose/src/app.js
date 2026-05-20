// https://www.mongodb.com/es/docs/get-started/?language=nodejs

import express from 'express';
import { conectarDB } from './config/db.js';
// import mongoose from 'mongoose';

import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/heroes", heroesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

await conectarDB(
    "mongodb+srv://coder:coder12345@cluster0.qnxdcvk.mongodb.net/?appName=Cluster0",
    "coder2"
)

// try {
//     await mongoose.connect("mongodb+srv://coder:coder12345@cluster0.qnxdcvk.mongodb.net/?appName=Cluster0&dbName=coder2")
//     console.log(`DB online!`)
// } catch (error) {
//     console.log(`Error ${error.message}`)
// }

// let heroes=await mongoose.connection.collection("heroes").find().toArray()
// console.log(heroes)
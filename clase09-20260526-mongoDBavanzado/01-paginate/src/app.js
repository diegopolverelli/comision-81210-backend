import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import { engine } from 'express-handlebars';

import { router as viewsRouter } from './routes/viewsRouter.js';

import mongoose from 'mongoose';

const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, './public')));
app.use(express.static("./public"));

app.use("/", viewsRouter)

app.get("/",(req, res)=>{


    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"OK"});
})



const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://coder:coder12345@cluster0.qnxdcvk.mongodb.net/?appName=Cluster0&dbName=comis81210prueba')
    console.log(`Conexión a DB establecida`)
} catch (error) {
    console.log(`Error: ${error.message}`)
}



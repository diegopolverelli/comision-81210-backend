import express from 'express';
import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const ventasEsquema=new mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number, 
    quantity:Number,
    date:Date, 
})

const ventasModelo=mongoose.model("ventas",ventasEsquema);

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',async(req,res)=>{

    let resultado=await ventasModelo.find()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});
})

app.get('/informe',async(req,res)=>{

    let size="medium"
    if(req.query.size){
        if(!["medium", "small", "large"].includes(req.query.size)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Tamaños de pizza disponibles: large, medium, small`})
        }

        size=req.query.size
    }

    let resultado=await ventasModelo.aggregate(
        [
            {
                // $match: { size: { $in: ["medium", "small", "large"] } }
                // $match: { size: { $in: ["medium"] } }
                $match: { size: { $in: [`${size}`] } }
            },
            // {
            //     $group:{
            //         _id: "$name",
            //         totalQuantity: {$sum: "$quantity"},
            //         avgQuantity: {$avg: "$quantity"},
            //         minQuantity: {$min: "$quantity"},
            //         maxQuantity: {$max: "$quantity"},
            //     }
            // },
            // {
            //     $sort:{totalQuantity:-1}
            // },
            // {
            //     $project:{
            //         _id:0,
            //         totalQuantity:1, avgPrice:1,
            //         info:'Prueba Aggregations',
            //         sabor:"$_id"
            //     }
            // },
            // {
            //     $group:{
            //         _id: '',
            //         // detalle: {$push: "$$ROOT"},
            //         detalle: {$push: {
            //             sabor:"$sabor", cantidad:"$totalQuantity"
            //         }}
            //     }
            // },
            // {
            //     $project:{
            //         detalle:1, _id:0,
            //         titulo: 'Reporte octubre',
            //         elaboradoPor:'Alumnos Comision 53110'
            //     }
            // },
            // {
            //     $merge:{
            //         into:"informeVentas"
            //     }
            // }
        ]
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({resultado});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect(mongourl)
    console.log(`Conexión a DB establecida`);
} catch (error) {
    console.log(error.message)    
}

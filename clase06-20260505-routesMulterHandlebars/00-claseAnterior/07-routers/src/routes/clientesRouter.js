const { logger2 } = require('../middlewares/middlewares.js');

const Router=require('express').Router;
const router=Router()

router.use(
    (req, res, next)=>{
        console.log(`m1 router clientes`)
        next()
    },
    (req, res, next)=>{
        console.log(`m2 router clientes`)
        next()
    },
    logger2,
)

router.get('/',(req,res)=>{

    let clientes=[{id:1, razonSocial: "cliente 1"}]

    res.setHeader('Content-Type','application/json')
    res.status(200).json({clientes})
})

router.get('/informe',(req,res)=>{

    let informe="informe clientes"

    res.setHeader('Content-Type','application/json')
    res.status(200).json({informe})
})


module.exports=router
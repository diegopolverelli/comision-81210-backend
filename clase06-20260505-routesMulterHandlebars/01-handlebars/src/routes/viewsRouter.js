const { VillanosManager } = require('../dao/VillanosManager.js');

const Router=require('express').Router;
const router=Router()

router.get('/villanos',async(req,res)=>{
    let {nombre, email}=req.query

    // if(!nombre) nombre="usuario no identificado"
    // if(!email) email="-"

    let villanos=await VillanosManager.getVillanos()

    res.render("villanos", {
        nombre, 
        email, 
        villanos
    })
})


module.exports=router
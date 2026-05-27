import { Router } from 'express';
import { usuariosModelo } from '../models/usuariosModelo.js';
export const router=Router()

router.get('/usuarios',async(req,res)=>{

    let {page, limit}=req.query
    if(!page) page=1

    if(!limit) limit=10

    // let usuarios=await usuariosModelo.find().lean()

    // let usuarios=await usuariosModelo.paginate({}, {lean: true, limit:20})
    let {
        docs: usuarios, 
        totalPages, 
        hasPrevPage, 
        prevPage, 
        hasNextPage, 
        nextPage
    }=await usuariosModelo.paginate({}, {lean: true, limit, page})
    console.log(usuarios)


    // console.log(usuarios)
    console.log(usuarios[0])
    if(usuarios.length>0){
        let propsUsuario=Object.keys(usuarios[0])
        console.log(propsUsuario)
    }

    res.render("usuarios", {
        // usuarios: usuarios.docs
        usuarios, 
        totalPages, 
        hasPrevPage, 
        prevPage, 
        hasNextPage, 
        nextPage        
    })
})
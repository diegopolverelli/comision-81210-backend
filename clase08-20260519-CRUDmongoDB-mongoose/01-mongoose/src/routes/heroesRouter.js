import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',async(req,res)=>{

    try {
        let heroes=await heroesManager.getHeroes()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({heroes})
    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})
    }

})

router.post("/", async(req, res)=>{
    let {name, alias, id}=req.body
    if(!name || !alias || !id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | alias | id son requeridos`})
    }

    try {

        
        let existe=await heroesManager.getHeroeBy({id})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`id ${id} ya existe en db, para ${existe.name}`})
        }
        
        existe=await heroesManager.getHeroeBy({name})
        console.log(existe)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`name ${name} ya existe en db, para ${existe.name}`})
        }
        
        // resto validaciones pertinentes...
        
        let nuevoHeroe=await heroesManager.create({name, alias, id})

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message: "Alta exitosa", nuevoHeroe});

    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})        
    }

})


router.put("/:id", async(req, res)=>{

    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingres un id valido de MongoDB`})
    }

    let {alias}=req.body
    if(!alias){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`alias es requerido`})
    }

    try {

        // resto validaciones pertinentes...
        
        let heroeModificado=await heroesManager.update(id, {alias})

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message: "Modificacion exitosa", heroeModificado});

    } catch (error) {
        console.log(error)

        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Internal Server Error`})        
    }

})
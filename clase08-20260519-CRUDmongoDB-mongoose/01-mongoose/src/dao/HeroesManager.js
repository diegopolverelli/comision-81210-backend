import { heroesModel } from "./models/heroesModel.js";

export class HeroesManager{
    
    async getHeroes(filtro={}){
        return await heroesModel.find(filtro)
    }

    async getHeroeBy(filtro={}){
        return await heroesModel.findOne(filtro)
    }

    async create(heroe){
        return await heroesModel.create(heroe)
    }

    async update(id, heroe){
        // return await heroesModel.findByIdAndUpdate(id, heroe, {new: true})
        return await heroesModel.findByIdAndUpdate(id, heroe, {returnDocument: 'after'})
    }

    async delete(id){
        return await heroesModel.findByIdAndDelete(id)
    }
}
import mongoose from "mongoose";

const heroesSchmema=new mongoose.Schema(
    {
        name: {
            type: String, 
            unique: true
        }, 
        alias: String, 
        id: {
            type: Number, 
            unique: true,
        }, 
        publisher: {
            type: String, 
            default: "Marvel"
        }, 
        powers: Array    
    }, 
    {
        // collection: "heroes2021", 
        timestamps: true, 
        // strict: false,
    }
)

export const heroesModel=mongoose.model(
    "heroes", 
    heroesSchmema,
)

// heroesModel.find({_id: "asdfasldfkaslfk"})
// heroesModel.findById("asdfasldfkaslfk")
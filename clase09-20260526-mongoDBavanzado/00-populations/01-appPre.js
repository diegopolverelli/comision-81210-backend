import mongoose from "mongoose";

const app=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://coder:coder12345@cluster0.qnxdcvk.mongodb.net/?appName=Cluster0",
            {
                dbName: "comis81210prueba"
            }
        )
        console.log(`DB online!`)

        const alumnosSchema=new mongoose.Schema(
            {
                nombre: String, 
                email: {
                    type: String, 
                    unique: true
                }, 
                cursando: [
                    {
                        curso: {
                            type: mongoose.Schema.Types.ObjectId, 
                            ref: "cursos"
                        },
                        nota: Number
                    }
                ]
            }, 
            {
                timestamps: true,
            }
        )

        alumnosSchema.pre("findOne", function(){
            this.populate({
                path: "cursando.curso", 
                // populate: {
                //     path: "docente"
                // }
            })
        })

        alumnosSchema.pre("find", function(){
            this.populate({
                path: "cursando.curso", 
                // populate: {
                //     path: "docente"
                // }
            })
        })

        const alumnosModelo=mongoose.model(
            "alumnos",
            alumnosSchema
        )

        const cursoSchema=new mongoose.Schema(
            {
                nombre: String, 
                cargaHoraria: Number, 
            }, 
            {
                timestamps: true
            }
        )

        const cursosModelo=mongoose.model(
            "cursos",
            cursoSchema
        )


        let alumno01


        alumno01=await alumnosModelo
                            .findOne({email: "jimena@test.com"})

        console.log(JSON.stringify(alumno01, null, 5))

        let alumnos=await alumnosModelo.find()
        console.log(JSON.stringify(alumnos, null, 5))




    } catch (error) {
        console.log(`Error: ${error.message}`)
        console.log(error)
    } finally{
        await mongoose.connection.close()
        console.log(`Programa finalizado`)
    }
}


app()
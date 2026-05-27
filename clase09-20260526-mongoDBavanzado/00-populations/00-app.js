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

        const alumnosModelo=mongoose.model(
            "alumnos",
            alumnosSchema
        )

        // alumnosModelo.find()

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
        // const curso01=await cursosModelo.create({
        //     nombre: "Programación I", 
        //     cargaHoraria: 8
        // })
        // const curso02=await cursosModelo.create({
        //     nombre: "SQL II", 
        //     cargaHoraria: 6
        // })

        // alumno01=await alumnosModelo.create({
        //     nombre: "Jimena Gonzalez", 
        //     email: "jimena@test.com", 
        //     cursando: [
        //         {
        //             curso: curso01._id, 
        //             nota: 8
        //         }, 
        //         {
        //             curso: curso02._id, 
        //             nota: 7
        //         },
        //     ]
        // })

        const cursos=await cursosModelo.find()
        console.log(cursos)

        // alumno01=await alumnosModelo.findOne({email: "jimena@test.com"}).populate("cursando.curso")

        // alumno01=await alumnosModelo
        //                     .findOne({email: "jimena@test.com"})
        //                     .populate("cursando.curso")


        alumno01=await alumnosModelo
                            .findOne({email: "jimena@test.com"})
                            .populate({
                                path: "cursando.curso", 
                                // populate: {
                                //     path: "docente", 
                                //     // {}
                                // }
                            })
                            // .populate("cursadas.curso")



        console.log(JSON.stringify(alumno01, null, 5))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        console.log(error)
    } finally{
        await mongoose.connection.close()
        console.log(`Programa finalizado`)
    }
}


app()
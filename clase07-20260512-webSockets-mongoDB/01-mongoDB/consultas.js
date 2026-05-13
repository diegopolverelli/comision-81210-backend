db.createCollection("alumnosPrueba")

db.alumnosPrueba.insertMany(
    [
        {nombre:"Juan", edad:32},
        {nombre:"Jimena", edad:24},
        {nombre:"Carolina", edad:62},
    ]
)

db.alumnosPrueba.find()


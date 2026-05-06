const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        // cb(null, file.fieldname + '-' + uniqueSuffix)
        let tipo=file.mimetype.split("/")[0]
        if(tipo!="image"){
            return cb(new Error("formato inválido"))
        }
        cb(null, Date.now() + "-" +file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports={upload}
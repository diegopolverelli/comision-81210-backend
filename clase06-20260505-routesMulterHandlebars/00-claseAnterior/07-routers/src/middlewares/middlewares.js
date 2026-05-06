const logger=(req, res, next)=>{
    console.log(`Fecha: ${new Date().toUTCString()} - url: ${req.url} - metodo: ${req.method}`)

    next()
}

const logger2=(req, res, next)=>{
    console.log(`Logger 2: Fecha: ${new Date().toUTCString()} - url: ${req.url} - metodo: ${req.method}`)

    next()
}

const formatUser=(req, res, next)=>{
    let {name}=req.body
    if(name){
        req.validName=name.toUpperCase()
    }

    next()
}

const auth=(req, res, next)=>{
    let {user, password}=req.query
    
    if(user!="admin" || password!="1234" ){

        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales invalidas`})
    }

    next()
}

module.exports={logger, logger2, formatUser, auth}
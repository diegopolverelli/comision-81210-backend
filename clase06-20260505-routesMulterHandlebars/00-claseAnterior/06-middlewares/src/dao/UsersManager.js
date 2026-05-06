const fs=require("fs")
const crypto=require("crypto")

class UsersManager{

    constructor(path="./datos.json"){
        this.path=path
    }

    async getUsers(){
        if(fs.existsSync(this.path)) {
            return JSON.parse(await fs.promises.readFile(this.path, "utf-8"))
        }else{
            return []
        }    
    }

    async createUser(user={}){   // {id: 6}
        let usuarios=await this.getUsers()

        let {email, password}=user

        // validaciones oportunas
        // if(!user.email){
        if(!email){
            throw new Error(`mail es requerido`)
        }

        if(!password){
            throw new Error(`password es requerida`)
        }

        const secret = 'abcdefg';
        password = crypto.createHmac('sha256', secret)
                           .update(password)
                           .digest('hex');        


        // let existe=usuarios.find(u=>u.email==user.email)
        let existe=usuarios.find(u=>u.email==email)
        if(existe){
            throw new Error(`ya existen usuarios con email ${email}: ${JSON.stringify(existe)}`)            
        }

        let id=1
        if(usuarios.length>0){
            id=usuarios[usuarios.length-1].id +1
        }

        let nuevoUsuario={
            ...user,    // ... son el operador SPREAD
            password,
            id,
        }

        usuarios.push(nuevoUsuario)

        await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario
    }
}

module.exports={
    UsersManager
}

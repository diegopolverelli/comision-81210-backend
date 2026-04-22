const fs=require("fs")

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

        let {email}=user

        // validaciones oportunas
        // if(!user.email){
        if(!email){
            throw new Error(`mail es requerido`)
        }

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
            id,
        }

        usuarios.push(nuevoUsuario)

        await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5))

        return nuevoUsuario
    }
}

const usersManager=new UsersManager("./data/users.json")

const app=async()=>{
    try {
        let usuarios=await usersManager.getUsers()
        console.log(usuarios)
        console.log(usuarios[0].name)
        console.log(await usersManager.createUser({name:"Marco", email:"marco@test.com"}))
    } catch (error) {
        console.log(`Error: ${error.message}`)
        // console.log(error)
    }

    console.log(`Fin de programa`)
}

app()


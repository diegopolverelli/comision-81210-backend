const socket=io()
const nombre=prompt("Ingrese su nombre:")
document.title=nombre


const divTemperatura=document.getElementById("temperatura")


socket.on("saludo", (datos, de, mensajes)=>{
    console.log(`${de} dice: ${datos}`)

    mensajes.forEach(m=>{
        divMensajes.innerHTML+=`<div class=mensaje><strong>${m.origen}</strong> dice <i>${m.dato}</i></div>`        
    })


    if(nombre){
        socket.emit("nombre", nombre)
    }
})

socket.on("nuevoUsuario", nombre=>{
    alert(`${nombre} se ha unido al servidor`)
})

const divMensajes=document.getElementById("mensajes")
const inputMensaje=document.getElementById("mensaje")

inputMensaje.focus()

inputMensaje.addEventListener("keyup", e=>{
    // console.log(e, e.target.value)

    if(e.code=="Enter"){
        if(e.target.value.trim().length>0){
            socket.emit("mensaje", e.target.value.trim(), nombre)
            e.target.value=""
            inputMensaje.focus()
        }
    }
})


socket.on("nuevoMensaje", (mensaje, nombre)=>{
    divMensajes.innerHTML+=`<div class=mensaje><strong>${nombre}</strong> dice <i>${mensaje}</i></div>`
})

socket.on("oferta", datosOferta=>{
    alert(datosOferta)
})

socket.on("temperatura", temperatura=>{
    divTemperatura.innerText=`La temperatura actual es de ${temperatura}°`
})
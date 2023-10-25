
const usuariosR = JSON.parce(localStorage.getItem("users"))

const formularioDeRegistro = document.getElementById("formulario-registro")

formularioDeRegistro.addEventListener("submit", (event) =>{

    const el = formularioDeRegistro.elements;

    let id = "".toString(usuariosR.length)

    let nuevoUsuario = {
        id: id,
        nombreyApellido: el.nombre.value,
        correoElectronico: el.email.value,
        contraseña: el.password.valueAsNumber,
        roles: "ROLE_CLIENT",
    };

    const busqueda = usuariosR.find((correo) => {
        if(correo.email === nuevoUsuario.email){
            return true
        }
    })

    if(!busqueda){
        usuariosR.push(nuevoUsuario)
        Swal.fire({
            icon:"sucess",
            title:"Usuario registrado",
            text:"El usuario se registro"
        })
        localStorage.setItem("user", JSON.stringify(usuariosR))
        formularioDeRegistro.reset()
    }else{
        Swal.fire("Error", "Email ya en uso", "danger")
    }
})

let adminUsuarios = JSON.parse(localStorage.getItem("users"))

let idEditar;
const btn = document.querySelector('button.btn[type="submit"]')
const tableBodyHTML = document.querySelector("table-usuarios")

pintarUsuarios(adminUsuarios)
s

const inputFiltrarUsuarios = document.getElementById("filtrar")

const formularioUsuariosHTML = document.getElementById("formularioUsuario")


formularioUsuariosHTML.addEventListener('submit', (evt) => {

    evt.preventDefault()

    const el = formularioUsuariosHTML.elements;

    let id;

    if(idEditar) {
        id = idEditar
    } else {
        id = crypto.randomUUID()
    }


    const nuevoUsuarios = {
        id: id,
        nombreyApellido: el.nombre.value,
        correoElectronico: el.email.value,
        contraseña: el.password.valueAsNumber,
        roles: el.rolesUsuarios.value,
    }


    if(idEditar) {
        const index = adminUsuarios.findIndex(usuarios => {
            return usuarios.id === idEditar
        })
        adminUsuarios[index] = nuevoUsuarios;
        idEditar = undefined;


        btn.innerText = "Agregar Usuario"
        btn.classList.remove("btn-success")
    } else {
        adminUsuarios.push(nuevoUsuarios)
    }


    Swal.fire({
        icon: 'success',
        title: 'El usuaro agregado/modificado correctamente',
        text: 'El usuario se actualizo o modifico correctamente!',
      })


    pintarUsuarios(adminUsuarios)

    localStorage.setItem("users", JSON.stringify(adminUsuarios))
    
    formularioUsuariosHTML.reset()
    el.nombre.focus()
})


function pintarUsuarios(arrayAPintar) {

    tableBodyHTML.innerHTML = "";

    arrayAPintar.forEach(function(usuarios, index) {
        tableBodyHTML.innerHTML += 
            `<tr>
                <td class="table-title">${usuarios.nombre}</td>
                <td class="table-email">${usuarios.email}</td>
                <td class="table-password">${usuarios.password}</td>
                <td class="table-role">${usuarios.roles}</td>
                <td >
                    <div class="d-flex gap-1">
                        <button class="btn-delete btn btn-danger btn-sm" onclick="borrarProducto('${usuarios.id}')">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success btn-sm" onclick="editarProducto('${usuarios.id}')" data-bs-toggle="modal" data-bs-target="#formModal">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                    
                </td>
            </tr>`
    })
}

inputFiltrarHTML.addEventListener('keyup', (evt) => {

    const busqueda = evt.target.value.toLowerCase();
    
    const resultado = adminUsuarios.filter((user) =>  {
        const titulo = user.nombreyApellido.toLowerCase()
        if(nombre.includes(busqueda)  ) {
            return true
        } 
        return false
    } )
    pintarUsuarios(resultado)

})


const borrarProducto = (idABuscar) => {
    Swal.fire({
        title: 'Desea borrar Usuario',
        icon: 'error',
        text: 'Realmente desea elminar el Usuario?',
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: 'Cancelar' ,
        confirmButtonText: 'Borrar',
      }).then((result) => {

        if(result.isConfirmed) {
            const indiceEncontrado = adminUsuarios.findIndex((productoFindIndex) => {
                if(productoFindIndex.id === idABuscar) {
                    return true
                }
                return false
            })
            adminUsuarios.splice(indiceEncontrado, 1);

            pintarUsuarios(adminUsuarios)

            localStorage.setItem("users", JSON.stringify(adminUsuarios)   )


            Swal.fire('Borrado!', 'Usuarios borrado correctamente', 'success')
        }
    })
}

const editarusuarios = function(idRecibido) {

    console.log(`Editar Usuarios ${idRecibido}`)
    const usuarioEditar = adminUsuarios.find((usuarios) => {
        if(prod.id === idRecibido) {
            return true
        }
    })

    if(!usuarioEditar) return;

    idEditar = usuarioEditar.id

    const elements = formularioUsuariosHTML.elements;

    elements.nombre.value = usuarioEditar.nombre;
    elements.email.value = usuarioEditar.value;
    elements.password.value = usuarioEditar.password;
    elements.roles.value = usuarioEditar.roles;

    
    btn.innerText = "Editar Usuarios"
    btn.classList.add("btn-success")



    
}


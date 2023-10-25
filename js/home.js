let productos = JSON.parse(localStorage.getItem("productos")) || []
const cardContainer = document.getElementById("productos-f1")


productos.forEach((prod) => {

    cardContainer.innerHTML += `
            <div class="card-main" style="width: 100%">
                    <img src="${prod.imagen}" class="card-img-top" alt="${prod.titulo}">
                    <div class="card-body">
                    <h5 class="card-title">${prod.precio}</h5>
                    <p class="card-text">${prod.descripcion}</p>
                    <a href="/pages/product/description.html?identificador=${prod.id}" class="btn mr-2">
                        <i class="fas fa-link"></i> 
                            Ver más
                    </a>
                    <a href="#" class="btn "><i class="fab fa-github"></i> Comprar</a>
                    </div>
            </div>
    `
})



let consolasPrimerInicio = [
    {
        id: 'uwbfbf4u9-fnwu78-fnwu3',
        descripcion: 'Auto de coleccion replica de formula 1 del añp 1956 con el cual Fangio salio campeon',
        titulo: 'Auto de coleecion ferrari 1956',
        precio: 70000,
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_802851-MLA27970885391_082018-O.webp',
        categoria: 'Articulos de coleccion',
        fechaDeCreacion: '2020-11-12',
    },
    {
        id: '184718-fnquf1-38qdbiqd',
        fechaDeCreacion: '2017-03-03',
        descripcion: 'Remera del equipo Red Bull de formula 1, del año 2022',
        titulo: 'Remera Red Bull F1',
        precio: 36000,
        imagen: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/2001761497106.jpg?scale=500&qlty=75',
        categoria: 'Indumentaria'
    },
    {
        id: 'hfwye7836413-981284dqgf-jiqf71y',
        descripcion: 'Automoil de juguete de formula 1 del equipo ferrari',
        titulo: 'Juguete f1',
        fechaDeCreacion: '2020-11-10',
        precio: 4999,
        imagen: 'https://jugueteriascarrousel.com.ar/wp-content/uploads/2021/10/6713.jpg',
        categoria: 'Juguetes'
    },

];

let consolas = JSON.parse(localStorage.getItem("productos")) || consolasPrimerInicio

if(  JSON.parse(localStorage.getItem("productos")) === null  ) {
    localStorage.setItem("productos", JSON.stringify(consolas))
}

const userInicio = [
    {
        fullname: 'Roman Lopez',
        email: 'admin@admin.com',
        id: '22',
        password: 'admin',
        role: "ROLE_ADMIN"
    },
    {
        fullname: 'Fabricio Molina',
        email: 'fabri.molina@example.com',
        id: '23',
        password: 'bocajuniors',
        role: "ROLE_CLIENT"
    },
    {
        fullname: 'Lana Fernandez',
        email: 'lanafernandez@example.com',
        id: '8',
        password: 'riverplate',
        role: "ROLE_CLIENT"
    },
    {
        fullname: 'Diego Gonzalez',
        email: 'diego.gonzalez@example.com',
        id: '9',
        password: 'alfabeta',
        role: "ROLE_CLIENT"
    },
]

if( localStorage.getItem("users") === null  ) {

    localStorage.setItem("users", JSON.stringify(userInicio))

}

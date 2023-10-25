const currentUser = JSON.parse(localStorage.getItem("currentUser"))
const headerUserInfo = document.getElementById("navbar-info")
const headerUserAction = document.getElementById("nav-icons")
const navbarLink = document.querySelector("nav-register")


headerUserInfo.innerText = currentUser ? currentUser.fullname : ""


if(currentUser) {
    headerUserAction.innerHTML = `<button class="btn btn-danger" onclick="logout()">Logout</button>`
    if(currentUser.roles === 'ROLE_ADMIN') {

        const adminProductLink = document.createElement('li')
        adminProductLink.classList.add('nav-icons')
        adminProductLink.id = 'nav-admin-product'
        const url = window.location.pathname;
        if(url.includes('admin.html')) {

            adminProductLink.classList.add('active')
        }

        const link = document.createElement('a')
        link.classList.add('nav-link', 'bg-dark')
        link.href = '/pages/admin/admin-usuarios.html';
        link.href = 'pages/admin/admin-productos.html'

        adminProductLink.classList.add('nav-info')
        adminProductLink.id = 'nav-admin-product'
        if(url.includes('admin.html')) {

            adminProductLink.classList.add('active')
        }

        <div class="dropdrow">
            <a class="btn btn-danger nav-name">${currentUser.nombre}</a>
            <ul>
                <li>
                    <a href="/pages/admin/admin-usuarios.html">Usuarios</a>
                </li>
                <li>
                    <a href="/pages/admin/admin-productos.html">Productos</a>
                </li>
            </ul>
        </div>
        link.innerText = 'Product Admin'


        adminProductLink.appendChild(link)

        navbarLink.appendChild(adminProductLink)

    }


} else {
    headerUserAction.innerHTML = `<a class="btn btn-dark" href="/pages/login/login.html">Login</a>`
}

// Selecciono los elementos
const inputNombre = document.querySelector('#nombre');
const inputTel = document.querySelector('#tel');
const inputEmail = document.querySelector('#email');
const form = document.querySelector('form');
const listContactos = document.querySelector('#contactos');

let contactos = [];
// Funcion 1 - Leer los inputs y los pushea en array contactos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Guardando datos')
    const nombre = inputNombre.value;
    const tel = inputTel.value;
    const email = inputEmail.value;

    contactos.push({
        nombre,
        tel,
        email
    })

    inputNombre.value = '';
    inputTel.value = '';
    inputEmail.value = '';

    renderizarContactos(contactos)
})

// Funcion 2 - Recibe un array y los renderiza los contactos
const renderizarContactos = (lista) => {
    // Limpio el contenedor
    listContactos.innerHTML = '';
    lista.forEach( (contacto, index) => {
        listContactos.innerHTML += `
        <li class="list-group-item">
            <span class="d-flex justify-content-between">
                <span>
                    <span>
                        <i class="fa-solid fa-user text-primary"></i>
                        <strong> ${ contacto.nombre }</strong>
                    </span>
                    <br>
                    <span>
                        <i class="fa-solid fa-mobile-screen text-success"></i> ${ contacto.tel}
                    </span>
                </span>

                <button id="${index}" class="btn btn-danger btn-delete" type="button">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </span>
        </li>`;
    });

    const btns = document.querySelectorAll('.btn-delete');
    btns.forEach( btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.id;
            deleteContacto(id);
        })
    });
}

// Funcion 3 - GET al JSON local y luego llama a redendericarContactos(lista)
const getContactos = async () => {
    const path = 'api/data.json';
    
    try {
        const response = await fetch(path);
        if( response.ok == false){
            throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        
        console.log(data);
        contactos = data.data;
        renderizarContactos(contactos)
    } catch (error) {
        console.error(error)
        //alert('Error en el servidor');
        renderError(error)
    }
}

 // Funcion 4 - Elimina un contacto
const deleteContacto = ( index) =>{
    console.log(index);
    // Elimino localmente
    contactos.splice(index, 1);
    console.log(contactos);
    // Actualización
    renderizarContactos(contactos);
} 

const renderError = (msg) =>{
    listContactos.innerHTML = 
    `<div class="alert alert-warning" role="alert">
                ${msg}
    </div>`
}
getContactos();



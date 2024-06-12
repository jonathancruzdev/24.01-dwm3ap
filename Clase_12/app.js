import { guardarNota, leerNotas } from "./firebase.js";

// Selecciono los elementos
const inputNota = document.querySelector('#nota');
const form = document.querySelector('form');
const listaNotas = document.querySelector('#notas');

let notas = [];
// Funcion 1 - Leer los inputs y los pushea en array contactos
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const body = inputNota.value;
    const fecha = new Date().toLocaleDateString();
    const idRandom = crypto.randomUUID();
    const nota = {
        _id: idRandom,
        fecha: fecha,
        body: body
    }
    notas.push( nota );
    // Envio el array entero de notas
    const id = await  guardarNota(nota);
    console.log(id);
    inputNota.value = '';

    renderizarNotas(notas)
})

// Funcion 2 - Recibe un array y los renderiza las notas
const renderizarNotas = (lista) => {
    // Limpio el contenedor
    listaNotas.innerHTML = '';
    lista.forEach( (nota, index) => {
        listaNotas.innerHTML += `
        <li class="list-group-item">
            <span class="d-flex justify-content-between">
                <span>
                    <span>
                        <i class="fa-solid fa-calendar text-primary"></i>
                        <strong> ${ nota.fecha }</strong>
                    </span>
                    <br>
                    <span>
                    <i class="fa-solid fa-pen-nib"></i> ${ nota.body}
                    </span>
                </span>

                <button id="${index}" class="btn btn-danger btn-delete" type="button">
                    X
                </button>
            </span>
        </li>`;
    });

    const btns = document.querySelectorAll('.btn-delete');
    btns.forEach( btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.id;
            deleteNota(id);
        })
    });
}

// Funcion 3 - Lee las notas de la base de Datos
const getNotas = async () => {
    notas = await leerNotas();
    renderizarNotas(notas);
}

 // Funcion 4 - Elimina un Nota
const deleteNota = ( index) =>{
    const { _id } = notas[index];
    eliminarNota( _id );
    console.log(_id);
    // Elimino en la vista
    notas.splice(index, 1);
    // Actualización
    renderizarNotas(notas);
} 

const renderError = (msg) =>{
    listNotas.innerHTML = 
    `<div class="alert alert-warning" role="alert">
                ${msg}
    </div>`
}
getNotas();



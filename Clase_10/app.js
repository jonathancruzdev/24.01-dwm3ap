const db = new PouchDB('notas');

// Selecciono los elementos
const inputNota = document.querySelector('#nota');
const form = document.querySelector('form');
const listaNotas = document.querySelector('#notas');

let notas = [];
// Funcion 1 - Leer los inputs y los pushea en array contactos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = inputNota.value;
    const fecha = new Date().toLocaleDateString();
    const idRandom = crypto.randomUUID();
    const nota = {
        _id: idRandom,
        fecha: fecha,
        body: body
    }

    db.put( nota ).then( resp => {
        console.log(resp)
    }).catch( error => {
        alert('Ocurrio un error');
        console.error(error)
    })

    notas.push( nota );

    inputNota.value = '';

    console.log(notas);
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
                        <i class="fa-solid fa-mobile-screen text-success"></i> ${ nota.body}
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
            deleteNota(id);
        })
    });
}

// Funcion 3 - Lee las notas del indexedDB
const getNotas = async () => {
    db.allDocs({ include_docs: true, descending: true }).then( docs => {
        console.log( docs.rows );
    })
}

 // Funcion 4 - Elimina un Nota
const deleteNota = ( index) =>{
    console.log(index);
    // Elimino localmente
    notas.splice(index, 1);
    console.log(notas);
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



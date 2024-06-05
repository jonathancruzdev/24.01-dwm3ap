// CRUD
const nombreDB = 'NotasAPP';
// Guardar, recibe una nota y la guarda
const guardarNota = (nota) => {
    localStorage.setItem( nombreDB, JSON.stringify( nota) );
}
// Leer Notas, Retorna un array de notas
const leerNotas = () => {
    const notas = JSON.parse( localStorage.getItem( nombreDB ) );
    return notas ? notas : []
}
// Eliminar Nota, Elimina la nota ID
const eliminarNota = (id) => {
    // Obtendo las notas
    const notas = JSON.parse( localStorage.getItem( nombreDB ) );
    // Busco el elemento por id
    const index = notas.findIndex( item => item._id == id );
    // Elimino el elemento y lo guardo
    notas.splice(index, 1);
    guardarNota(notas);
}
// Actualizar Nota, Recibe la nota y actualiza los datos
const actualizarNota = ( id, nota ) => {
    const notas = JSON.parse( localStorage.getItem( nombreDB ) );
    // Busco el elemento por id
    const index = notas.findIndex( item => item._id == id );
    // actualizo los datos
    notas[index].body = nota.body;
    guardarNota(notas);


}

//guardarNota('Hola mundo');
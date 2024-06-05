// CRUD con PouchDB
const nombreDB = 'NotasAPP';
const db = new PouchDB(nombreDB);
// Guardar, recibe una nota y la guarda
const guardarNota = async (nota) => {
    const res = await db.put( nota );
    console.log( res );
}
// Leer Notas, Retorna un array de notas
const leerNotas = async () => {
    const docs = await db.allDocs( { include_docs: true, descending: true } );
    const rows = docs.rows.map( doc => doc.doc)
    return rows;
}

// Eliminar Nota, Elimina la nota ID
const eliminarNota = async (id) => {
    // Obtengo el doc
    const doc = await db.get(id);
    await db.remove(doc);
}
// Actualizar Nota, Recibe la nota y actualiza los datos
const actualizarNota = async ( id, nota ) => {
    const doc = await db.get(id);
    doc.body = nota.body;

    await db.put(doc);
}
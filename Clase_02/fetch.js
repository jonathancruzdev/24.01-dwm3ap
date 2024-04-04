// Async Await
async function getUsers(){
    const respuesta = await fetch('data.json');
    if( respuesta.status == 404) {
        console.log('Recurso no encontrado');
    } else {
        console.log(respuesta)
        const json = await respuesta.json();
        console.log(json);
    }

}

//getUsers();

// Promesas
fetch('data.json')
.then( resp => {
    return resp.json();
}).then( json => {
    console.table(json.data)
})
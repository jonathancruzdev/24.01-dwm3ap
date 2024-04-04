

// Demora de 3''
const getUsers = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
            const list = [
                { id: 1, name: 'Juan', email: 'juan@gmail.com'},
                { id: 2, name: 'Rocio', email: 'rocio@gmail.com'},
                { id: 3, name: 'Lucas', email: 'lucas@gmail.com'},
            
            ]
            resolve( list);
    
        }, 4000)
    });
}
// Demora 4 segundo
const getUsersByName = (users, name) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const user = users.find( item => item.name.toLowerCase() === name.toLowerCase() );
            if ( user) {
                resolve(user);
            } else {
                reject( new Error('Usuario No encontrado')  )
            }
        }, 4000)
    })
} 

const showUsers = (data ) => {
    console.table(data);
}

console.log('inicio');
getUsers()
.then( resultado => {  // Cuando se cumple
    showUsers(resultado);

    return getUsersByName(resultado, 'Juanito');
}).then ( user => {
    console.log(user)
}).catch( (error) => {  // Cuando la Promesa Falla
    document.querySelector('h4').innerText = error;

})



console.log('fin');




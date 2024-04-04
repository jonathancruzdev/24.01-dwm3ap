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
            const user = users.find( item => item.name.toLowerCase() === name.toLowerCase().trim() );
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

async function ejecutar (){
    console.log('Inicio del Script');
    document.querySelector('h4').innerText = 'Obteniendo datos...';

    try {
        const users = await getUsers();
        showUsers(users);
        document.querySelector('h4').innerText = 'Cargando usuarios...';

        const user = await getUsersByName(users, 'Juan');
    
        console.log(user);
        document.querySelector('h4').innerText = 'Usuario ' + user.name;

    } catch (error) {
        document.querySelector('h4').innerText = 'Ocurrio un error';
        console.log(error);
        
    }

}


ejecutar();
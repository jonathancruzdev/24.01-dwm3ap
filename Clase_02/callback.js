const h4 = document.querySelector('h4');
const h2 = document.querySelector('h2');


// Tiene una demora de 2 segundo
const calculoSincronico1 = ( numero, miFuncion ) => {
    console.log('Inicio del Proceso 1')
    setTimeout( ()=> {
        const resultado = numero * 2;
        console.log('Fin del proceso 1')
        mostrarResultado(resultado);
        miFuncion(resultado)
        return resultado;
    }, 2000 )
}

const calculoSincronico2 = ( numero) => {
    console.log('Inicio del Proceso 2')
    setTimeout( ()=> {
        const resultado = numero * 3; 
        console.log('Fin del proceso 2')
        h2.innerText = `Resultado del Proceso 2: ${resultado}`;

    }, 4000 )
}


const mostrarResultado = (resultado) => {
    h4.innerText = `Resultado del Proceso 1: ${resultado}`;
}

calculoSincronico1( 2, calculoSincronico2 );



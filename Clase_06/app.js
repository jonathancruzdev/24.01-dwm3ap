const btn = document.querySelector('button');
const titulo = document.querySelector('h2'); 
console.log('App JS');

btn.addEventListener('click', () =>{
    titulo.innerText = 'Hola!';
})

if( 'serviceWorker' in navigator  ){
    navigator.serviceWorker.register('sw.js');
} else {
    titulo.innerText = 'Lamentablemente tu navegador no soporta está tecnología'
}
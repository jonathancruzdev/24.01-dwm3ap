const btn = document.querySelector('button');
const titulo = document.querySelector('h2'); 
console.log('App JS');
let aviso;

window.addEventListener('beforeinstallprompt', function(e){

    e.preventDefault();

    aviso = e;
    showAddToHomeScreen();

});

const addToHomeScreen = () => {
    if(aviso){
        aviso.prompt();
        aviso.userChoice
        .then(function(choiceResult){
            if(choiceResult === 'accepted'){
                console.log('el usuario acepto')
            }else{
                console.log('el usuario rechazo')
            }

            aviso = null;
        })
    }
}

const showAddToHomeScreen = () =>{
    const showalert = document.querySelector('.add-alert')
    if(showalert != undefined){
        showalert.style.display = "block"
        showalert.addEventListener("click", addToHomeScreen())
    }
}

const persona = {
    name: 'Juan',
    mail: 'juan@mail.com'
}

localStorage.setItem('datos', JSON.stringify(persona) );

btn.addEventListener('click', () =>{
    titulo.innerText = 'Hola!';
})

if( 'serviceWorker' in navigator  ){
    navigator.serviceWorker.register('sw.js');
} else {
    titulo.innerText = 'Lamentablemente tu navegador no soporta está tecnología'
}
/* 
const cacheName = 'cache-v1';
const appInterfaz = [
    'index.html',
    'style.css',
    'app.js',
    'images/html.png',
    'images/js.png',
    'images/x.png'
]


caches.open(cacheName).then( cache => {
    console.log(cache);
    cache.addAll( appInterfaz )

    cache.add('images/js.png');

    cache.add('READMEs.md').then( resp => {
        console.log(resp)
    }).catch( error => {
        console.log(error)
    })

     
}) 
*/


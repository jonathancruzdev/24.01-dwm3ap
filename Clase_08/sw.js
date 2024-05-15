console.log('Hola desde el SW dds');

const cacheName = 'cache-v1';
const appInterfaz = [
    '/',
    'index.html',
    'style.css',
    'app.js',
    'sw.js',
    'images/html.png',
    'images/js.png',
    'images/x.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
]




// Cuando se Instala el SW Guardo en el cache la IU 
self.addEventListener('install', (evento)=> {
    const cache =  caches.open(cacheName).then( cache => {
        return cache.addAll( appInterfaz )
    })
    // Espero hasta que la promesa se resuleva
    evento.waitUntil( cache );
})

self.addEventListener('activate', (evento) => {
    console.log('SW activado  dds');
})



self.addEventListener('fetch', (evento) => {
    const respCache = caches.match( evento.request ).then ( res => {
        if( res) {
            return res;
        } else {
            return fetch( evento.request ).then( repsNet => {
                return repsNet
            })
        }
    })

    
    //console.log(respCache)
    evento.respondWith(  respCache  ); 
})
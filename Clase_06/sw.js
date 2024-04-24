console.log('Hola desde el SW dds');
// Cuando se Instala el SW
self.addEventListener('install', (evento)=> {
    console.log('SW Instalado');
})

self.addEventListener('activate', (evento) => {
    console.log('SW activado  dds');
})

self.addEventListener('fetch', (evento) => {
    const url = evento.request.url

    evento.respondWith(  
        fetch( url).then( response => {
            if(response .status == 404 ){
                return fetch('images/x.png')
            } else {
                return response
            }
        })
    )

   
})
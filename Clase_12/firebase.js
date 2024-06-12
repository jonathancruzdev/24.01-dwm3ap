// importo las configuraciones
import { firebaseConfig } from './config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    getDoc,
    setDoc,
    deleteDoc,
    doc

} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";


// Inicio la aplicación
const app = initializeApp(firebaseConfig);
// Creo la aplicacion de la db
const db = getFirestore(app);

export const guardarNota = async ( nota ) => {
    try {
        const doc = await addDoc( collection( db, 'notas'), nota  );
        return doc.id;
    } catch (error) {
        console.error(error);
    }
}

export const leerNotas = async() =>{
    const querySnapShot = await getDocs(  collection(db, 'notas')  );
    const data = [];
    querySnapShot.forEach( doc => {
        const { body, fecha } = doc.data();
        data.push({
            id: doc.id,
            body,
            fecha
        })
        
    });
    return data;
}

// Creo las funciones


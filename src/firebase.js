import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvKf50UJXJQdvUrL25t9ndUQLsNbZuS5I",
    authDomain: "aree-31980.firebaseapp.com",
    databaseURL: "https://aree-31980-default-rtdb.firebaseio.com",
    projectId: "aree-31980",
    storageBucket: "aree-31980.appspot.com",
    messagingSenderId: "406159870114",
    appId: "1:406159870114:web:bacd19d122942057232ffb",
    measurementId: "G-VXZR47VJV3"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
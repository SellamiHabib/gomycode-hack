import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {

    apiKey: "AIzaSyATAcWulxomRBzEyvMk0hfnDmra_ELBeAA",

    authDomain: "hackthon-806ec.firebaseapp.com",

    projectId: "hackthon-806ec",

    storageBucket: "hackthon-806ec.appspot.com",

    messagingSenderId: "539889630379",

    appId: "1:539889630379:web:c780c27dffae7d43848bee",

    measurementId: "G-1QLZKLN3WW"

};
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

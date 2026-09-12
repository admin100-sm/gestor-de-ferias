import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCbzt8YzCAwZ2_OyQ1_E_TRSE0uLp2_PrE",
    authDomain: "ferias-funcionarios.firebaseapp.com",
    projectId: "ferias-funcionarios",
    storageBucket: "ferias-funcionarios.firebasestorage.app",
    messagingSenderId: "637105136621",
    appId: "1:637105136621:web:ef87174dc5f35b58fafde4",
    measurementId: "G-Q3F6YH6NY6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("Firebase ligado com sucesso!");

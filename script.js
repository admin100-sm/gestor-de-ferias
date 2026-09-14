import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

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

const estadoFirebase = document.getElementById("estadoFirebase");

if (estadoFirebase) {
    estadoFirebase.textContent =
        "Firebase ligado com sucesso!";
}

window.guardarFuncionario = async function(nome, funcao) {

    try {

        await addDoc(
            collection(db, "funcionarios"),
            {
                nome: nome,
                funcao: funcao
            }
        );

        alert("Funcionário guardado com sucesso!");

    } catch (erro) {

        alert("Erro ao guardar funcionário: " + erro.message);

    }

}

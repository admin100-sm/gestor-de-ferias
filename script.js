import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc
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

const auth = getAuth(app);

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
        await carregarFuncionarios();

    } catch (erro) {

        alert("Erro ao guardar funcionário: " + erro.message);

    }

}
window.fazerLogin = async function() {

    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("conteudoPrincipal").style.display = "block";

    } catch (erro) {

        alert("E-mail ou palavra-passe incorretos.");

    }

};

async function carregarFuncionarios() {

    const lista = document.getElementById("listaFuncionarios");

    if (!lista) {
        return;
    }

    const resultado = await getDocs(
        collection(db, "funcionarios")
    );

    lista.innerHTML = "";

    resultado.forEach((documento) => {

        const funcionario = documento.data();
        
        const idFuncionario = documento.id;

        const item = document.createElement("div");

        item.innerHTML = `
    <strong>${funcionario.nome}</strong>
    <span>${funcionario.funcao}</span>
    <button type="button" onclick="eliminarFuncionario('${idFuncionario}')">
        Eliminar
    </button>
`;
        lista.appendChild(item);

    });

}
carregarFuncionarios();

window.eliminarFuncionario = async function(idFuncionario) {

    const confirmar = confirm("Tem a certeza que pretende eliminar este funcionário?");

    if (!confirmar) {
        return;
    }

    try {

        await deleteDoc(
            doc(db, "funcionarios", idFuncionario)
        );

        alert("Funcionário eliminado com sucesso!");

        await carregarFuncionarios();

    } catch (erro) {

        alert("Erro ao eliminar funcionário: " + erro.message);

    }

};

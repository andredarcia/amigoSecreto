// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
console.log (listaAmigos.length);




function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
    } 

listaAmigos.push(nombre);
console.log("Lista de amigos:", listaAmigos);

document.getElementById("amigo").value = ""; 
listarAmigos();
}

function listarAmigos() {
   
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

  
    for (let amigo of listaAmigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    resultado.innerHTML = `El amigo seleccionado es: <strong>${amigoSorteado}</strong>`;
}
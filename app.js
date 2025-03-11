// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
// Se crea Funcion para agregar amigo
function agregarAmigo() {
    let elementoHTML = document.getElementById("amigo");
    let nombre = elementoHTML.value.trim();
    //Verifica si se agrega un nombre en blanco
    if (nombre === "") {
        alert("Por Favor Inserte Un Nombre");
    } else {
        amigos.push(nombre);
         //Se usa un console.log para verificar que se vayan agregando correctamente los nombres
        console.log(amigos);
        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);

        elementoHTML.value = ""; // Limpia el campo de texto
    }
}
    //Se crea funcion de Sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];

    //  Borrar la lista de amigos en el navegador
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Vacía la lista en el HTML

    //  Borrar los nombres del array
    amigos = [];

    // Mostrar el amigo secreto
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo Secreto: ${amigoSeleccionado}</li>`;
}





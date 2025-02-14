// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido."); // Validación de entrada vacía
        return;
    }

    // Agrega el nombre al array de amigos
    amigos.push(nombre);

    // Limpia el campo de texto
    input.value = "";

    // Actualiza la lista visible en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de nombres en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista anterior

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        li.classList.add("list-item");
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agrega al menos un nombre antes de sortear.");
        return;
    }

    // Sorteo aleatorio de un nombre de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="result-item">🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}

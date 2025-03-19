// Lista de adivinanzas
const adivinanzas = [
    { texto: "¿Qué animal dice miau?", respuesta: "gato", imagen: "img/gato.jpg" },
    { texto: "¿Qué fruta es amarilla y curvada?", respuesta: "plátano", imagen: "img/platano.jpg" },
    { texto: "¿Qué tiene dientes pero no muerde?", respuesta: "peine", imagen: "img/peine.jpg" },
];

let indiceActual = 0;

// Mostrar la adivinanza actual
function mostrarAdivinanza() {
    const nuevaAdivinanza = adivinanzas[indiceActual];
    const adivinanzaTexto = document.getElementById("adivinanza-texto");
    const adivinanzaImagen = document.getElementById("adivinanza-imagen");
    adivinanzaTexto.innerHTML = nuevaAdivinanza.texto;
    adivinanzaImagen.style.display = "none";  // Esconder la imagen al comenzar una nueva adivinanza
    document.getElementById("respuesta-input").value = ""; // Limpiar el campo de respuesta
    document.getElementById("mensaje").style.display = "none";  // Esconder mensaje de error
}

// Verificar respuesta
function verificarRespuesta() {
    const respuestaInput = document.getElementById("respuesta-input").value.trim().toLowerCase();
    const correcta = adivinanzas[indiceActual].respuesta.toLowerCase();

    if (respuestaInput === correcta) {
        // Mostrar la imagen si la respuesta es correcta
        const adivinanzaImagen = document.getElementById("adivinanza-imagen");
        adivinanzaImagen.src = adivinanzas[indiceActual].imagen;
        adivinanzaImagen.style.display = "block";

        // Mostrar animación de confeti
        mostrarConfeti();

        // Mostrar mensaje de éxito
        document.getElementById("mensaje").style.color = "green";
        document.getElementById("mensaje").textContent = "¡Respuesta Correcta!";
    } else {
        // Mostrar mensaje de error si la respuesta es incorrecta
        document.getElementById("mensaje").style.display = "block";
        document.getElementById("mensaje").style.color = "red";
        document.getElementById("mensaje").textContent = "¡Respuesta Incorrecta! Intenta de nuevo.";
    }
}

// Cambiar a la siguiente adivinanza
function siguienteAdivinanza() {
    indiceActual = (indiceActual + 1) % adivinanzas.length; // Cambiar adivinanza cíclicamente
    mostrarAdivinanza();
}

// Función para mostrar confeti
function mostrarConfeti() {
    const confetiContainer = document.getElementById("confeti");
    confetiContainer.style.display = "block";

    for (let i = 0; i < 30; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti-item");

        // Posiciones aleatorias
        const left = Math.random() * window.innerWidth;
        const delay = Math.random() * 2;

        confeti.style.left = `${left}px`;
        confeti.style.animationDelay = `${delay}s`;
        confeti.style.animationDuration = `${Math.random() * 3 + 2}s`;

        confetiContainer.appendChild(confeti);

        // Eliminar confeti después de que termine la animación
        setTimeout(() => {
            confeti.remove();
        }, (delay + 3) * 1000);
    }
}

// Inicializar la primera adivinanza al cargar la página
window.onload = mostrarAdivinanza;

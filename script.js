// Array of messages
var messages = [
    "Un súper desayuno a la cama.",
    "Una comida romántica a la luz de las velas.",
    "Masaje relajante de 30 minutos.",
    "Hacer la cama por 1 semana.",
    "Una caja de tus chocolates favoritos.",
    "Cine en casa: Hoy día vemos una película elegida por ti, con cabritas y chocolates.",
    "Un paseo en bicicleta virtual.",
    "Un baile romántico por videollamada.",
    "Un día sin discusiones.",
    "Un día de descanso para que tu pareja decida todo.",
    "Un picnic virtual en el parque.",
    "Una noche de juegos de mesa en línea.",
    "Un día de mensajes de amor y apoyo constante.",
    "Un día de cumplir todas las fantasías de tu pareja.",
    "Un día de retos de ejercicio juntos.",
    "Un día de escribir cartas de amor y compartirlas.",
    "Un día de compartir canciones y crear una lista de reproducción especial.",
    "Un día de planificar futuros viajes y aventuras juntos.",
    "Un día de compartir fotos y recuerdos especiales.",
    "Un día de retos de trivia y acertijos.",
    "Un día de actividades creativas como dibujar o escribir poemas.",
    "Un día de retos de fotografía y compartir los resultados.",
    "Un día de leer en voz alta un libro o artículo interesante.",
    "Un día de sorpresas virtuales y mensajes de amor.",
    "Un día de meditación o ejercicios de relajación juntos.",
    "Un día de compartir metas y sueños a largo plazo.",
    "Un día de cuidado personal juntos, como hacer mascarillas faciales.",
    "Un día de juegos de palabras y adivinanzas.",
    "Un día de compartir momentos de lectura en voz alta.",
    "Un día de celebrar fechas especiales como aniversarios o cumpleaños con sorpresas virtuales."
];

function displayMessage() {
   var today = new Date().toDateString();

    if (localStorage.getItem("currentDay") !== today){
       var index = Math.floor(Math.random() * messages.length);
       localStorage.setItem("currentDay", today);
       localStorage.setItem("messageIndex", index);
    }

    var messageIndex = localStorage.getItem("messageIndex");
    document.getElementById("dailyMessage").innerText = messages[messageIndex];
}

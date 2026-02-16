// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Eres lo primero en lo que pienso en las mañanas", time: 37 },
  { text: "eres con quien quiero", time: 41 },
  { text: "despertar entre las sabanas", time: 43 },
  { text: "eres mi deseo de 11:11", time: 46 },
  { text: "eres con quien quiero estar...", time: 50.5 },
  { text: "FEBRERO CATORCE", time: 52.7 },
  { text: "Tuuuuuuuuuuuuuuuuuuu❤❤❤❤❤", time: 55, duration: 7 },
  { text: "tuuuuuuuuuuuu....❤", time: 64, duration: 6 },
  { text: "Lo intentamos... si tu quieres", time: 73 },
  { text: "puedo ser yo si te conviene", time: 77, duration: 5 },
  { text: "Yo ya decidí...", time: 83 },
  { text: "¿y tu?", time: 87.3, duration: 3 },
  { text: "Lo intentamos si tu quieres", time: 91.5 },
  { text: "puedo ser yoo... si te conviene", time: 96, duration: 4 },
  { text: "Yo ya decidí...", time: 101.5 },
  { text: "y tu?..", time: 105.5, duration: 3.5 },
  { text: "♫♫...♪♪♪♫♫♪♪♪", time: 110.2 },
  { text: "♫♫♫.....♪♪♫♫♫", time: 120.8 },
  { text: "Eres... mis canciones preferidas", time: 129 },
  { text: "tienes que ser tu... solo tu", time: 134 },
  { text: "Eres lo mejor que podría..", time: 138 },
  { text: "pasarle a mi vida", time: 143 },
  { text: "perfecta melodía...", time: 145 },
  { text: "TUUUUUUUU....❤❤❤", time: 147.5, duration: 4},
  { text: "Tuuuuuuuuuu...", time: 157, duration: 5 },
  { text: "Lo intentamos... si tu quieres", time: 165.5 },
  { text: "puedo ser yo, si te conviene", time: 169.4 },
  { text: "yo ya decidí...", time: 175 },
  { text: "Y tu¿?", time: 179.3, duration: 3 },
  { text: "Lo intentamos si tu quieres", time: 183.5 },
  { text: "puedo ser yoo... si te conviene", time: 188, duration: 4 },
  { text: "Yo ya decidí...", time: 193.6 },
  { text: "y tuuu?..", time: 198.5, duration: 3.5 },
  { text: "♫♫...♪ ♪ ♪ ♫ ", time: 200.2 },
  { text: "♪ ♪ ♪ ♪ ♪ ♪", time: 203.8, duration: 3 },
  { text: "Cuando encontre esta canción hace varios años, no creí que llegaria el dia en que se lo dedicara a alguien, pero cuando lo volvi a escuchar gracias a youtube, transmitia exactamente mi sentir, y asi es como ahora te la dedico a vos ❤❤❤", time: 207, duration: 120},
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;

  for (let i = 0; i < lyricsData.length; i++) {
    let current = lyricsData[i];
    let next = lyricsData[i + 1];

    if (time >= current.time) {
      let endTime = current.duration
        ? current.time + current.duration
        : (next ? next.time : audio.duration);

      if (time < endTime) {
        lyrics.innerHTML = current.text;
        lyrics.style.opacity = 1;
        return;
      }
    }
  }

  lyrics.style.opacity = 0;
  lyrics.innerHTML = "";
}


audio.addEventListener("timeupdate", updateLyrics);


//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
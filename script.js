let indice = 0;

const fotos = [
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg"
];

function cambiarFoto(direccion) {
  indice = (indice + direccion + fotos.length) % fotos.length;

  const izq = document.getElementById("foto-izq");
  const cen = document.getElementById("foto-central");
  const der = document.getElementById("foto-der");

  izq.classList.add("fade");
  cen.classList.add("fade");
  der.classList.add("fade");

  setTimeout(() => {
    izq.src = fotos[(indice + fotos.length - 1) % fotos.length];
    cen.src = fotos[indice];
    der.src = fotos[(indice + 1) % fotos.length];

    izq.classList.remove("fade");
    cen.classList.remove("fade");
    der.classList.remove("fade");
  }, 300);
}

const boton = document.getElementById('boton-secreto');
const mensaje = document.getElementById('mensaje-secreto');

if (boton && mensaje) {
  boton.addEventListener('click', () => {
    if (mensaje.classList.contains('mostrar')) {
      mensaje.classList.remove('mostrar');
      setTimeout(() => mensaje.classList.add('oculto'), 500);
      boton.textContent = 'Ver mensaje';
    } else {
      mensaje.classList.remove('oculto');
      setTimeout(() => mensaje.classList.add('mostrar'), 10);
      boton.textContent = 'Ocultar';
    }
  });
}

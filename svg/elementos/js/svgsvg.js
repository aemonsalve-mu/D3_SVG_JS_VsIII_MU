const dimensiones = [500, 180];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const lienzo = document.querySelector("#lienzo");
lienzo.setAttribute("viewBox", "0 0 " + ancho + " " + alto);
document.querySelector("#salida").textContent = "Ancho interno: " + ancho + "\nAlto interno: " + alto;

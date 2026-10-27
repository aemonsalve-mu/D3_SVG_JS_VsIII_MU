const texto = document.querySelector("#texto-medido");
const longitud = texto.getComputedTextLength();
document.querySelector("#salida").textContent = "Longitud del texto: " + longitud;

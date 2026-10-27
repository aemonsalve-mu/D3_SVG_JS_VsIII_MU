const medida = [200, 90];
const rectangulo = document.querySelector("#rectangulo");
// La primera posición es el ancho; la segunda, el alto.
rectangulo.setAttribute("width", medida[0]);
rectangulo.setAttribute("height", medida[1]);
document.querySelector("#salida").textContent = "Ancho: " + medida[0] + "\nAlto: " + medida[1];

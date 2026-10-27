const figura = document.querySelector("#forma");
// Ampliación: esta matriz convierte coordenadas locales al viewport.
const matriz = figura.getScreenCTM();
const esquina = new DOMPoint(40, 30);
const pantalla = esquina.matrixTransform(matriz);
document.querySelector("#salida").textContent = "x en viewport: " + pantalla.x + "\ny en viewport: " + pantalla.y;

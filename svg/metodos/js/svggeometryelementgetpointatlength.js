const figura = document.querySelector("#forma");
// Recorremos 90 unidades del contorno desde su inicio.
const punto = figura.getPointAtLength(90);
document.querySelector("#salida").textContent = "x: " + punto.x + "\ny: " + punto.y;

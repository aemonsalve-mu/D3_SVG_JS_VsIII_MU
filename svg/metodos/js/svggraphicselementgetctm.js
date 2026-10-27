const figura = document.querySelector("#forma");
// Ampliación: una matriz describe el cambio de coordenadas.
const matriz = figura.getCTM();
document.querySelector("#salida").textContent = "Escala horizontal a: " + matriz.a + "\nEscala vertical d: " + matriz.d + "\nTraslación x: " + matriz.e + "\nTraslación y: " + matriz.f;

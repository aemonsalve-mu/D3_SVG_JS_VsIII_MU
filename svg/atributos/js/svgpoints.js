const puntos = [[30, 130], [130, 40], [260, 110], [400, 30]];
const puntoA = puntos[0];
const puntoB = puntos[1];
const puntoC = puntos[2];
const puntoD = puntos[3];
// Cada pareja se escribe como x,y; un espacio separa los puntos.
const texto = puntoA[0] + "," + puntoA[1] + " " +
  puntoB[0] + "," + puntoB[1] + " " +
  puntoC[0] + "," + puntoC[1] + " " +
  puntoD[0] + "," + puntoD[1];
document.querySelector("#demo polyline").setAttribute("points", texto);
document.querySelector("#salida").textContent = texto;

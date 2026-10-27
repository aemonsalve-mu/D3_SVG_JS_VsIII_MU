const radios = [100, 40];
const elipse = document.querySelector("#elipse");
elipse.setAttribute("rx", radios[0]);
elipse.setAttribute("ry", radios[1]);
document.querySelector("#salida").textContent = "Ancho: " + (2 * radios[0]) + "\nAlto: " + (2 * radios[1]);

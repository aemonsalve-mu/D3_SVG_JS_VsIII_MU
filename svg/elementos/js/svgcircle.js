const radios = [15, 30, 45];
// Un número del vector para cada círculo del HTML.
document.querySelector("#circulo-a").setAttribute("r", radios[0]);
document.querySelector("#circulo-b").setAttribute("r", radios[1]);
document.querySelector("#circulo-c").setAttribute("r", radios[2]);
document.querySelector("#salida").textContent = "Radios: " + radios + "\nDiámetros: 30,60,90";

const figura = document.querySelector("#forma");
const caja = figura.getBoundingClientRect();
document.querySelector("#salida").textContent = "x: " + caja.x + "\ny: " + caja.y + "\nAncho: " + caja.width + "\nAlto: " + caja.height;

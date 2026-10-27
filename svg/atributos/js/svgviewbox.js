// [mínimo x, mínimo y, ancho, alto], en ese orden.
const ventana = [0, 0, 1000, 360];
const svg = document.querySelector("#demo svg");
const texto = ventana[0] + " " + ventana[1] + " " + ventana[2] + " " + ventana[3];
svg.setAttribute("viewBox", texto);
document.querySelector("#salida").textContent = "viewBox: " + texto;

const figura = document.querySelector("#forma");
const dentro = figura.isPointInFill(new DOMPoint(100, 60));
const fuera = figura.isPointInFill(new DOMPoint(10, 10));
document.querySelector("#salida").textContent = "Punto interior: " + dentro + "\nPunto exterior: " + fuera;

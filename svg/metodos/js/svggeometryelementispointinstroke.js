const figura = document.querySelector("#forma");
figura.setAttribute("stroke", "black");
figura.setAttribute("stroke-width", 10);
const pertenece = figura.isPointInStroke(new DOMPoint(40, 60));
document.querySelector("#salida").textContent = "¿Pertenece al trazo? " + pertenece;

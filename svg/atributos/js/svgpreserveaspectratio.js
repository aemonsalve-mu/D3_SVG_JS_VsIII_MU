// La figura ya está en el HTML.
const figura = document.querySelector("#demo svg svg");
// Cambiamos únicamente el atributo estudiado.
figura.setAttribute("preserveAspectRatio", "xMinYMin meet");

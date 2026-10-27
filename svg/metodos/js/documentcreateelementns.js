// El espacio de nombres indica que creamos un elemento SVG.
const circulo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circulo.setAttribute("cx", 330);
circulo.setAttribute("cy", 80);
circulo.setAttribute("r", 40);
circulo.setAttribute("fill", "orange");
// El padre SVG ya está en el HTML.
document.querySelector("#demo svg").appendChild(circulo);

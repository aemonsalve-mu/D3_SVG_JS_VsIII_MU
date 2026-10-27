const desplazamiento = [130, 50];
const angulo = 30;
const figura = document.querySelector("#demo rect");
figura.setAttribute("transform", "translate(" + desplazamiento[0] + "," + desplazamiento[1] + ") rotate(" + angulo + ")");

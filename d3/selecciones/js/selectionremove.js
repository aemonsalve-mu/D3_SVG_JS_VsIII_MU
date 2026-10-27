// 1. selectAll encuentra dos párrafos; remove los retira.
d3.selectAll("#lista .retirar").remove();
// 2. Una nueva selección cuenta los nodos que quedan.
const restantes = d3.select("#lista").selectAll("p");
d3.select("#salida").text("Párrafos restantes: " + restantes.size());

const zonas = d3.selectAll("#lista .zona");
const antes = zonas.size();
// 1. Añadimos un nodo al DOM.
d3.select("#lista").append("p").attr("class", "zona").text("Oeste");
// 2. La selección guardada mantiene sus nodos originales.
const guardada = zonas.size();
// 3. Una nueva búsqueda sí encuentra los cuatro.
const actual = d3.selectAll("#lista .zona").size();
d3.select("#salida").text("Antes: " + antes + "\nSelección guardada: " + guardada + "\nNueva selección: " + actual);

const zonas = d3.selectAll("#demo .zona");
// 1. nodes devuelve un array; sus posiciones empiezan en 0.
const nodos = zonas.nodes();
// 2. Leemos posiciones sin bucles ni map.
d3.select("#salida").text("Cantidad: " + nodos.length + "\nPrimero: " + nodos[0].textContent + "\nTercero: " + nodos[2].textContent);
// 3. La posición 1 contiene el segundo nodo DOM.
d3.select(nodos[1]).style("color", "teal");

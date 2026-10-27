const zonas = d3.selectAll("#demo .zona");
// 1. node devuelve solo el primer párrafo DOM.
const nodo = zonas.node();
// 2. tagName y textContent son propiedades del DOM.
d3.select("#salida").text("Etiqueta: " + nodo.tagName + "\nTexto: " + nodo.textContent);
// 3. Para usar métodos D3, seleccionamos ese nodo.
d3.select(nodo).style("color", "teal");

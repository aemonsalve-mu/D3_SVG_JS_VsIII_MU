const lista = d3.select("#lista");
// 1. Asociamos un dato a cada nodo existente.
lista.selectAll("p").data(["Norte", "Centro", "Sur"]);
// 2. Solo quedan dos datos: el tercer nodo pasa a exit.
const enlace = lista.selectAll("p").data(["Norte", "Centro"]);
const sobrantes = enlace.exit().size();
const datoAnterior = enlace.exit().datum();
// 3. Lo retiramos del DOM.
enlace.exit().remove();
d3.select("#salida").text("Nodos retirados: " + sobrantes + "\nDato que conservaba el nodo: " + datoAnterior);

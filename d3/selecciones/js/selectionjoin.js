const lista = d3.select("#lista");
// 1. Pasamos de uno a tres párrafos: se crean dos.
lista.selectAll("p").data(["Norte", "Centro", "Sur"]).join("p").text(function(d) {
  return d;
});
const primeraCantidad = lista.selectAll("p").size();
// 2. Pasamos de tres a dos: se retira un nodo.
lista.selectAll("p").data(["Norte", "Sur"]).join("p").text(function(d) {
  return d;
});
d3.select("#salida").text("Primera actualización: " + primeraCantidad + "\nSegunda actualización: " + lista.selectAll("p").size());

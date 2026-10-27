const lista = d3.select("#lista");
// 1. Hay un nodo existente y tres datos.
const enlace = lista.selectAll("p").data(["Norte", "Centro", "Sur"]);
const faltan = enlace.enter().size();
// 2. Creamos solo los dos párrafos que faltan.
enlace.enter().append("p").text(function(d) {
  return d + " — nuevo";
});
// 3. Actualizamos por separado el párrafo existente.
enlace.text(function(d) {
  return d + " — existente";
});
d3.select("#salida").text("Párrafos creados: " + faltan);

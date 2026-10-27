// Lectura real de ventas-tabla.html. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.html("datos/ventas-tabla.html").then(function(doc) {
  const celdas = d3.select(doc).select("#ventas tbody tr").selectAll("td").nodes();
  d3.select("#salida-basica").text(
    "Zona: " + d3.select(celdas[1]).text() + "\n" +
    "Venta: " + Number(d3.select(celdas[2]).text())
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

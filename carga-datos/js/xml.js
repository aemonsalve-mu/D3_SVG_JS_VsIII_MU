// Lectura real de ventas.xml. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.xml("datos/ventas.xml").then(function(doc) {
  const primera = d3.select(doc).select("fila");
  const zona = primera.select("zona").text();
  const venta = Number(primera.select("ventas").text());
  d3.select("#salida-basica").text(
    "Zona: " + zona + "\n" +
    "Venta: " + venta
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

// Lectura real de ventas-sin-cabecera.csv. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.text("datos/ventas-sin-cabecera.csv").then(function(texto) {
  const datos = d3.csvParseRows(texto);
  d3.select("#salida-basica").text(
    "Filas del archivo: " + datos.length + "\n" +
    "Primera zona: " + datos[0][1]
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

// Lectura real de ventas.csv.gz. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.buffer("datos/ventas.csv.gz").then(function(bytes) {
  // Ampliación: el navegador debe admitir DecompressionStream.
  const flujo = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  // Devolvemos una promesa: el siguiente then espera el texto.
  return new Response(flujo).text();
}).then(function(texto) {
  const datos = d3.csvParse(texto);
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Primera venta: " + datos[0].ventas
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Usa HTTP y un navegador compatible.");
});

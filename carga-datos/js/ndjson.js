// Lectura real de ventas.ndjson. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.text("datos/ventas.ndjson").then(function(texto) {
  const lineas = texto.trim().split(/\r?\n/);
  const primera = JSON.parse(lineas[0]);
  d3.select("#salida-basica").text(
    "Líneas del archivo: " + lineas.length + "\n" +
    "Primera zona: " + primera.zona
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

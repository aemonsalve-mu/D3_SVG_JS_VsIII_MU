// Lectura real de ventas.json. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
Promise.all([
  d3.json("datos/ventas.json"),
  d3.csv("datos/ventas.csv")
]).then(function(resultados) {
  // El orden del resultado coincide con el orden de las peticiones.
  const json = resultados[0];
  const csv = resultados[1];
  d3.select("#salida-basica").text(
    "Filas JSON: " + json.length + "\n" +
    "Filas CSV: " + csv.length
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

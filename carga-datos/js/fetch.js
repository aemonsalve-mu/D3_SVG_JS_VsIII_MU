// Lectura real de ventas.json. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
fetch("datos/ventas.json").then(function(respuesta) {
  // Un error HTTP no rechaza automáticamente fetch.
  if (!respuesta.ok) {
    throw new Error("HTTP " + respuesta.status);
  }
  return respuesta.json();
}).then(function(datos) {
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Primera venta: " + datos[0].ventas
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

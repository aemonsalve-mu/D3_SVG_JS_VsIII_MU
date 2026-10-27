// Lectura real de ventas.json. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.json("datos/ventas.json").then(function(respuesta) {
  d3.select("#salida-basica").text(
    "Filas: " + respuesta.length + "\n" +
    "Primera zona: " + respuesta[0].zona + "\n" +
    "Primera venta: " + respuesta[0].ventas
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

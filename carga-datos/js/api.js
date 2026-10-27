// Lectura real de respuesta-api.json. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.json("datos/respuesta-api.json").then(function(respuesta) {
  const datos = respuesta.data;
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Primera venta: " + datos[0].ventas
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

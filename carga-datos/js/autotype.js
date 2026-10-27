// Lectura real de ventas.csv. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.csv("datos/ventas.csv", d3.autoType).then(function(datos) {
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Primera venta: " + datos[0].ventas + "\n" +
    "Identificador convertido: " + datos[0].id
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

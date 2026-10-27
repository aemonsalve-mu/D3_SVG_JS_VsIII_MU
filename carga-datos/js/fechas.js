// Lectura real de ventas-fechas.csv. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
const leerFecha = d3.utcParse("%Y-%m-%d");
const mostrarFecha = d3.utcFormat("%d/%m/%Y");

d3.csv("datos/ventas-fechas.csv").then(function(datos) {
  const fecha = leerFecha(datos[0].fecha);
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera fecha UTC: " + mostrarFecha(fecha)
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

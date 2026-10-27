// Lectura real de ventas-es.csv. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.dsv(";", "datos/ventas-es.csv").then(function(datos) {
  // Convertimos solo una columna numérica conocida, sin tocar el id.
  const venta = Number(datos[0].ventas.replace(",", "."));
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Venta convertida: " + venta + "\n" +
    "Identificador: " + datos[0].id
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

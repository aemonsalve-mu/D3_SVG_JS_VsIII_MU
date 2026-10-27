// Lectura real de ventas-fijo.txt. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.text("datos/ventas-fijo.txt").then(function(texto) {
  const linea = texto.split(/\r?\n/)[0];
  const id = linea.slice(0, 3);
  const zona = linea.slice(3, 13).trim();
  const venta = Number(linea.slice(13, 19));
  d3.select("#salida-basica").text(
    "Id: " + id + "\n" +
    "Zona: " + zona + "\n" +
    "Venta: " + venta
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

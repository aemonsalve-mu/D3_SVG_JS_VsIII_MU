// Lectura real de ventas-invalidas.csv. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.csv("datos/ventas-invalidas.csv").then(function(datos) {
  // La segunda fila del archivo tiene la venta vacía.
  const valor = datos[1].ventas;
  if (valor.trim() === "") {
    d3.select("#salida-basica").text("Archivo leído: " + datos.length + " filas. Venta ausente en " + datos[1].zona + ": no convertir a cero.");
  } else {
    const venta = Number(valor);
    if (Number.isFinite(venta)) {
      d3.select("#salida-basica").text("Venta válida: " + venta);
    } else {
      d3.select("#salida-basica").text("Venta no numérica.");
    }
  }
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo leer el archivo: " + error.message + ". Consulta la guía HTTP.");
});

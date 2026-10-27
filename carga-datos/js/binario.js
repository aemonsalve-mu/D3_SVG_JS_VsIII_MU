// Lectura real de ventas.bin. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.buffer("datos/ventas.bin").then(function(buffer) {
  // El esquema indica Float32 y little-endian.
  const vista = new DataView(buffer);
  const primeraVenta = vista.getFloat32(0, true);
  d3.select("#salida-basica").text(
    "Bytes: " + buffer.byteLength + "\n" +
    "Primera venta: " + primeraVenta
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

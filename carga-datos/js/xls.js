// Lectura real de ventas.xls. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
cargarSheetJS().then(function() {
  return d3.buffer("datos/ventas.xls");
}).then(function(buffer) {
  // SheetJS interpreta el libro; D3 solo ha leído los bytes.
  const libro = XLSX.read(buffer, {type: "array"});
  const primeraHoja = libro.SheetNames[0];
  const datos = XLSX.utils.sheet_to_json(libro.Sheets[primeraHoja]);
  d3.select("#salida-basica").text(
    "Filas: " + datos.length + "\n" +
    "Primera zona: " + datos[0].zona + "\n" +
    "Primera venta: " + datos[0].ventas
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

// Lectura real de marca.svg. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.blob("datos/marca.svg").then(function(blob) {
  d3.select("#salida-basica").text(
    "Tipo MIME recibido: " + blob.type + "\n" +
    "Bytes: " + blob.size
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

// Lectura real de zonas.txt. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.text("datos/zonas.txt").then(function(texto) {
  const zonas = texto.trim().split(/\r?\n/);
  d3.select("#salida-basica").text(
    "Zonas: " + zonas.length + "\n" +
    "Primera: " + zonas[0]
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

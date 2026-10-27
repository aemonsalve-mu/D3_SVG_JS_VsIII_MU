// Lectura real de marca.svg. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.image("datos/marca.svg").then(function(imagen) {
  // append recibe una función que devuelve la imagen ya cargada.
  d3.select("#demo-basico").append(function() {
    return imagen;
  });
  d3.select("#salida-basica").text(
    "Ancho: " + imagen.naturalWidth + "\n" +
    "Alto: " + imagen.naturalHeight
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

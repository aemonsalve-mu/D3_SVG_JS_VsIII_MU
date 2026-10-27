// Lectura real de marca.svg. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.svg("datos/marca.svg").then(function(doc) {
  const svg = d3.select(doc.documentElement);
  d3.select("#salida-basica").text(
    "Elemento raíz: " + doc.documentElement.localName + "\n" +
    "viewBox del archivo: " + svg.attr("viewBox")
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

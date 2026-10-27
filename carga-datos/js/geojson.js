// Lectura real de zonas.geojson. El archivo está en la carpeta datos.
// Este script se ejecuta al cargar la página mediante HTTP.
d3.json("datos/zonas.geojson").then(function(geo) {
  // La muestra es una colección de puntos.
  const primera = geo.features[0];
  d3.select("#salida-basica").text(
    "Zona: " + primera.properties.zona + "\n" +
    "Longitud: " + primera.geometry.coordinates[0] + "\n" +
    "Latitud: " + primera.geometry.coordinates[1]
  );
}).catch(function(error) {
  d3.select("#salida-basica").text("No se pudo cargar: " + error.message + ". Abre la carpeta mediante HTTP; consulta la guía.");
});

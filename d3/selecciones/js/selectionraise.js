// Naranja estaba después de verde en el HTML.
// Movemos verde al final de los hijos de su svg.
d3.select("#verde").raise();
d3.select("#salida").text("Verde queda después de naranja y cubre el solapamiento.");

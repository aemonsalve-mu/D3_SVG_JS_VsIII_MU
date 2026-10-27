// Cada pareja contiene [x, y]. d3.line ya usa esas posiciones por defecto.
const puntos = [[30, 130], [150, 90], [270, 110], [400, 25]];
const linea = d3.line();
const ruta = linea(puntos);
d3.select("#forma").attr("d", ruta);
d3.select("#salida").text(ruta);

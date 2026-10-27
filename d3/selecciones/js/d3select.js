// 1. La clase alumno aparece cinco veces. Solo se elige la primera.
d3.select(".alumno").style("color", "teal");

// 2. El selector completo limita la búsqueda al grupo B.
// El espacio significa: un descendiente, a cualquier profundidad.
d3.select("#grupo-b .alumno").style("font-weight", "bold");

// 3. Un id identifica un elemento concreto.
const grupo = d3.select("#grupo-a");

// 4. La siguiente búsqueda empieza DENTRO del grupo A.
grupo.select(".subgrupo p").style("background", "#ccebdc");

d3.select("#salida").text("Primera alumna del documento: " + d3.select(".alumno").text() + "\nPrimera del grupo B: " + d3.select("#grupo-b .alumno").text());

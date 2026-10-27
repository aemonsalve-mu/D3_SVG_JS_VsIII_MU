const grupo = d3.select("#grupo-a");
// 1. select puede llegar hasta el párrafo anidado de Luis.
grupo.select(".subgrupo p").style("background", "#ccebdc");
// 2. selectChild solo considera los hijos directos: Ana es la primera p.
grupo.selectChild("p").style("color", "teal");
// 3. En el grupo B se elige Sara, aunque Leo también coincide.
d3.select("#grupo-b").selectChild(".alumno").style("font-weight", "bold");
d3.select("#salida").text("Primer hijo p de A: " + grupo.selectChild("p").text());

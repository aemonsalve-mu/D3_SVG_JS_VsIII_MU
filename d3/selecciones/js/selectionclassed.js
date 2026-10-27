// 1. notice ya tiene un estilo en la hoja común.
d3.selectAll("#demo .zona").classed("notice", true);
// 2. Quitamos notice solo de Sur; zona se conserva.
d3.select("#sur").classed("notice", false);
const tieneClase = d3.select("#norte").classed("notice");
d3.select("#salida").text("¿Norte tiene notice? " + tieneClase);

// 1. Una instrucción cambia los tres párrafos.
d3.selectAll("#demo .zona").style("color", "teal");
// 2. select cambia solo el primero.
d3.select("#demo .zona").style("font-weight", "bold");
// 3. background y font-weight son propiedades CSS.
d3.selectAll("#demo .zona").style("background", "#ccebdc");

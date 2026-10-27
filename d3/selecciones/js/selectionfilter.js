const zonas = d3.selectAll("#demo .zona");
// 1. Un filtro por clase no necesita datos.
zonas.filter(".destacada").style("color", "teal");
// 2. Para filtrar por números, los asociamos antes.
zonas.data([40, 70, 100]);
zonas.filter(function(d) {
  return d >= 70;
}).style("font-weight", "bold");

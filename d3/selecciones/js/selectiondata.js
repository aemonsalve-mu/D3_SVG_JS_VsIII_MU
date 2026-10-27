const parrafos = d3.select("#lista").selectAll("p");
// 1. data asocia números; todavía no cambia los textos.
const enlace = parrafos.data([40, 70, 100, 55]);
// 2. Tenemos tres nodos, pero cuatro datos.
const actualizados = enlace.size();
const nuevos = enlace.enter().size();
const sobrantes = enlace.exit().size();
// 3. text muestra los datos que ya tienen un nodo.
enlace.text(function(d) {
  return "Venta: " + d;
});
d3.select("#salida").text("Con nodo: " + actualizados + "\nSin nodo todavía: " + nuevos + "\nNodos sobrantes: " + sobrantes);

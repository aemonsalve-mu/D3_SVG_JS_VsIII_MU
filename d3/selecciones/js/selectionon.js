// 1. Un dato por botón.
const botones = d3.selectAll("#demo .zona").data(["Norte", "Sur"]);
// 2. Esta función espera un clic; no se ejecuta al registrarla.
botones.on("click.detalle", function(event, d) {
  d3.select("#salida").text("Zona seleccionada: " + d + "\nEvento: " + event.type);
  d3.select(this).style("background", "orange");
});
// 3. Para retirar el escuchador, descomenta la línea siguiente.
// botones.on(".detalle", null);

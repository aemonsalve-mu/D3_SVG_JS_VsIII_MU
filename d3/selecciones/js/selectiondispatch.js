const boton = d3.select("#informe");
// 1. Escuchamos un evento propio llamado revision.
boton.on("revision", function(event) {
  d3.select("#salida").text("Detalle recibido: " + event.detail);
});
// 2. Enviamos el evento con información adicional.
boton.dispatch("revision", {detail: "Revisado por analítica"});
// 3. Un clic envía otra revisión.
boton.on("click", function() {
  boton.dispatch("revision", {detail: "Nueva revisión"});
});

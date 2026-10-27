const lista = d3.select("#lista");
lista.selectAll("p").data(["Norte", "Centro", "Sur"]);
// 1. La clave identifica cada nodo por su dato, no por su posición.
function clave(d) {
  return d;
}
// 2. El nuevo enlace devuelve la selección en el orden de los datos.
const nuevoOrden = lista.selectAll("p").data(["Sur", "Norte", "Centro"], clave);
// 3. El DOM no cambia de orden hasta ejecutar order.
nuevoOrden.order();

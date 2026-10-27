// 1. Marcamos la casilla con un valor booleano.
d3.select("#activo").property("checked", true);
// 2. Cambiamos el valor actual del campo.
d3.select("#zona").property("value", "Sur");
// 3. Sin segundo argumento se lee la propiedad.
const marcado = d3.select("#activo").property("checked");
const nombre = d3.select("#zona").property("value");
d3.select("#salida").text("Marcado: " + marcado + "\nValor actual: " + nombre);

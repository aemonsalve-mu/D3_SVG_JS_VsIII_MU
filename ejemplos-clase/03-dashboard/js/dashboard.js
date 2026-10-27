// 1. El único estado que puede cambiar es el canal seleccionado.
let canal = "Total";
const dimensiones = [640, 360];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margenIzquierdo = 70;
const margenDerecho = 30;
const margenSuperior = 40;
const margenInferior = 70;
const base = alto - margenInferior;
const porcentaje = d3.format(".1%");
const porcentajeEje = d3.format(".0%");

// 2. Dos funciones escritas por nosotros, no comandos de D3.
// Reciben un mes y devuelven la cifra del canal seleccionado.
function ventaDelMes(d) {
  if (canal === "Tienda") { return d.tienda; }
  if (canal === "Online") { return d.online; }
  return d.tienda + d.online;
}
function objetivoDelMes(d) {
  if (canal === "Tienda") { return d.objetivoTienda; }
  if (canal === "Online") { return d.objetivoOnline; }
  return d.objetivoTienda + d.objetivoOnline;
}

// 3. Las escalas se mantienen fijas para comparar los filtros.
const x = d3.scaleBand().domain(meses).range([margenIzquierdo, ancho - margenDerecho]).padding(0.25);
const y = d3.scaleLinear().domain([0, 300]).range([base, margenSuperior]);
d3.select("#ventas-mensuales").attr("viewBox", "0 0 " + ancho + " " + alto);
d3.select("#ventas-x").attr("transform", "translate(0," + base + ")").call(d3.axisBottom(x));
d3.select("#ventas-y").attr("transform", "translate(" + margenIzquierdo + ",0)").call(d3.axisLeft(y).ticks(6));

// 4. Segundo gráfico: 1 equivale al 100 % del objetivo.
// Reservamos 100 unidades a la derecha para una columna de porcentajes.
const xCumple = d3.scaleLinear().domain([0, 1.5]).range([90, ancho - 100]);
const yCumple = d3.scaleBand().domain(meses).range([margenSuperior, base]).padding(0.3);
d3.select("#cumplimiento").attr("viewBox", "0 0 " + ancho + " " + alto);
d3.select("#cumple-x").attr("transform", "translate(0," + base + ")").call(d3.axisBottom(xCumple).tickValues([0, 0.5, 1, 1.5]).tickFormat(porcentajeEje));
d3.select("#cumple-y").attr("transform", "translate(90,0)").call(d3.axisLeft(yCumple));
d3.select("#referencia-100").attr("x1", xCumple(1)).attr("x2", xCumple(1));
d3.select("#referencia-100").attr("y1", margenSuperior).attr("y2", base);

// 5. actualiza todo lo que depende del canal.
function actualizar(nuevoCanal) {
  canal = nuevoCanal;
  const total = d3.sum(datos, ventaDelMes);
  const objetivo = d3.sum(datos, objetivoDelMes);
  const primero = ventaDelMes(datos[0]);
  const ultimo = ventaDelMes(datos[datos.length - 1]);
  const variacion = (ultimo - primero) / primero;

  // Indicadores: el cumplimiento del período usa sumas, no la media de porcentajes.
  d3.select("#indicador-total").text(total);
  d3.select("#indicador-objetivo").text(objetivo);
  d3.select("#indicador-cumple").text(porcentaje(total / objetivo));
  d3.select("#indicador-variacion").text(porcentaje(variacion));
  d3.select("#estado").text("Canal: " + canal + ". Enero-junio: " + total + " ejemplares frente a un objetivo de " + objetivo + ".");
  d3.select("#titulo-mensuales").text("Ventas y objetivos mensuales: " + canal);
  d3.select("#titulo-cumplimiento").text("Cumplimiento mensual del objetivo: " + canal);
  d3.select("#nombre-canal").text(canal);

  // Primer gráfico: barra real y marca horizontal del objetivo.
  const barras = d3.select("#barras-ventas").selectAll("rect").data(datos);
  barras.attr("x", function(d) { return x(d.mes); });
  barras.attr("y", function(d) { return y(ventaDelMes(d)); });
  barras.attr("width", x.bandwidth());
  barras.attr("height", function(d) { return base - y(ventaDelMes(d)); });
  const objetivos = d3.select("#marcas-objetivo").selectAll("line").data(datos);
  objetivos.attr("x1", function(d) { return x(d.mes); });
  objetivos.attr("x2", function(d) { return x(d.mes) + x.bandwidth(); });
  objetivos.attr("y1", function(d) { return y(objetivoDelMes(d)); });
  objetivos.attr("y2", function(d) { return y(objetivoDelMes(d)); });
  const cifras = d3.select("#cifras-ventas").selectAll("text").data(datos);
  cifras.attr("x", function(d) { return x(d.mes) + x.bandwidth() / 2; });
  // Math.max elige el mayor de dos números para dejar la etiqueta por encima de ambas marcas.
  cifras.attr("y", function(d) { return y(Math.max(ventaDelMes(d), objetivoDelMes(d))) - 10; });
  cifras.text(ventaDelMes);

  // Segundo gráfico: cociente ventas / objetivo para cada mes.
  const barrasCumple = d3.select("#barras-cumple").selectAll("rect").data(datos);
  barrasCumple.attr("x", xCumple(0));
  barrasCumple.attr("y", function(d) { return yCumple(d.mes); });
  barrasCumple.attr("width", function(d) { return xCumple(ventaDelMes(d) / objetivoDelMes(d)) - xCumple(0); });
  barrasCumple.attr("height", yCumple.bandwidth());
  const cifrasCumple = d3.select("#cifras-cumple").selectAll("text").data(datos);
  cifrasCumple.attr("x", ancho - 15);
  cifrasCumple.attr("y", function(d) { return yCumple(d.mes) + yCumple.bandwidth() / 2 + 5; });
  cifrasCumple.text(function(d) { return porcentaje(ventaDelMes(d) / objetivoDelMes(d)); });

  // La tabla responde al mismo filtro que los gráficos.
  const filas = d3.select("#tabla-dashboard").selectAll("tbody tr").data(datos);
  filas.select(".mes").text(function(d) { return d.mes; });
  filas.select(".ventas").text(ventaDelMes);
  filas.select(".meta").text(objetivoDelMes);
  filas.select(".cumple").text(function(d) { return porcentaje(ventaDelMes(d) / objetivoDelMes(d)); });

  // aria-pressed indica qué botón está activo, también a lectores de pantalla.
  d3.select("#filtro-total").attr("aria-pressed", canal === "Total");
  d3.select("#filtro-tienda").attr("aria-pressed", canal === "Tienda");
  d3.select("#filtro-online").attr("aria-pressed", canal === "Online");
}

// 6. Cada clic llama a nuestra función con el nombre del canal.
d3.select("#filtro-total").on("click", function() { actualizar("Total"); });
d3.select("#filtro-tienda").on("click", function() { actualizar("Tienda"); });
d3.select("#filtro-online").on("click", function() { actualizar("Online"); });

// 7. Dibuja la primera vista sin esperar a que alguien pulse un botón.
actualizar("Total");

// 1. Las dos primeras vistas comparten dimensiones y escalas.
const dimensiones = [640, 360];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margenIzquierdo = 70;
const margenDerecho = 30;
const margenSuperior = 40;
const margenInferior = 70;
const base = alto - margenInferior;
d3.select("#tendencia").attr("viewBox", "0 0 " + ancho + " " + alto);
d3.select("#canales").attr("viewBox", "0 0 " + ancho + " " + alto);
const x = d3.scaleBand().domain(meses).range([margenIzquierdo, ancho - margenDerecho]).padding(0.25);
const y = d3.scaleLinear().domain([0, 300]).range([base, margenSuperior]);

// 2. Primer gráfico: puntos mensuales unidos en orden temporal.
d3.select("#tendencia-x").attr("transform", "translate(0," + base + ")").call(d3.axisBottom(x));
d3.select("#tendencia-y").attr("transform", "translate(" + margenIzquierdo + ",0)").call(d3.axisLeft(y).ticks(6));
const linea = d3.line();
linea.x(function(d) { return x(d.mes) + x.bandwidth() / 2; });
linea.y(function(d) { return y(d.tienda + d.online); });
d3.select("#linea-total").attr("d", linea(datos));
const puntos = d3.select("#puntos").selectAll("circle").data(datos);
puntos.attr("cx", function(d) { return x(d.mes) + x.bandwidth() / 2; });
puntos.attr("cy", function(d) { return y(d.tienda + d.online); });
const cifras = d3.select("#cifras-total").selectAll("text").data(datos);
cifras.attr("x", function(d) { return x(d.mes) + x.bandwidth() / 2; });
cifras.attr("y", function(d) { return y(d.tienda + d.online) - 12; });
cifras.text(function(d) { return d.tienda + d.online; });

// 3. Segundo gráfico: dos barras dentro de la banda de cada mes.
d3.select("#canales-x").attr("transform", "translate(0," + base + ")").call(d3.axisBottom(x));
d3.select("#canales-y").attr("transform", "translate(" + margenIzquierdo + ",0)").call(d3.axisLeft(y).ticks(6));
const anchoBarra = x.bandwidth() / 2;
const tienda = d3.select("#barras-tienda").selectAll("rect").data(datos);
tienda.attr("x", function(d) { return x(d.mes); });
tienda.attr("y", function(d) { return y(d.tienda); });
tienda.attr("width", anchoBarra);
tienda.attr("height", function(d) { return base - y(d.tienda); });
const online = d3.select("#barras-online").selectAll("rect").data(datos);
online.attr("x", function(d) { return x(d.mes) + anchoBarra; });
online.attr("y", function(d) { return y(d.online); });
online.attr("width", anchoBarra);
online.attr("height", function(d) { return base - y(d.online); });

// 4. Calculamos diferencias entre el último y el primer mes.
const primero = datos[0];
const ultimo = datos[datos.length - 1];
const totalInicial = primero.tienda + primero.online;
const totalFinal = ultimo.tienda + ultimo.online;
const aumentoTotal = totalFinal - totalInicial;
const aumentoTienda = ultimo.tienda - primero.tienda;
const aumentoOnline = ultimo.online - primero.online;
const aportes = [
  {canal: "Tienda", aumento: aumentoTienda},
  {canal: "Online", aumento: aumentoOnline}
];

// 5. Tercer gráfico: longitudes horizontales para las diferencias.
const dimensionesAporte = [640, 230];
const anchoAporte = dimensionesAporte[0];
const altoAporte = dimensionesAporte[1];
const baseAporte = altoAporte - 60;
d3.select("#aportaciones").attr("viewBox", "0 0 " + anchoAporte + " " + altoAporte);
const xAporte = d3.scaleLinear().domain([0, 160]).range([100, anchoAporte - 70]);
const yAporte = d3.scaleBand().domain(["Tienda", "Online"]).range([40, baseAporte]).padding(0.35);
d3.select("#aporte-x").attr("transform", "translate(0," + baseAporte + ")").call(d3.axisBottom(xAporte).tickValues([0, 40, 80, 120, 160]));
d3.select("#aporte-y").attr("transform", "translate(100,0)").call(d3.axisLeft(yAporte));
const barrasAporte = d3.select("#barras-aporte").selectAll("rect").data(aportes);
barrasAporte.attr("x", xAporte(0));
barrasAporte.attr("y", function(d) { return yAporte(d.canal); });
barrasAporte.attr("width", function(d) { return xAporte(d.aumento) - xAporte(0); });
barrasAporte.attr("height", yAporte.bandwidth());
const cifrasAporte = d3.select("#cifras-aporte").selectAll("text").data(aportes);
cifrasAporte.attr("x", function(d) { return xAporte(d.aumento) + 10; });
cifrasAporte.attr("y", function(d) { return yAporte(d.canal) + yAporte.bandwidth() / 2 + 5; });
cifrasAporte.text(function(d) { return "+" + d.aumento; });

// 6. Los titulares se calculan a partir de los datos, no de cifras copiadas.
const porcentaje = d3.format(".0%");
const porcentajeDetalle = d3.format(".2%");
d3.select("#mensaje-total").text("De " + totalInicial + " a " + totalFinal + " ejemplares: un aumento del " + porcentaje(aumentoTotal / totalInicial));
d3.select("#mensaje-canales").text("Online pasa del " + porcentaje(primero.online / totalInicial) + " al " + porcentaje(ultimo.online / totalFinal) + " de las ventas mensuales");
d3.select("#mensaje-aporte").text("Online aporta " + aumentoOnline + " de las " + aumentoTotal + " unidades del aumento neto: " + porcentajeDetalle(aumentoOnline / aumentoTotal));
d3.select("#dato-tienda").text("Tienda: " + primero.tienda + " → " + ultimo.tienda + " (aumento: " + aumentoTienda + ").");
d3.select("#dato-online").text("Online: " + primero.online + " → " + ultimo.online + " (aumento: " + aumentoOnline + ").");

// 7. Una tabla permite comprobar las dos series y su suma.
const filas = d3.select("#tabla-historia").selectAll("tbody tr").data(datos);
filas.select(".mes").text(function(d) { return d.mes; });
filas.select(".tienda-dato").text(function(d) { return d.tienda; });
filas.select(".online-dato").text(function(d) { return d.online; });
filas.select(".total-dato").text(function(d) { return d.tienda + d.online; });

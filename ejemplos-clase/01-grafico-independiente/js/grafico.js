// 1. [ancho, alto] son medidas del SVG, no valores de ventas.
const dimensiones = [640, 360];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margenIzquierdo = 70;
const margenDerecho = 30;
const margenSuperior = 40;
const margenInferior = 70;
const base = alto - margenInferior;
d3.select("#grafico").attr("viewBox", "0 0 " + ancho + " " + alto);

// 2. Una escala para meses y otra para cantidades.
const x = d3.scaleBand();
x.domain(meses);
x.range([margenIzquierdo, ancho - margenDerecho]);
x.padding(0.25);
const y = d3.scaleLinear();
y.domain([0, 300]);
y.range([base, margenSuperior]);

// 3. El grupo del eje se coloca en su posición del dibujo.
d3.select("#eje-x").attr("transform", "translate(0," + base + ")");
d3.select("#eje-x").call(d3.axisBottom(x));
d3.select("#eje-y").attr("transform", "translate(" + margenIzquierdo + ",0)");
d3.select("#eje-y").call(d3.axisLeft(y).ticks(6));

// 4. Cada rectángulo recibe un mes. d es un objeto de datos.
const barras = d3.select("#barras").selectAll("rect").data(datos);
barras.attr("x", function(d) { return x(d.mes); });
barras.attr("y", function(d) { return y(d.tienda + d.online); });
barras.attr("width", x.bandwidth());
barras.attr("height", function(d) { return base - y(d.tienda + d.online); });

// 5. Las etiquetas usan los mismos datos y escalas.
const etiquetas = d3.select("#etiquetas").selectAll("text").data(datos);
etiquetas.attr("x", function(d) { return x(d.mes) + x.bandwidth() / 2; });
etiquetas.attr("y", function(d) { return y(d.tienda + d.online) - 10; });
etiquetas.text(function(d) { return d.tienda + d.online; });

// 6. La tabla ofrece una lectura exacta de las cifras.
const filas = d3.select("#tabla-datos").selectAll("tbody tr").data(datos);
filas.select(".mes").text(function(d) { return d.mes; });
filas.select(".ventas").text(function(d) { return d.tienda + d.online; });

// 7. d3.sum recorre los meses y suma la cantidad que devuelve la función.
const total = d3.sum(datos, function(d) { return d.tienda + d.online; });
const primero = datos[0].tienda + datos[0].online;
const ultimo = datos[datos.length - 1].tienda + datos[datos.length - 1].online;
d3.select("#resumen").text("Total del período: " + total + " ejemplares. Primer mes: " + primero + ". Último mes: " + ultimo + ".");

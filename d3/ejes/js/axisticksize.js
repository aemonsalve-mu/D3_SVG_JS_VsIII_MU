// 1. [ancho, alto] del lienzo y un margen para las etiquetas.
const dimensiones = [560, 240];
const ancho = dimensiones[0];
const alto = dimensiones[1];
const margen = 40;
d3.select("#lienzo").attr("viewBox", "0 0 " + ancho + " " + alto);

// 2. El dominio son datos; el rango son coordenadas del dibujo.
const escala = d3.scaleLinear().domain([0, 100]);
escala.range([margen, ancho - margen]);
const eje = d3.axisBottom(escala);
eje.ticks(5);

eje.tickSize(10);

// 3. El grupo ya existe. Lo colocamos y dibujamos el eje.
const grupo = d3.select("#eje");
grupo.attr("transform", "translate(0," + (alto - margen) + ")");
grupo.call(eje);

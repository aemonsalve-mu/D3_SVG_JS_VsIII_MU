// size es el área del símbolo, no su radio.
const simbolo = d3.symbol().type(d3.symbolTriangle).size(1200);
d3.select("#forma").attr("d", simbolo());

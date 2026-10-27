// Radios en unidades SVG; ángulos en radianes.
const arco = d3.arc().innerRadius(40).outerRadius(85);
arco.startAngle(0).endAngle(Math.PI * 1.5);
d3.select("#forma").attr("d", arco());

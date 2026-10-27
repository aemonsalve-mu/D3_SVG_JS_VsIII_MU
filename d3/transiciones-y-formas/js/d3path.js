const camino = d3.path();
camino.moveTo(30, 120);
camino.lineTo(150, 30);
camino.lineTo(270, 120);
camino.closePath();
// El trazado se convierte a texto para el atributo d.
d3.select("#forma").attr("d", camino.toString());
d3.select("#salida").text(camino.toString());

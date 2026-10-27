// pie calcula ángulos; no dibuja por sí sola.
const calcular = d3.pie().sort(null);
const sectores = calcular([40, 70, 100]);
// [0] es el primer sector; value, startAngle y endAngle son sus propiedades.
d3.select("#salida").text(
  "Valor del primer sector: " + sectores[0].value + "\n" +
  "Ángulo inicial: " + sectores[0].startAngle + "\n" +
  "Ángulo final: " + sectores[0].endAngle + "\n" +
  "Fin del último sector: " + sectores[2].endAngle
);

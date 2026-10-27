// Los cortes se calculan a partir de toda la muestra.
const escala = d3.scaleQuantile().domain([5,8,9,10,12,15,20,90,100]).range(["Bajo","Medio","Alto"]);
d3.select("#salida").text(
  "Salida 1: " + escala(8) + "\n" +
  "Salida 2: " + escala(12) + "\n" +
  "Salida 3: " + escala(90) + "\n" +
  "Cortes calculados: " + escala.quantiles()
);

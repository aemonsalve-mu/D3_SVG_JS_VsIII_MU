const svg = d3.select("#lienzo");
// 1. Esperamos un clic en el SVG.
svg.on("click", function(event) {
  // 2. El resultado es una lista de dos números: [x, y].
  const punto = d3.pointer(event, this);
  // 3. Las posiciones 0 y 1 contienen x e y.
  d3.select("#marca").attr("cx", punto[0]).attr("cy", punto[1]);
  d3.select("#salida").text("x local: " + punto[0] + "\ny local: " + punto[1]);
});

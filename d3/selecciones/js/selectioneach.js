const zonas = d3.selectAll("#demo .zona");
zonas.data([40, 70, 100]);
// this es el párrafo que D3 está visitando en cada llamada.
zonas.each(function(d, i) {
  d3.select(this).append("span").text(" — venta " + d + ", índice " + i);
});

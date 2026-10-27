const ventas = d3.selectAll("#demo .venta");
// 1. sort compara datos; no lee el texto HTML automáticamente.
ventas.data([40, 100, 70]);
// 2. D3 incluye un comparador de menor a mayor.
ventas.sort(d3.ascending);
// 3. Para invertir el orden, prueba d3.descending.

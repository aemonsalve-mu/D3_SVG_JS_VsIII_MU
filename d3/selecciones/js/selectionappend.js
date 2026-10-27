const lista = d3.select("#lista");
// 1. El HTML ya contiene Norte. Creamos un párrafo después.
lista.append("p").text("Sur");
// 2. style se aplica al nuevo párrafo, no a la lista.
lista.append("p").text("Centro").style("color", "teal");
// 3. Creamos un hijo dentro de CADA párrafo.
lista.selectAll("p").append("span").text(" — zona");

const grupo = d3.select("#grupo-a");
// 1. Ana y Eva son hijos directos. Luis no lo es.
const directos = grupo.selectChildren("p");
directos.style("color", "teal");
// 2. Una búsqueda de descendientes sí incluye Luis.
const todos = grupo.selectAll("p");
// 3. Sin selector se eligen todos los hijos que sean elementos.
const elementos = grupo.selectChildren();
d3.select("#salida").text("Hijos directos p: " + directos.size() + "\nTodos los descendientes p: " + todos.size() + "\nHijos elemento de A: " + elementos.size());

// 1. Cambia los cinco alumnos, incluidos los que están anidados.
d3.selectAll(".alumno").style("color", "teal");

// 2. Solo los dos alumnos del grupo B quedan en negrita.
d3.selectAll("#grupo-b .alumno").style("font-weight", "bold");

// 3. > exige un hijo DIRECTO del grupo A: Ana y Eva.
// Luis está dentro de otro div, por eso no se selecciona aquí.
d3.selectAll("#grupo-a > p").style("background", "#ccebdc");

const todos = d3.selectAll(".alumno");
const descendientes = d3.selectAll("#grupo-a p");
const directos = d3.selectAll("#grupo-a > p");

d3.select("#salida").text("Todos: " + todos.size() + "\nDescendientes del grupo A: " + descendientes.size() + "\nHijos directos p del grupo A: " + directos.size());

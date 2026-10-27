// 1. Asociamos un dato distinto a cada contenedor.
const grupos = d3.selectAll("#demo .grupo");
grupos.data(["Norte", "Sur"]);
// 2. Ana tiene un dato propio antes de seleccionar los descendientes.
d3.select("#grupo-a > p").datum("Dato propio de Ana");
// 3. Se eligen tres alumnos de A y dos de B, sin copiar Norte ni Sur.
const alumnos = grupos.selectAll(".alumno");
alumnos.style("color", "teal");
const conservado = alumnos.datum();

// 4. Asignamos los datos de cada grupo de manera explícita.
d3.select("#grupo-a").selectAll("p").data(["Ana", "Luis", "Eva"]);
d3.select("#grupo-b").selectAll("p").data(["Sara", "Leo"]);
// 5. i empieza en 0 dentro de CADA grupo de selección.
alumnos.text(function(d, i) {
  return d + " (índice " + i + ")";
});

d3.select("#salida").text("Alumnos: " + alumnos.size() + "\nDato conservado antes de data: " + conservado);

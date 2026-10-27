// 1. d3.selectAll busca los dos contenedores en el documento.
const grupos = d3.selectAll("#demo .grupo");

// 2. select busca DENTRO de cada contenedor: Ana y Sara.
const primeros = grupos.select(".alumno");
primeros.style("color", "teal");

// 3. Una búsqueda también puede llegar a un descendiente anidado.
const grupoA = d3.select("#grupo-a");
grupoA.select(".subgrupo p").style("background", "#ccebdc");

// 4. Ampliación: datum guarda un dato, sin cambiar el texto HTML.
// Lee primero la ficha datum si aún no conoces este método.
grupoA.datum("Dato del grupo A");
d3.select("#grupo-a > p").datum("Dato propio de Ana");
const antes = d3.select("#grupo-a > p").datum();

// 5. select desde grupoA transmite su dato a la primera alumna.
grupoA.select(".alumno");
const despues = d3.select("#grupo-a > p").datum();

d3.select("#salida").text(
  "Alumnos elegidos: " + primeros.size() + "\n" +
  "Dato de Ana antes: " + antes + "\n" +
  "Dato de Ana después: " + despues
);

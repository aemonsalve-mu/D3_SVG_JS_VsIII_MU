const circulos = d3.select("#demo").selectAll("circle");
// 1. La lectura devuelve texto: el radio del primer círculo.
const antes = circulos.attr("r");
// 2. La escritura cambia AMBOS círculos.
circulos.attr("r", 30);
// 3. Una selección singular cambia solo el primero.
d3.select("#demo circle").attr("fill", "orange");
d3.select("#salida").text("Radio inicial: " + antes + "\nRadio final: " + circulos.attr("r"));

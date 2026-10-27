// 1. datos es el vector de observaciones numéricas.
const datos = [20, 50, 100];
// d3.max devuelve el mayor valor del vector: aquí 100.
const maximo = d3.max(datos);
const escala = d3.scaleLinear().domain([0, maximo]).range([0, 400]);
const antes = escala(50);

// 2. Cambiamos el tercer dato. La escala no se actualiza sola.
datos[2] = 200;
escala.domain([0, d3.max(datos)]);
const despues = escala(50);

d3.select("#salida").text(
  "Máximo inicial: " + maximo + "\n" +
  "Dato 50 antes: " + antes + "\n" +
  "Máximo nuevo: " + d3.max(datos) + "\n" +
  "Dato 50 después: " + despues
);

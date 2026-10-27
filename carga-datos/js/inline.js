// Un array es una lista; cada objeto describe una fila.
const datos = [
  {
    "zona": "Norte",
    "ventas": 40
  },
  {
    "zona": "Centro",
    "ventas": 70
  },
  {
    "zona": "Sur",
    "ventas": 100
  },
  {
    "zona": "Oeste",
    "ventas": 55
  }
];
d3.select("#salida-basica").text(
  "Filas: " + datos.length + "\n" +
  "Primera zona: " + datos[0].zona + "\n" +
  "Primera venta: " + datos[0].ventas
);

// Datos sintéticos: ejemplares vendidos, no ingresos ni beneficios.
// Cada objeto entre llaves es un mes. Sus propiedades tienen nombre.
// datos[0] es enero; datos[0].tienda es el número 80.
const datos = [
  {mes: "Enero", tienda: 80, online: 20, objetivoTienda: 85, objetivoOnline: 25},
  {mes: "Febrero", tienda: 90, online: 30, objetivoTienda: 95, objetivoOnline: 35},
  {mes: "Marzo", tienda: 100, online: 40, objetivoTienda: 105, objetivoOnline: 45},
  {mes: "Abril", tienda: 110, online: 60, objetivoTienda: 115, objetivoOnline: 65},
  {mes: "Mayo", tienda: 120, online: 90, objetivoTienda: 125, objetivoOnline: 95},
  {mes: "Junio", tienda: 130, online: 130, objetivoTienda: 135, objetivoOnline: 115}
];

// El orden de este array fija el orden temporal del eje.
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

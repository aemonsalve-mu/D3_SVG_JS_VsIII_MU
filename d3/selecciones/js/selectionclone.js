// 1. Copia el párrafo y su contenido.
d3.select("#profundo p").clone(true);
// 2. Copia el párrafo sin texto ni b.
const copia = d3.select("#superficial p").clone(false);
// 3. Escribimos algo para reconocer la copia vacía.
copia.text("Copia sin hijos originales");

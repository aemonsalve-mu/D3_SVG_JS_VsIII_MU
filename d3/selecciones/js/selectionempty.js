// 1. Este elemento no existe.
const ausente = d3.select("#no-existe").empty();
// 2. La caja existe aunque no tenga contenido.
const caja = d3.select("#caja-vacia").empty();
// 3. Este párrafo también existe.
const zona = d3.select("#zona").empty();
d3.select("#salida").text("Ausente: " + ausente + "\nCaja sin contenido: " + caja + "\nZona: " + zona);

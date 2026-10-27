// 1. Las etiquetas se muestran como texto: no crean negrita.
d3.select("#literal").text("<b>Ventas</b>");
// 2. El b anterior desaparece al reemplazar el contenido del padre.
d3.select("#reemplazo").text("Informe nuevo");
// 3. Sin argumentos, text lee.
d3.select("#salida").text(d3.select("#reemplazo").text());

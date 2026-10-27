// Naranja estaba al final: se dibujaba por encima.
// Ahora pasa al principio y verde queda por encima.
d3.select("#naranja").lower();
d3.select("#salida").text("Naranja queda antes de verde en el DOM.");

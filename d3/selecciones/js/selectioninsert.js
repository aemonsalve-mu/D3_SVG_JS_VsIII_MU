const lista = d3.select("#lista");
// 1. Norte se inserta antes de Sur.
lista.insert("p", "#sur").text("Norte");
// 2. Centro también se inserta antes de Sur.
lista.insert("p", "#sur").text("Centro");
// 3. Sin referencia se añade al final.
lista.insert("p").text("Oeste");

// document representa la página HTML que está abierta.
// querySelector devuelve el primer elemento coincidente, no una selección D3.
const primero = document.querySelector("#demo .alumno");

// Consultar un elemento concreto limita el lugar donde se buscan resultados.
const grupoB = document.querySelector("#grupo-b");
const alumnaB = grupoB.querySelector(".alumno");

// querySelectorAll devuelve una lista de todas las coincidencias.
const todos = document.querySelectorAll("#demo .alumno");
const salida = document.querySelector("#salida");

// textContent lee o escribe texto de un nodo DOM.
salida.textContent = "Primero: " + primero.textContent + "\n" +
  "Primera del grupo B: " + alumnaB.textContent + "\n" +
  "Total: " + todos.length;

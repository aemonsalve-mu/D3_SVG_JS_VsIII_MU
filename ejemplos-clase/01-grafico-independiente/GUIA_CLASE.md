# Clase 1: un gráfico independiente (35 minutos)

Abre `index.html` de esta carpeta. Funciona directamente y sin conexión. Datos: `../datos/ventas.js`; código: `js/grafico.js`.

## Resultado observable

El estudiante explica una comparación mensual sin confundir datos, coordenadas y longitudes. Construye o modifica barras con dos escalas y dos ejes. Comprueba las cifras en la tabla.

## Secuencia de clase

1. **0–5 min:** pregunta qué se vende, qué período se observa y cuál es la unidad. Muestra el gráfico y pide una conclusión descriptiva. No aceptes «crecen los beneficios»: no hay datos de beneficios.
2. **5–10 min:** abre ventas.js. Lee un objeto: enero suma 80 + 20 = 100. Distingue índice de array y propiedad de objeto.
3. **10–18 min:** muestra el SVG inicial y el vector [640,360]. Calcula base=290, rango horizontal [70,610] y vertical [290,40]. Dibuja sobre la pizarra posición y y altura.
4. **18–25 min:** sigue el script por sus bloques. Explica scaleBand, bandwidth, asignación de datos y las funciones que devuelven un número. Localiza los seis nodos; no hay join.
5. **25–32 min:** cambia junio online de 130 a 150: última barra 280, total 1020. Cambia ancho a 800: nuevos espacios, mismas cifras. Restaura ambos valores.
6. **32–35 min:** cada estudiante presenta el gráfico en treinta segundos: pregunta, evidencia y límite de interpretación.

## Comprobaciones

Valores: 100,120,140,170,210,260. Total: 1000. La base es y=290 y todas las alturas son positivas. El eje parte de cero. El título y la tabla declaran la unidad.

## Transferencia y evaluación

Pide un nuevo ejemplo con seis categorías de datos propios no sensibles. Puede mantener meses o cambiar las categorías en datos y meses. Debe entregar HTML + JS y justificar dos decisiones de diseño. Evalúa cuatro aspectos, un punto cada uno: cifras correctas, dimensiones correctas, gráfico autónomo, conclusión prudente. Para continuar, debe resolver al menos tres y corregir cualquier error de cifras.

No añadas un séptimo registro sin adaptar los nodos del HTML. Si los datos superan 300, ajusta el dominio vertical. Estas restricciones mantienen sencilla la primera versión.

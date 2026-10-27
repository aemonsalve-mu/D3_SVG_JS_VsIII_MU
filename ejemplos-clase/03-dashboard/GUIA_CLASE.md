# Clase 3: dashboard de seguimiento (55 minutos)

Abre `index.html`. Código: `js/dashboard.js`. Datos comunes: `../datos/ventas.js`. No requiere servidor ni conexión.

## Resultado observable

El estudiante reúne cuatro indicadores, dos gráficos y una tabla, y los actualiza mediante un filtro por canal. Puede explicar qué cambia y qué permanece fijo. Sabe por qué los indicadores deben usar el mismo criterio de selección que los gráficos.

## Secuencia de clase

1. **0–8 min:** utiliza el panel sin mostrar código. Identifica destinatario, período, unidad y objetivo de cada indicador. Predice las cifras de Tienda y Online.
2. **8–17 min:** abre las funciones ventaDelMes y objetivoDelMes. Explica parámetros, return, if, comparación === y variable let. Calcula manualmente enero para cada filtro.
3. **17–25 min:** estudia las escalas. Ventas: [0,300]; cumplimiento: [0,1.5]. Justifica el origen cero y la referencia del 100 %. Revisa base=290 y la diferencia entre posición y longitud.
4. **25–37 min:** recorre actualizar por bloques: estado, indicadores, barras, objetivos, porcentajes, tabla y botones. on registra el evento; actualizar("Total") dibuja la vista inicial.
5. **37–47 min:** prueba los tres filtros y contrasta con los valores siguientes. Cambia el objetivo online de junio a 130: ventas iguales, objetivo semestral total=1055, junio online=100 %. Restaura 115.
6. **47–55 min:** exposición breve: cada pareja recibe una pregunta operativa y debe responder con filtro, dos cifras y una limitación de los datos.

## Resultados de referencia

| Filtro | Ventas del período | Objetivo del período | Cumplimiento | Cambio enero-junio |
| --- | ---: | ---: | ---: | ---: |
| Total | 1000 | 1040 | 96,2 % | 160,0 % |
| Tienda | 630 | 660 | 95,5 % | 62,5 % |
| Online | 370 | 380 | 97,4 % | 550,0 % |

En junio, Total=260/250=104 %, Tienda=130/135≈96,3 % y Online=130/115≈113,0 %. El total supera su objetivo aunque tienda no alcance el suyo. Un resultado agregado puede ocultar diferencias.

El programa usa el formato predeterminado de D3, por lo que muestra punto decimal. La tabla anterior usa coma decimal de acuerdo con la escritura en español.

## Preguntas para razonar

- ¿Por qué 96,2 % se obtiene como 1000/1040 y no como promedio simple de porcentajes mensuales?
- ¿Por qué un aumento del 550 % online no significa que ese canal venda más que tienda en todo el período?
- ¿Por qué mantener escalas fijas facilita comparar los filtros?
- ¿Qué datos faltan para decidir presupuesto o contratación?

## Evaluación práctica

Un punto por cada aspecto: indicadores correctos, filtro coherente en todas las vistas, explicación de escalas y denominadores, interpretación prudente. Cualquier inconsistencia entre tabla y gráfico debe corregirse. La entrega mínima es un dashboard con dos gráficos, al menos tres indicadores, un filtro funcional, fuente, unidad y período.

## Límites de esta primera versión

Las seis marcas están escritas en el HTML y las escalas tienen dominios fijos. Objetivos y ventas iniciales son positivos. No se cubren cocientes con denominador cero ni datos ausentes; deben definirse antes de aplicar el código a otros datos. La actualización se produce por clic y no por una conexión a una base de datos.

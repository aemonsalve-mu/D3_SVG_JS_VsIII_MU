# Versión extra: dashboard responsive con dos gráficos por fila

Abre [dashboard-responsive.html](./dashboard-responsive.html). Esta versión conserva los datos, los cálculos y los filtros del caso 3 y presenta el panel de forma compacta. El [dashboard original](../03-dashboard/index.html) conserva su explicación paso a paso.

## Archivos

| Archivo | Función |
| --- | --- |
| dashboard-responsive.html | Estructura del panel: filtros, indicadores, dos gráficos y tabla plegada. |
| [dashboard-responsive.css](./dashboard-responsive.css) | Reglas de distribución, adaptación a pantallas e impresión. |
| [js/dashboard-responsive.js](./js/dashboard-responsive.js) | Escalas, cálculos y actualización al cambiar de canal. |
| [../datos/ventas.js](../datos/ventas.js) | Datos compartidos por los ejemplos. |

Se puede abrir directamente, sin servidor y sin conexión. No necesita instalar bibliotecas nuevas.

## 1. Dos columnas mediante CSS Grid

```css
.graficos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
```

- display: grid organiza los hijos del contenedor en una cuadrícula.
- repeat(2, ...) crea dos columnas.
- 1fr reparte el espacio disponible en partes iguales.
- minmax(0, 1fr) permite que cada columna se reduzca sin imponer el ancho mínimo del gráfico.
- gap es la separación entre los dos recuadros.

Las dos secciones que contienen gráficos son hijas directas de `.graficos`. Si se añaden otras dos secciones del mismo tipo, aparecerán en una segunda fila.

## 2. Adaptación a pantallas

| Anchura disponible del navegador | Gráficos por fila | Indicadores por fila |
| --- | ---: | ---: |
| Desde 960 píxeles CSS | 2 | 4 |
| Menos de 960 píxeles CSS | 1 | 2 |

```css
@media (max-width: 959px) {
  .graficos { grid-template-columns: 1fr; }
}
```

Una media query aplica reglas cuando se cumple una condición de pantalla. En móviles se utiliza una columna para conservar la legibilidad. Por tanto, «una sola hoja» se refiere al panel de escritorio y a la impresión horizontal; el móvil conserva el desplazamiento vertical habitual.

## 3. El dibujo conserva sus coordenadas

El JavaScript define `dimensiones = [600, 320]` y asigna `viewBox="0 0 600 320"`. Los márgenes son izquierdo 70, derecho 30, superior 35 e inferior 55. La base queda en 320 − 55 = 265 y el área útil del gráfico mensual mide 500 × 230 unidades SVG.

```css
.marco-grafico svg {
  width: 100%;
  min-width: 0;
  height: auto;
}
```

width: 100% hace que el SVG ocupe la anchura de su recuadro. height: auto conserva la proporción. min-width: 0 sustituye el mínimo de 540 píxeles que utiliza la versión didáctica general. El viewBox conserva las coordenadas internas mientras el navegador cambia el tamaño visible. No hace falta recalcular datos al redimensionar la ventana.

En pantallas de hasta 550 píxeles, las letras del SVG pasan de 16 a 24 unidades para que no queden demasiado pequeñas al reducirse el dibujo.

## 4. Meses abreviados

El eje mensual utiliza:

```javascript
.tickFormat(function(mes) { return mes.slice(0, 3); })
```

Este fragmento se aplica a d3.axisBottom(x). slice es un método de los textos de JavaScript: slice(0, 3) devuelve los tres primeros caracteres. Así, Enero se muestra como Ene y Febrero como Feb. Se modifica la etiqueta visible, no el nombre del mes guardado en los datos.

## 5. Una hoja al imprimir

El botón «Imprimir / guardar PDF» ejecuta `window.print()`, una función del navegador que abre el diálogo de impresión. El usuario elige impresora o guardar como PDF. El filtro seleccionado se conserva y se identifica en el texto de contexto.

```css
@page { size: A4 landscape; margin: 10mm; }
```

Las reglas de `@media print` mantienen dos columnas y cuatro indicadores, ajustan márgenes y tipografía y ocultan navegación, controles y tabla de consulta. El panel conserva títulos, unidades, fuente y canal seleccionado.

Utiliza papel A4, orientación horizontal y escala predeterminada; desactiva los encabezados y pies del navegador si están activados. El tamaño de pantalla, el zoom y la configuración de impresión pueden afectar al espacio disponible. La tabla puede abrirse en pantalla; no forma parte de la hoja impresa de resumen.

## 6. Práctica de clase

1. Abre la página en una pantalla amplia: comprueba que ambos recuadros comparten fila.
2. Reduce la ventana por debajo de 960 píxeles: los gráficos pasan a una columna.
3. Cambia de Total a Tienda y Online. Indicadores, gráficos y tabla deben conservar el mismo canal.
4. Abre la tabla plegada y verifica las cifras.
5. Imprime o guarda como PDF. Comprueba que aparece el canal elegido y que el resumen ocupa una hoja horizontal.
6. Cambia el umbral de 959 a 1099 píxeles y observa en qué momento pasan a una columna. No cambian las ventas ni los objetivos.

Resultados iniciales: Total, 1000 ventas y objetivo 1040; Tienda, 630 y 660; Online, 370 y 380. Se mantienen los supuestos del caso original: seis meses, objetivos positivos, ventas iniciales positivas, escala mensual hasta 300 y cumplimiento hasta 150 %.

## Referencias

- [Documentación general de los ejemplos](../../DOCUMENTACION_EJEMPLOS.md).
- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout).
- [MDN: media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries).
- [MDN: impresión](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Printing).

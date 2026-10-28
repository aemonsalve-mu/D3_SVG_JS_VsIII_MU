# Actividad individual: reproduce un dashboard sencillo

## Objetivo

1. Reproduce el dashboard mostrado en clase, sustituyendo los datos de la librería por datos bursátiles de los últimos doce meses.

---
### (OPCIONAL)
1. Reproduce el dashboard responsive trabajado en clase, sustituyendo los datos de la librería por datos bursátiles (el csv) de los últimos doce meses.
---


El trabajo consiste en **cargar datos y representarlos**. Utiliza como referencia las explicaciones y el código de los ejemplos en el repositorio.

## Datos

Utiliza los datos diarios de AAPL del período comprendido entre el **25 de octubre de 2025 y el 24 de octubre de 2026**. Trabajarás con tres columnas:

| Columna | Contenido |
| --- | --- |
| Fecha | Día de cotización. |
| Cierre | Precio de cierre en USD. |
| Volumen | Número de acciones negociadas ese día. |

### Cargar los datos :
1. Indicaciones para cargar el CSV correspondiente. 

    [Podeís consultar en el repositorio](https://aemonsalve-mu.github.io/D3_SVG_JS_VsIII_MU/) en la sección al final de la web de inicio y posteriormente en [cargar datos con **d3**](https://aemonsalve-mu.github.io/D3_SVG_JS_VsIII_MU/carga-datos/index.html) en la sección *Archivos de ejemplo para descargar*. Puesto que el *csv* puede contener fechas, mirad los ejemplos que corresponden a tal caso, o consultar [ver lo indicado en la carpeta carga-datos, archivo *fechas.html* y *fechas.js*](https://aemonsalve-mu.github.io/D3_SVG_JS_VsIII_MU/carga-datos/fechas.html)

2. (Opcional- Valoración adicional) Desde la dirección de consulta de la fuente.

    - [Nasdaq Oficial (AAPL Historical)](https://www.nasdaq.com/market-activity/
    stocks/aapl/historical?page=1&rows_per_page=10&timeline=y10)
    - [Yahoo Finanzas (AAPL)] (https://es-us.finanzas.yahoo.com/quote/AAPL/) 


**NOTA:** Si se incluyen las dos formas de descarga debes incluir dos botones:

- **Cargar desde la fuente:** consulta la dirección facilitada.
- **Cargar CSV descargado:** lee mediante d3.csv el archivo que previamente has guardado en la carpeta datos/ de tu trabajo.

Los dos botones deben alimentar el mismo dashboard. Comprueba que muestran el mismo número de registros y las mismas fechas inicial y final. Convierte los precios y volúmenes a números y ordena las fechas de la más antigua a la más reciente.

### 2. Reproducir el panel

Mantén el estilo del ejemplo e incluye:

- **Cuatro indicadores:** primer cierre, último cierre, cierre mínimo y cierre máximo del período. Todos expresados en USD.
- **Gráfico 1:** una línea con la evolución diaria del precio de cierre.
- **Gráfico 2:** una línea con la evolución diaria del volumen negociado.
- **Una tabla plegable:** fecha, cierre y volumen.

Los gráficos deben tener título, ejes y unidades. Colócalos en dos recuadros en la misma fila en escritorio y en una columna en móvil, como en la versión responsive.

Muestra también el nombre del activo, el período, la fuente y el modo de carga activo. Al pulsar cualquiera de los dos botones, deben actualizarse indicadores, gráficos y tabla.

### 3. Explicar lo que se ve

Escribe **tres frases breves** junto al panel:

1. Cómo evolucionó el precio entre el comienzo y el final del período.
2. Qué observas en el volumen negociado.
3. Qué dato o momento destacarías al presentar el dashboard.

Las frases deben corresponder a los datos mostrados. No necesitas investigar las causas de los movimientos.

## Entrega

Entrega una carpeta con:

- index.html.
- El archivo JavaScript dentro de js/.
- Los estilos propios, si considera que puede modificarlos.
- El CSV descargado o el entregado dentro de datos/.
- Un LEEME.md breve que indique cómo abrir el trabajo y de dónde proceden los datos.

Puedes reutilizar el HTML y los estilos del ejemplo de clase, cualquier elemento o cambio adicional será considerado como un plus en la calificación.



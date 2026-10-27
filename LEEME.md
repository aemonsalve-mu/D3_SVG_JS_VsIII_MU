# D3 y SVG: material de clase por conceptos

Colección para estudiantes que comienzan con JavaScript y D3. Cada ficha explica un concepto mediante un HTML sencillo, su código y un resultado que se puede observar y modificar. Se mantiene la misma presentación en las distintas familias del temario.

## 1. Por dónde empezar

Abre [index.html](./index.html). Es el índice de las **147 fichas de D3 y SVG** y permite buscar un concepto por su nombre.

También puedes abrir desde la carpeta principal:

| Archivo | Para qué sirve |
| --- | --- |
| [svg-basico.html](./svg-basico.html) | Primer dibujo SVG: un círculo escrito directamente en HTML, sin JavaScript. |
| [vectores-y-dimensiones.html](./vectores-y-dimensiones.html) | Acceso a la lección sobre arrays de datos y medidas. Abre la ficha situada en `d3/escalas/`. |
| [infografias.html](./infografias.html) | Cuatro referencias visuales sobre coordenadas, escalas y dimensiones. |
| [carga-datos.html](./carga-datos.html) | Presentación y acceso al recorrido de carga de datos. |
| [carga-datos/index.html](./carga-datos/index.html) | Índice detallado de las 28 fichas de lectura y conversión de datos. |
| [escalas-longitud.png](./escalas-longitud.png) | Imagen de referencia accesible directamente desde esta carpeta. |

Conserva la carpeta completa y su organización: los HTML usan rutas relativas para encontrar los estilos, los scripts, las imágenes y los archivos de datos.

## 2. Cómo abrir los ejemplos

### Apertura directa

Las fichas de selecciones, escalas, ejes y SVG, así como las infografías, se pueden abrir con doble clic en su HTML. D3 está incluido en `vendor/d3.min.js`; estos ejemplos no necesitan descargarlo de Internet.

### Lectura de archivos mediante un servidor local

Los ejemplos iniciales de carga de datos solicitan archivos externos mediante una URL. Para ejecutarlos, abre el proyecto mediante HTTP. El navegador puede bloquear esas lecturas si abres la ficha como `file://`.

Si tienes Python instalado:

1. Abre una terminal en la carpeta `D3_SVG_por_archivos`.
2. Ejecuta:

   ```powershell
   python -m http.server 8000 --bind 127.0.0.1
   ```

3. Abre <http://127.0.0.1:8000/index.html> en el navegador.
4. Mantén la terminal abierta mientras trabajas. Pulsa `Ctrl+C` para detener el servidor.

Si Windows reconoce Python mediante `py`, utiliza `py -m http.server 8000 --bind 127.0.0.1`. Otra opción es usar un servidor local de tu editor, por ejemplo Live Server en Visual Studio Code.

No se necesita instalar paquetes de npm, compilar ni configurar un framework.

### Particularidad de Excel y ODS

D3 lee los bytes del archivo; **SheetJS** interpreta el libro y convierte una hoja en filas. El código busca primero `vendor/xlsx.full.min.js`. Ese archivo no viene incluido: si falta, intenta cargar SheetJS 0.20.3 desde su CDN y necesita Internet.

Para trabajar con esos formatos sin conexión, guarda una copia compatible de `xlsx.full.min.js` en `vendor/` y abre las fichas mediante el servidor local. CSV, TSV y JSON no necesitan SheetJS.

## 3. Recorrido recomendado para principiantes

1. **HTML, DOM y primer SVG.** Reconoce las etiquetas, los atributos y las relaciones entre elementos. Comienza con [svg-basico.html](./svg-basico.html).
2. **Selecciones.** Compara [d3.select](./d3/selecciones/d3.select.html), [d3.selectAll](./d3/selecciones/d3.selectAll.html), [selection.select](./d3/selecciones/selection.select.html) y [selection.selectAll](./d3/selecciones/selection.selectAll.html). Observa dónde empieza cada búsqueda en el DOM y cómo se transmite o se asigna el dato.
3. **Datos y medidas.** Trabaja con [Vectores y dimensiones](./d3/escalas/vectores-y-dimensiones.html). Distingue un array de datos, una pareja `[ancho, alto]` y varias parejas de medidas.
4. **Escalas.** Estudia [scaleLinear](./d3/escalas/d3.scaleLinear.html), [domain](./d3/escalas/scale.domain.html) y [range](./d3/escalas/scale.range.html). Relaciona los valores de entrada con las longitudes o posiciones de salida.
5. **Ejes.** Continúa con [axisBottom](./d3/ejes/d3.axisBottom.html) y [axisLeft](./d3/ejes/d3.axisLeft.html). Separa la escala, la orientación de las marcas y la posición del grupo que contiene el eje.
6. **Archivos externos.** Lee primero CSV, TSV y JSON; continúa con XLSX, XLS y ODS. Después explora los otros formatos.
7. **Ampliaciones.** Avanza a métodos de escala y eje, mediciones SVG, formas y transiciones según las necesidades de la clase.

Antes de utilizar los métodos nativos del navegador, lee [document.querySelector](./svg/metodos/Document.querySelector.html). Esa ficha define `document`, las consultas al DOM, los nodos y `textContent`, y los compara con las selecciones de D3.

## 4. Organización del directorio

| Carpeta | Contenido |
| --- | --- |
| `d3/selecciones/` | 36 fichas sobre selecciones, DOM, datos y eventos. |
| `d3/escalas/` | 41 fichas sobre escalas y sus métodos, incluida la guía de vectores y dimensiones. |
| `d3/ejes/` | 14 fichas sobre orientación, escala, valores, formato y marcas de los ejes. |
| `d3/transiciones-y-formas/` | 11 fichas sobre formas y transiciones. |
| `svg/elementos/` | 20 fichas sobre etiquetas SVG. |
| `svg/atributos/` | 11 fichas sobre atributos SVG. |
| `svg/metodos/` | 14 fichas sobre DOM y métodos nativos SVG. |
| `carga-datos/` | 28 fichas, su índice, scripts y laboratorio opcional. |
| `carga-datos/datos/` | 21 archivos de muestra para leer y modificar. |
| `assets/` | Hoja de estilo común e imágenes de referencia. |
| `vendor/` | D3 7.9.0 y su licencia. |

### Una ficha y su archivo JavaScript

Cada familia del temario tiene una subcarpeta `js/`. Por ejemplo:

- `d3/escalas/scale.domain.html`: explicación, código visible y resultado.
- `d3/escalas/js/scaledomain.js`: instrucciones que ejecuta ese ejemplo.

En las fichas D3, el HTML carga primero la biblioteca local y después el script de la lección. En SVG, el dibujo inicial está escrito en el HTML. Algunos elementos se explican únicamente mediante su marcado: su archivo `.js` contiene un comentario porque no hace falta ejecutar JavaScript para dibujarlos.

`carga-datos/js/` contiene los ejemplos de lectura. `carga.js` y `catalogo.js` sostienen el laboratorio opcional; son archivos necesarios para sus controles y resultados, aunque no forman parte del código inicial que debe estudiar el alumno.

## 5. Cómo trabajar cada ficha

1. Lee la definición y comprueba qué significa cada argumento.
2. Examina el HTML inicial y el `.js` asociado.
3. Predice el resultado antes de abrir o recargar la página.
4. Cambia una sola medida, un dato o un argumento y compara.
5. Resuelve la práctica y consulta la referencia oficial cuando necesites ampliar.

Al modificar un ejemplo, conserva la correspondencia entre el código mostrado en el HTML y el archivo `.js` que se ejecuta. En los ejemplos puramente declarativos de SVG, modifica el marcado HTML.

### Tres distinciones fundamentales

- **Datos y dimensiones:** `[20, 50, 100]` puede ser un conjunto de datos; `[600, 240]` puede expresar ancho y alto. El significado lo establece el ejemplo y el uso de cada posición del array.
- **Posición y longitud:** en una barra vertical, `y` sitúa el borde superior y `height` expresa su altura. Con una base común, la altura se calcula como `base - y`.
- **Cálculo y dibujo:** D3 calcula valores y modifica elementos; SVG interpreta las coordenadas y dimensiones. Las unidades del `viewBox` no tienen por qué coincidir con los píxeles que ocupa el dibujo en pantalla.

## 6. Carga de datos y archivos de muestra

El recorrido cubre CSV y variantes, TSV, JSON, NDJSON, TXT, XML, tablas HTML, XLS, XLSX, ODS, GeoJSON, binario, SVG y GZIP. También incluye `fetch`, API, `Promise.all`, `autoType`, fechas y validación.

Los ejemplos iniciales leen archivos reales desde `carga-datos/datos/`. Modifica una muestra, guarda y recarga la ficha mediante HTTP para comprobar el efecto. La ficha `inline` sirve como comparación: trabaja con texto incrustado y no lee un archivo externo.

Las herramientas más amplias —selección de archivos, conversión editable, tabla y gráfico— se conservan dentro del laboratorio opcional. Se pueden explorar después de comprender el lector básico.

Los datos son sintéticos. El XLS de muestra es un archivo binario BIFF2; XLSX y ODS contienen la hoja `Ventas`. Los libros se leen con sus valores guardados: este material no recalcula fórmulas de una hoja de cálculo.

## 7. Imágenes e infografías

Abre [infografias.html](./infografias.html) para ver las cuatro imágenes. Los originales y sus versiones PNG están en `assets/diagramas/`:

| Nombre del archivo, sin extensión | Tema |
| --- | --- |
| `coordenadas-svg` | Origen, coordenadas, posición y dimensiones. |
| `escala-y-longitud` | Conversión de un vector de datos en longitudes mediante una escala. |
| `vectores-y-dimensiones` | Significado de cada componente de los arrays de medidas. |
| `barras-verticales` | Relación entre escala vertical, base, posición y altura. |

Cada imagen está disponible en `.svg` y `.png`. El SVG se puede ampliar sin perder nitidez. `escalas-longitud.png`, en la carpeta principal, es una copia de acceso rápido de `assets/diagramas/escala-y-longitud.png`.

## 8. Alcance y mantenimiento

La colección desarrolla un temario inicial y sus ampliaciones; no es una referencia exhaustiva de todas las APIs de D3 y SVG. Los laboratorios y los métodos avanzados pueden reservarse para una segunda etapa.

Para añadir una ficha, utiliza una de su misma familia como modelo: conserva el estilo, define los conceptos antes de usarlos, incluye un ejemplo corto y comprueba su resultado. Añade el enlace al índice y mantén sincronizados el HTML y su JavaScript. Conserva la licencia incluida en `vendor/LICENSE`.

## 9. Aplicación en clase: gráficos, storytelling y dashboards

Abre [ejemplos-clase/index.html](./ejemplos-clase/index.html). El recorrido usa los mismos datos sintéticos de una librería para desarrollar tres productos:

1. **01-grafico-independiente:** barras con ejes, etiquetas y tabla; 35 minutos.
2. **02-storytelling:** tres gráficos que relacionan evolución, canales y aportación al cambio; 45 minutos.
3. **03-dashboard:** cuatro indicadores, dos gráficos y una tabla con filtro por canal; 55 minutos.

Cada carpeta incluye su HTML, un archivo JavaScript comentado en js/ y GUIA_CLASE.md con tiempos, preguntas, prácticas y evaluación. Los datos compartidos están en ejemplos-clase/datos/. Los casos cargan ventas.js y funcionan al abrirlos directamente, sin conexión; ventas.csv queda como alternativa para practicar los lectores de archivos. Consulta [la guía del recorrido](./ejemplos-clase/LEEME.md) para ver supuestos y límites.

La [documentación completa de los ejemplos](./DOCUMENTACION_EJEMPLOS.md) desarrolla los conceptos, las dimensiones, los cálculos, la construcción de cada caso y las prácticas con resultados esperados.

Versión adicional: [dashboard responsive con dos gráficos por fila](./ejemplos-clase/04-dashboard-responsive/dashboard-responsive.html). Conserva filtros y cálculos; adapta la distribución a móvil y prepara el panel para una hoja A4 horizontal.

## Actividad individual de integración

El [enunciado del dashboard sencillo](./actividad-individual-dashboard/ENUNCIADO.md) propone reproducir el panel responsive con datos diarios de AAPL. Los estudiantes cargan la misma serie desde la fuente y desde un CSV descargado y presentan cuatro indicadores, dos gráficos y una tabla. La entrega incluye tres frases de interpretación y una evaluación de 10 puntos.

La [guía docente](./actividad-individual-dashboard/GUIA_DOCENTE.md) explica cómo preparar el acceso a los datos y comprobar el trabajo.

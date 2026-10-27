# Ejemplos de clase: gráfico, storytelling y dashboard

Abre [index.html](./index.html). La explicación completa está en [DOCUMENTACION_EJEMPLOS.md](../DOCUMENTACION_EJEMPLOS.md), en la carpeta principal. Tres carpetas independientes desarrollan una progresión de 135 minutos, después de estudiar las fichas básicas de selección, datos, escalas, SVG y ejes.

| Carpeta | Producto | Tiempo orientativo |
| --- | --- | ---: |
| [01-grafico-independiente](./01-grafico-independiente/index.html) | Barras mensuales con ejes, etiquetas y tabla. | 35 min |
| [02-storytelling](./02-storytelling/index.html) | Tres gráficos independientes relacionados por una narración. | 45 min |
| [03-dashboard](./03-dashboard/index.html) | Cuatro indicadores, dos gráficos y una tabla que responden a un filtro por canal. | 55 min |

Cada carpeta contiene index.html, su archivo en js/ y GUIA_CLASE.md. La guía ofrece secuencia de clase, comprobaciones numéricas, prácticas y criterios de evaluación. Las páginas muestran el resultado, explican los conceptos antes de utilizarlos y reproducen el código ejecutado. En storytelling y dashboard, los bloques largos de código están plegados para presentar primero la visualización.

## Ejecución

Abre los HTML directamente desde la carpeta completa. Se cargan D3 desde ../vendor/d3.min.js y los datos desde datos/ventas.js mediante etiquetas script. Estos ejemplos no hacen peticiones fetch ni necesitan servidor, Internet o instalación de paquetes.

El orden de scripts en cada caso es: biblioteca D3, datos compartidos, código del ejemplo. No copies únicamente el HTML: sus rutas necesitan el resto del proyecto.

## Datos

Los casos representan una librería universitaria ficticia durante enero-junio. La unidad es ejemplares vendidos. Son seis registros con tienda, online y objetivos de cada canal. Consulta [datos/LEEME.md](./datos/LEEME.md).

El archivo que se ejecuta es [datos/ventas.js](./datos/ventas.js). El [CSV](./datos/ventas.csv) permite practicar los lectores del temario; no se carga automáticamente. Si cambias el JavaScript, actualiza el CSV para mantener la correspondencia. La página de presentación muestra una copia explicativa del archivo inicial; el resultado de cada caso sí usa ventas.js al recargar.

## Reglas que se enseñan

- Un gráfico independiente debe declarar pregunta, unidad, período y fuente, y poder leerse sin explicación oral.
- Los márgenes y el vector [ancho,alto] definen el espacio útil. Una escala transforma datos en posiciones o longitudes.
- Una narración ordena evidencia y distingue lo observado de lo que se propone investigar. Una descomposición aritmética no establece una causa.
- Un dashboard conserva el mismo filtro en indicadores, gráficos y tabla. Mantener dominios fijos facilita comparar canales.
- El cumplimiento global se calcula como suma de ventas / suma de objetivos; no como promedio simple de porcentajes mensuales.

## Alcance de la primera versión

Se mantienen seis meses con marcas escritas en HTML, ventas iniciales positivas y objetivos positivos. Las escalas mensuales llegan a 300, el gráfico de aportaciones a 160 y el de cumplimiento al 150 %. Modifica los dominios si cambias esos límites. Añadir meses requiere adaptar nodos y el array meses o estudiar join. Disminuciones y denominadores cero requieren reglas adicionales antes de reutilizar el storytelling con otros datos.

Los datos no permiten inferir beneficios, retorno de campañas ni necesidades de contratación. Las propuestas deben indicar qué información adicional hace falta.

Versión adicional: [dashboard responsive con dos gráficos por fila](./04-dashboard-responsive/dashboard-responsive.html). Conserva filtros y cálculos; adapta la distribución a móvil y prepara el panel para una hoja A4 horizontal.

Actividad individual de integración: [dashboard sencillo con dos vías de carga](../actividad-individual-dashboard/ENUNCIADO.md). Guía y rúbrica incluidas.

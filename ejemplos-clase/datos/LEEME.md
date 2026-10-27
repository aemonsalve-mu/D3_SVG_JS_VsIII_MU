# Datos compartidos por los tres casos

Son datos sintéticos de una librería universitaria durante seis meses. La unidad es **ejemplares vendidos**, no euros. `tienda` y `online` son canales distintos; sus ventas se suman. Cada objetivo corresponde a su canal y mes.

`ventas.js` es el archivo que ejecutan los ejemplos. Define `datos`, un array de seis objetos, y `meses`, el orden del eje. Se carga después de D3 y antes del script de cada caso. No usa una petición HTTP: los tres casos funcionan al abrir sus HTML directamente.

`ventas.csv` contiene los mismos datos de partida para practicar la lectura de archivos con las fichas de carga de datos. Los ejemplos no lo leen automáticamente. Si editas ventas.js, edita también el CSV si quieres conservar la equivalencia. No cargues ambos a la vez: el CSV es una alternativa de práctica.

| Comprobación | Resultado inicial |
| --- | ---: |
| Tienda: total de seis meses | 630 |
| Online: total de seis meses | 370 |
| Total del período | 1000 |
| Objetivo del período | 1040 |
| Enero: ventas totales | 100 |
| Junio: ventas totales | 260 |
| Cambio enero-junio | +160 unidades; +160 % |
| Participación online en enero / junio | 20 % / 50 % |
| Aportación online al aumento neto | 110 de 160 unidades: 68,75 % |

Las escalas de ventas mensuales llegan hasta 300. El dashboard usa hasta el 150 % para el cumplimiento. Si incorporas valores fuera de esos intervalos, amplía los dominios. En estos ejemplos, los objetivos y las ventas del primer mes son positivos; no se cubren cocientes con denominador cero. Conserva seis registros y el mismo orden mientras estudias la primera versión: los gráficos tienen seis marcas escritas en HTML. Añadir un séptimo dato exige añadir marcas y actualizar `meses`, o estudiar `join`.

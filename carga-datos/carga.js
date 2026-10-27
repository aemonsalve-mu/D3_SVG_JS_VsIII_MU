'use strict';
let sheetLoader;
async function cargarSheetJS(){
 if(window.XLSX)return window.XLSX;
 if(sheetLoader)return sheetLoader;
 const script=url=>new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=url;s.onload=resolve;s.onerror=()=>{s.remove();reject(new Error('No se pudo cargar '+url));};document.head.appendChild(s);});
 sheetLoader=(async()=>{try{await script('../vendor/xlsx.full.min.js');}catch{await script('https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js');}if(!window.XLSX)throw new Error('SheetJS no está disponible');return window.XLSX;})();
 try{return await sheetLoader;}catch{sheetLoader=null;throw new Error('Excel requiere SheetJS. Conecta Internet o guarda xlsx.full.min.js en vendor.');}
}
function iniciarCarga(id){
 const p=CARGAS.find(x=>x.id===id);const $=s=>document.querySelector(s);let buffer=null;let origen='';let token=0;
 const estado=msg=>$('#estado').textContent=msg;
 const sample=()=>Uint8Array.from(atob(p.sample),c=>c.charCodeAt(0)).buffer;
 const explicar=document.createElement('p');explicar.className='muted';explicar.textContent='El fragmento anterior muestra la función específica del formato. El botón lee bytes con d3.buffer(url) y aplica la conversión editable de arriba. En la ficha Promise.all ejecuta las dos cargas.';$('#cargar-url').after(explicar);
 function limpiar(){document.querySelector('#tabla').replaceChildren();d3.select('#grafico').selectAll('*').remove();$('#resumen').textContent='';$('#objetos').textContent='';}
 function mostrar(filas){
  if(!Array.isArray(filas))throw new Error('La conversión debe devolver un array.');
  if(filas.some(d=>d===null||typeof d!=='object'||Array.isArray(d)))throw new Error('Cada fila debe ser un objeto con columnas.');
  const columnas=[...new Set(filas.flatMap(Object.keys))];const visibles=filas.slice(0,200);
  const tabla=d3.select('#tabla').append('table');tabla.append('caption').text('Datos cargados · máximo 200 filas en esta vista');
  tabla.append('thead').append('tr').selectAll('th').data(columnas).join('th').attr('scope','col').text(d=>d);
  tabla.append('tbody').selectAll('tr').data(visibles).join('tr').selectAll('td').data(d=>columnas.map(k=>d[k])).join('td').text(d=>d===null||d===undefined?'Sin dato':typeof d==='object'?JSON.stringify(d):String(d));
  const validas=filas.filter(d=>typeof d.ventas==='number'&&Number.isFinite(d.ventas));
  const total=d3.sum(validas,d=>d.ventas);
  $('#resumen').textContent=`${filas.length} ${filas.length===1?'fila cargada':'filas cargadas'}.`+(validas.length?` ${validas.length} ${validas.length===1?'venta numérica':'ventas numéricas'}; total ${total.toLocaleString('es-ES')} k€.`:' No hay una columna ventas numérica; se muestra la tabla.');
  $('#objetos').textContent=JSON.stringify({primerasFilas:visibles,tiposPrimeraFila:filas[0]?Object.fromEntries(Object.entries(filas[0]).map(([k,v])=>[k,v===null?'null':v instanceof Date?'Date':typeof v])):{}},null,2);
  const svg=d3.select('#grafico');if(!validas.length){svg.attr('hidden',true);return;}svg.attr('hidden',null);
  const datos=validas.slice(0,30).map((d,i)=>({...d,etiqueta:String(d.zona??d.id??i+1)+' ('+(i+1)+')'}));
  const x=d3.scaleBand().domain(datos.map(d=>d.etiqueta)).range([60,625]).padding(.25);
  const min=Math.min(0,d3.min(datos,d=>d.ventas)),max=Math.max(0,d3.max(datos,d=>d.ventas));
  const y=d3.scaleLinear().domain(min===max?[0,1]:[min,max]).nice().range([195,25]);
  svg.append('title').text('Ventas cargadas por zona, en miles de euros');
  svg.append('g').attr('transform','translate(0,195)').call(d3.axisBottom(x));svg.append('g').attr('transform','translate(60,0)').call(d3.axisLeft(y).ticks(5));
  svg.selectAll('rect').data(datos).join('rect').attr('x',d=>x(d.etiqueta)).attr('width',x.bandwidth()).attr('y',d=>Math.min(y(0),y(d.ventas))).attr('height',d=>Math.abs(y(0)-y(d.ventas))).attr('fill','#00766d').append('title').text(d=>d.etiqueta+': '+d.ventas+' k€');
  svg.append('text').attr('x',60).attr('y',16).text('Ventas · k€ (máximo 30 marcas)');
 }
 async function convertir(actual=++token){
  if(!buffer){estado('Selecciona un archivo o pulsa Cargar ejemplo incluido.');return;}
  limpiar();estado(p.excel?'Cargando lector Excel y convirtiendo…':'Convirtiendo datos…');
  try{
   const XLSX=p.excel?await cargarSheetJS():undefined;
   const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
   const f=new AsyncFunction('buffer','d3','XLSX','hoja','DOMParser','TextDecoder', $('#convertir').value);
   const filas=await f(buffer,d3,XLSX,$('#hoja')?.value.trim(),DOMParser,TextDecoder);
   if(actual!==token)return;
   mostrar(filas);estado('Carga completada. Revisa la tabla, los tipos y el gráfico.');$('#origen').textContent=origen;
  }catch(e){if(actual!==token)return;limpiar();estado('Error: '+e.message);}
 }
 async function abrirArchivo(file){if(!file)return;const actual=++token;estado('Leyendo '+file.name+'…');try{const b=await file.arrayBuffer();if(actual!==token)return;buffer=b;origen='Archivo seleccionado: '+file.name+' ('+file.size+' bytes)';await convertir(actual);}catch(e){estado('No se pudo leer el archivo: '+e.message);}}
 $('#archivo').onchange=()=>abrirArchivo($('#archivo').files[0]);
 $('#ejemplo').onclick=()=>{buffer=sample();origen='Ejemplo incrustado de '+p.file+'; sin petición de red.';convertir();};
 $('#ejecutar').onclick=()=>convertir();$('#restablecer').onclick=()=>{$('#convertir').value=p.code;if(buffer)convertir();};
 $('#codigo').onclick=()=>{const u=URL.createObjectURL(new Blob(['// Recibe ArrayBuffer y devuelve filas.\nasync function convertir(buffer,d3,XLSX,hoja){\n'+$('#convertir').value+'\n}\n'],{type:'text/javascript;charset=utf-8'}));const a=document.createElement('a');a.href=u;a.download=p.id+'.js';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);};
 $('#cargar-url').onclick=async()=>{
  const actual=++token;limpiar();const url=$('#url').value.trim();if(!url){estado('Indica una URL.');return;}
  if(location.protocol==='file:'){estado('Para leer por URL abre esta carpeta con un servidor HTTP local. El selector y el ejemplo incluido sí funcionan con file://.');return;}
  estado('Cargando URL…');try{
   let bytes;
   if(p.id==='promise-all'){
    const [a,b]=await Promise.all([d3.json('datos/ventas.json'),d3.csv('datos/ventas.csv')]);
    const mapa=new Map(b.map(d=>[d.id,d]));const filas=a.map(d=>{if(!mapa.has(d.id))throw new Error('Falta el id '+d.id);return {...d,objetivo:Number(mapa.get(d.id).objetivo)};});
    bytes=new TextEncoder().encode(JSON.stringify(filas)).buffer;
   }else if(p.id==='fetch'){const r=await fetch(url);if(!r.ok)throw new Error('HTTP '+r.status);bytes=await r.arrayBuffer();}
   else bytes=await d3.buffer(url);
   if(actual!==token)return;buffer=bytes;origen=p.id==='promise-all'?'URL real: ventas.json y ventas.csv con Promise.all':'URL real: '+url;await convertir(actual);
  }catch(e){if(actual!==token)return;estado('Error de URL: '+e.message+'. Revisa la ruta, el servidor y los permisos CORS.');}
 };
 const drop=$('#drop');drop.ondragover=e=>{e.preventDefault();drop.classList.add('over');};drop.ondragleave=()=>drop.classList.remove('over');drop.ondrop=e=>{e.preventDefault();drop.classList.remove('over');abrirArchivo(e.dataTransfer.files[0]);};
 estado('Selecciona un archivo o carga el ejemplo incluido.');
}

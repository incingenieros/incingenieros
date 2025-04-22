// Script para corregir atributos SVG en archivos React
const fs = require('fs');
const path = require('path');

// Directorio a escanear (raíz del proyecto)
const directoryPath = __dirname;

// Atributos a reemplazar
const attributesToReplace = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'class=': 'className='
};

// Función para leer y procesar archivos recursivamente
function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else if (stats.isFile() && (filePath.endsWith('.tsx') || filePath.endsWith('.jsx'))) {
      processFile(filePath);
    }
  }
}

// Función para procesar un archivo
function processFile(filePath) {
  console.log(`Procesando: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Reemplazar atributos
  for (const [oldAttr, newAttr] of Object.entries(attributesToReplace)) {
    const regex = new RegExp(oldAttr, 'g');
    if (regex.test(content)) {
      content = content.replace(regex, newAttr);
      hasChanges = true;
    }
  }
  
  // Guardar cambios si se hicieron modificaciones
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Corregido: ${filePath}`);
  }
}

// Iniciar el procesamiento
console.log('Iniciando corrección de atributos SVG...');
processDirectory(directoryPath);
console.log('Proceso completado.');

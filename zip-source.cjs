const fs = require('fs');
const path = require('path');

let AdmZip;
try {
  AdmZip = require('adm-zip');
} catch (e) {
  console.log('Erro: adm-zip não está instalado.');
  process.exit(1);
}

const zipPath = path.join(__dirname, 'Consulta-Ansiedade-Dr-Reginaldo-main.zip');
console.log('Iniciando empacotamento do código-fonte completo...');

try {
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  const zip = new AdmZip();

  // Add directories
  const dirs = ['src', 'public', 'CL4R1T4S-main'];
  dirs.forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath)) {
      zip.addLocalFolder(dirPath, dir);
      console.log(`- Adicionada pasta: ${dir}`);
    }
  });

  // Individual root files
  const files = [
    'package.json',
    'package-lock.json',
    'vite.config.ts',
    'tsconfig.json',
    'index.html',
    'server.ts',
    'metadata.json',
    'firebase.json',
    'firestore.rules',
    'firebase-blueprint.json',
    'firebase-applet-config.json',
    'google37375635affddf3f.html',
    'payment_images_info.md',
    'Dockerfile',
    '.firebaserc',
    '.env.example',
    '.nvmrc',
    '.node-version',
    '.gitignore',
    'zip-dist.cjs'
  ];

  files.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      zip.addLocalFile(filePath);
      console.log(`- Adicionado arquivo: ${file}`);
    }
  });

  zip.writeZip(zipPath);
  console.log('\nSucesso! Arquivo "Consulta-Ansiedade-Dr-Reginaldo-main.zip" criado!');
  console.log('Tamanho exato: ' + (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2) + ' MB (' + fs.statSync(zipPath).size + ' bytes)');
} catch (error) {
  console.error('Erro ao gerar o ZIP de código-fonte:', error);
  process.exit(1);
}

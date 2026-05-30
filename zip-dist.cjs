const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

const zipPath = path.join(__dirname, 'dist-cloudflare.zip');
console.log('Iniciando empacotamento da pasta /dist...');

try {
  // Remove file if exists
  if (fs.existsSync(zipPath)) {
    fs.unlinkSync(zipPath);
  }

  const zip = new AdmZip();
  
  // Ensure dist exists before zipping
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    console.error('Erro: A pasta /dist não existe! Execute "npm run build" primeiro.');
    process.exit(1);
  }

  zip.addLocalFolder(distDir);
  zip.writeZip(zipPath);
  
  console.log('Sucesso! Arquivo "dist-cloudflare.zip" criado com sucesso no diretório raiz do projeto!');
  console.log('Tamanho aproximado: ' + (fs.statSync(zipPath).size / (1024 * 1024)).toFixed(2) + ' MB');
} catch (error) {
  console.error('Erro ao gerar o ZIP:', error);
  process.exit(1);
}

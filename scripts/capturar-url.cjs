const childProcess = require('node:child_process');
const fs = require('node:fs');

const destino = process.env.SHOPIFY_URL_CAPTURADA;
const spawnOriginal = childProcess.spawn;

childProcess.spawn = function spawn(command, args, options) {
  if (destino && /powershell/i.test(String(command)) && Array.isArray(args)) {
    const indice = args.indexOf('-EncodedCommand');
    if (indice >= 0 && args[indice + 1]) {
      const script = Buffer.from(args[indice + 1], 'base64').toString('utf16le');
      const url = script.match(/https?:\/\/[^"`\s]+/)?.[0];
      if (url) {
        fs.writeFileSync(destino, url, 'utf8');
        args = [...args];
        args[indice + 1] = Buffer.from('exit', 'utf16le').toString('base64');
      }
    }
  }
  return spawnOriginal.call(this, command, args, options);
};

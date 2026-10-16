const childProcess = require('node:child_process');
const fs = require('node:fs');

const target = process.env.SHOPIFY_CAPTURED_URL;
const originalSpawn = childProcess.spawn;

childProcess.spawn = function spawn(command, args, options) {
  if (target && /powershell/i.test(String(command)) && Array.isArray(args)) {
    const index = args.indexOf('-EncodedCommand');
    if (index >= 0 && args[index + 1]) {
      const script = Buffer.from(args[index + 1], 'base64').toString('utf16le');
      const url = script.match(/https?:\/\/[^"`\s]+/)?.[0];
      if (url) {
        fs.writeFileSync(target, url, 'utf8');
        args = [...args];
        args[index + 1] = Buffer.from('exit', 'utf16le').toString('base64');
      }
    }
  }
  return originalSpawn.call(this, command, args, options);
};

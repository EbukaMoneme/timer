const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const simpleTimer1 = function() {
  process.stdin.on('keypress', (str, key) => {
    if ( key.name === 'b') {
      process.stdout.write("\u0007");
    }
    if (!Number.isNaN(key.name) && Number(key.name) >= 1 && Number(key.name) <= 9) {
      console.log(`setting timer for ${key.name} seconds.`);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(key.name) * 1000)
    }
    if (key.sequence === '\u0003') {
      console.log('Thanks for using me, ciao!')
      process.exit();
    }
  });
}

simpleTimer1();
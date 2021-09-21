let args = process.argv.slice(2);
args.sort((a, b) => a - b)
args = args.map(x => Number(x))

const simpleTimer = function(args) {
  if (!args) {
    return
  }
  for (let time of args) {
    if (time >= 0 && !Number.isNaN(time)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(time) * 1000)
    }
  }
}

simpleTimer(args);
const download = require('download');
const ProgressBar = require('progress');

var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
  complete: '=',
  incomplete: ' ',
  width: 20,
  total: 1024 * 5,
});
let lastTimeTransferred = 0;

console.time('download');
download('https://fake-file-server.harryyu.me/download?size=5&speed=1', 'temp/')
  .on('downloadProgress', (progress) => {
    const { transferred } = progress;
    bar.tick(transferred - lastTimeTransferred);
    lastTimeTransferred = transferred;
  })
  .then(() => {
    console.log(`download finished!`);
    console.timeEnd('download');
  });

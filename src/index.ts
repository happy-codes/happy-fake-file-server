import express from 'express';
import Throttle from 'throttle';
import { Readable } from 'stream';
const app = express();
const port = process.env.PORT || 3000;

// 1k file
const f1m = new Buffer(1024 * 1);

app.get('/download', (req, res) => {
  let { size = 5, speed = 1, filename } = req.query;
  size = parseInt(size, 10);
  speed = parseInt(speed, 10);
  filename = filename || `size_${size}kb_speed_${speed}kps_${Date.now()}`;

  if (!Number.isInteger(size) || !Number.isInteger(speed)) {
    res.send('Parameter size or speed must be an integer!');
  }

  const readStream = new Readable();
  for (let index = 0; index < size; index++) {
    readStream.push(f1m);
  }
  readStream.push(null);

  res.setHeader('Content-Length', 1024 * size);
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

  // 1k per second
  readStream.pipe(new Throttle(1024 * speed)).pipe(res);
});

app.listen(port, () => console.log(`APP listening on port ${port}!`));

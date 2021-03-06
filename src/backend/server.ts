import express from 'express';
import os from 'os';

const PORT = process.env.PORT;

const app = express();

app.use(express.static('src/backend'));

app.get('/service1', (req, res) => {
  res.send('Service 1');
});

app.get('/service2', (req, res) => {
  res.json({
    message: 'Message from a service',
    number: 42,
    platform: `${os.platform()}`,
    arch: `${os.arch()}`,
    release: `${os.release()}`,
  });
});

/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'src/frontend' });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

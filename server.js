import app from './app';

const port = 3333;

app.listen(port, () => {
  console.log(`Rodando backend em http://localhost:${port}`);
});

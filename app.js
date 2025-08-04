const express = require('express');
const app = express();

app.get('/operaciones', (req, res) => {
  const { operacion, a, b } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  let resultado;
  if (operacion === 'suma') {
    resultado = numA + numB;
  } else {
    return res.status(400).send('Operación no soportada');
  }

  res.json({ resultado });



});

const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
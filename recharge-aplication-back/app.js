const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const recargaRoutes = require('./routes/recarga.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/recargas', recargaRoutes);

const loginRoutes = require('./routes/login.routes');
app.use('/api/login', loginRoutes);


app.listen(3000, () => {
  console.log('API corriendo en http://localhost:3000');
});

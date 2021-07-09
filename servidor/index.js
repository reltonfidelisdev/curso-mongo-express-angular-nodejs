const express = require('express');
const conectarDB = require('./config/db');
cors = require('cors');
//Create the server
const app = express();

//Conectando ao Banco de dados MongoDB
conectarDB();
app.use(cors());
app.use(express.json());
app.use('/api/products', require('./routes/product'));


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000')
})

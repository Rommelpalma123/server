const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const bodyParser = require('body-parser');
const { dbConnection} = require('./mongo')
const contactoRouter = require('./routers/contacto')
const port = process.env.port;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/api', contactoRouter);

/*mongoose.connect(process.env.mongo_key, {useNewUrlParser: true, useUnifiedTopology: true})
.then((console.log('Base de datos escuchando')))
.catch((e) => console.log(e))*/

dbConnection();
app.listen(port,() => console.log(`servidor corriendo en el ${port}`));
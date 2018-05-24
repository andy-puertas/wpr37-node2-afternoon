const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();
const products_controller = require('./products_controller')

const app = express();
app.use( bodyParser.json() );
app.use( cors() );
massive( process.env.CONNECTION_STRING).then( dbInstance => 
    app.set('db', dbInstance)
);



app.post('/api/product', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/prduct/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.delete);



const port = process.env.PORT || 4040;
app.listen( port, () => { 
    console.log(`Server listening on port ${port}.`);
});


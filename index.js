const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING).then( dbInstance => 
    app.set('db', dbInstance)
)

const port = process.env.PORT || 4040;
app.listen( port, () => { 
    console.log(`Server listening on port ${port}.`);
});

// CREATE TABLE products (
//     product_id SERIAL PRIMARY KEY NOT NULL,
//     name VARCHAR(40) NOT NULL,
//     description varchar(80) NOT NULL,
//     price integer NOT NULL,
//     image_url text NOT NULL
// );
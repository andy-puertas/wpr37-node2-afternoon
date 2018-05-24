const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const port = process.env.PORT || 4040;
app.listen( port, () => { 
    console.log(`Server listening on port ${port}.`);
});

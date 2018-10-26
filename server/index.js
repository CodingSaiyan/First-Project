const express = require('express'),
       bodyParser = require('body-parser'),
       app = express(),
       port = 3005;

app.use(bodyParser.json());

app.listen(port, () => { console.log(`Running on server ${port} and will keep running!`)});
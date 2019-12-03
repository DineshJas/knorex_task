const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const apiRoutes = require('./src/api-router');

let app = express();
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

if(!db){
    console.log("Error connecting db");
}
else {
    console.log("Db connected successfully");
    // db.createCollection('dropdown_options');
}
app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes);

app.listen(port, function () {
     console.log("Running server on port " + port);
});
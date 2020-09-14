const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require("./db");
const dbName = "products";
const collectionName = "products";

let products = [];

db.initialize(dbName, collectionName, function(dbCollection) {
  dbCollection.find().toArray(function(err, result) {
    if (err) throw err;
    products = result;
  });

}, function(err) { // failureCallback
  throw (err);
});

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/products', (req, res, next) => {
  res.status(200).json(products);
});

module.exports = app;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./models/thing');

mongoose.connect("mongodb+srv://cluster0.v1l3j.mongodb.net/7456398521")
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.post('/api/products', (req, res, next) => {
  const products = new Thing({
    availableSizes: req.body.availableSizes,
    description: req.body.description,
    id: req.body.id,
    isFreeShipping: req.body.isFreeShipping,
    price: req.body.price,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    style: req.body.style,
    sku: req.body.sku
  });
  products.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

app.use('/api/products', (req, res, next) => {
  const products = [{
    'availableSizes': ['S', 'XS'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '4 MSL',
    'id': 12,
    'installments': 9,
    'isFreeShipping': true,
    'price': 10.9,
    'sku': 100,
    'style': 'Black with custom print',
    'title': 'Cat Tee Black T-Shirt'
  }, {
    'availableSizes': ['M'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '',
    'id': 13,
    'installments': 5,
    'isFreeShipping': true,
    'price': 29.45,
    'sku': 101,
    'style': 'Front print and paisley print',
    'title': 'Dark Thug Blue-Navy T-Shirt'
  }, {
    'availableSizes': ['X', 'L', 'XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': 'GPX Poly 1',
    'id': 14,
    'installments': 3,
    'isFreeShipping': true,
    'price': 9,
    'sku': 102,
    'style': 'Front tie dye print',
    'title': 'Sphynx Tie Dye Wine T-Shirt'
  }, {
    'availableSizes': ['X', 'L', 'XL', 'XXL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': 'Treino 2014',
    'id': 15,
    'installments': 5,
    'isFreeShipping': true,
    'price': 14,
    'sku': 103,
    'style': 'Black T-Shirt with front print',
    'title': 'Skuul'
  }, {
    'availableSizes': ['X', 'L'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '',
    'id': 11,
    'installments': 3,
    'isFreeShipping': true,
    'price': 13.25,
    'sku': 104,
    'style': 'Wine',
    'title': 'Wine Skul T-Shirt'
  }, {
    'availableSizes': ['X', 'L', 'XL', 'XXL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '14/15 s/nº',
    'id': 0,
    'installments': 9,
    'isFreeShipping': true,
    'price': 10.9,
    'sku': 105,
    'style': 'Branco com listras pretas',
    'title': 'Cat Tee Black T-Shirt'
  }, {
    'availableSizes': ['X', 'L', 'XL', 'XXL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '14/15 s/nº',
    'id': 1,
    'installments': 9,
    'isFreeShipping': true,
    'price': 10.9,
    'sku': 106,
    'style': 'Preta com listras brancas',
    'title': 'Sphynx Tie Dye Grey T-Shirt'
  }, {
    'availableSizes': ['X', 'L'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '14/15 s/nº',
    'id': 2,
    'installments': 7,
    'isFreeShipping': true,
    'price': 14.9,
    'sku': 107,
    'style': 'Branco com listras pretas',
    'title': 'Danger Knife Grey'
  }, {
    'availableSizes': ['X', 'L'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '2014 s/nº',
    'id': 3,
    'installments': 7,
    'isFreeShipping': true,
    'price': 14.9,
    'sku': 108,
    'style': 'Preto com listras brancas',
    'title': 'White DGK Script Tee'
  }, {
    'availableSizes': ['XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '14/15 s/nº - Jogador',
    'id': 4,
    'installments': 12,
    'isFreeShipping': false,
    'price': 25.9,
    'sku': 109,
    'style': 'Branco com listras pretas',
    'title': 'Born On The Streets'
  }, {
    'availableSizes': ['X', 'L', 'XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '14/15 + Camiseta 1º Mundial',
    'id': 5,
    'installments': 9,
    'isFreeShipping': false,
    'price': 10.9,
    'sku': 110,
    'style': 'Preto',
    'title': 'Tso 3D Short Sleeve T-Shirt A'
  }, {
    'availableSizes': ['XL', 'XXL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': 'Goleiro 13/14',
    'id': 6,
    'installments': 0,
    'isFreeShipping': true,
    'price': 49.9,
    'sku': 111,
    'style': 'Branco',
    'title': 'Man Tie Dye Cinza Grey T-Shirt'
  }, {
    'availableSizes': ['S'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '1977 Infantil',
    'id': 7,
    'installments': 4,
    'isFreeShipping': true,
    'price': 22.5,
    'sku': 112,
    'style': 'Preto com listras brancas',
    'title': 'Crazy Monkey Black T-Shirt'
  }, {
    'availableSizes': ['XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '',
    'id': 8,
    'installments': 4,
    'isFreeShipping': false,
    'price': 18.7,
    'sku': 113,
    'style': 'Azul escuro',
    'title': 'Tso 3D Black T-Shirt'
  }, {
    'availableSizes': ['L', 'XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '',
    'id': 9,
    'installments': 5,
    'isFreeShipping': true,
    'price': 134.9,
    'sku': 114,
    'style': '',
    'title': 'Crazy Monkey Grey'
  }, {
    'availableSizes': ['L', 'XL'],
    'currencyFormat': '$',
    'currencyId': 'USD',
    'description': '',
    'id': 10,
    'installments': 9,
    'isFreeShipping': true,
    'price': 49,
    'sku': 115,
    'style': '',
    'title': 'On The Streets Black T-Shirt'
  }];
  res.status(200).json(products);
});

app.use('/api/products', (req, res, next) => {
  Thing.find().then(
    (things) => {
      res.status(200).json(things);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

app.get('/api/products/:id', (req, res, next) => {
  Thing.findOne({
    id: req.params.id
  }).then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
});

app.put('/api/products/:id', (req, res, next) => {
  const thing = new Thing({
    availableSizes: req.body.availableSizes,
    description: req.body.description,
    id: req.body.id,
    isFreeShipping: req.body.isFreeShipping,
    price: req.body.price,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    style: req.body.style,
    sku: req.body.sku
  });
  Thing.updateOne({id: req.params.id}, thing).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

app.delete('/api/products/:id', (req, res, next) => {
  Thing.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = app;
const mongoose = require('mongoose');
const express = require('express');
const bluebird = require('bluebird');
const Vending = require('./models/model.js');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/vendingMachine');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('in the get');
  Vending.find().then((results) =>{
    res.json({products: results })
  })
})

app.post('/api/vendor/items/', (req, res,) => {
  const vendingSnacks = new Vending ({
   snack : req.body.snack,
   quantity : req.body.quantity,
   price : req.body.price
})
    vendingSnacks.save()
      .then(() => {
        res.json({status : 'success'})
      })
  });


app.post('/api/customer/items/:itemId/purchases', (req, res,) => {
  Vending.updateOne({
      _id: new ObjectId(id)
    }, {$inc:{quantity : -1}})
    .then((results) => {
      res.json( {status : 'success'})
    })
})



app.listen(3000, () => {
  console.log('Successfully started express application!');
})

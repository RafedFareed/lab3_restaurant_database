const express = require('express');
const mongoose = require('mongoose');
const restaurantsRouter = require('./routes/RestaurantsRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://root:root@cluster0.qry26ic.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(restaurantsRouter);

app.listen(8081, () => { console.log('Server is running...') });
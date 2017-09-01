const mongoose = require('mongoose');

const ProductModel = require('../models/product-model.js');


mongoose.connect('mongodb://localhost/ironshop');


const productArray = [
  {
    name: "Bean Taco",
    price: 5,
    imageUrl: "https://media.giphy.com/media/l0NwCudcnztLselXO/giphy.gif",
    description: "Mmmmm tacos"
  },
  {
    name: "Jelly",
    price: 6,
    imageUrl: "https://media.giphy.com/media/xUPGcHeIeZMmTcDQJy/giphy.gif",
    description: "Jellyfish"
  },
  {
    name: "Gold Pizza",
    price: "6665",
    imageUrl: "//media.giphy.com/media/xUA7b5b2l0Vx3M0G40/giphy.gif",
    description: "Fancy Pizza"
  },
  {
    name: "Armadillo",
    price: "35",
    imageUrl: "https://media.giphy.com/media/4FrI84rhWCFSU/giphy.gif",
    description: "MMMMM Armadillos"
  },
  {
    name: "Burritomobile",
    price: "230",
    imageUrl: "https://media.giphy.com/media/5HSYaZTcRpYnS/giphy.gif",
    description: "Fast and comfortable"
  }
];

ProductModel.create(
  // first arg --> array of products to save
  productArray,


  // 2nd arg --> callback
  (err,ProductsAfterSave) => {
    if (err) {
      console.log("Error!");
      console.log(err);
      return;
    }

    ProductsAfterSave.forEach(product => {
      console.log("New product ---->   " + product.name);





    });
  }

);

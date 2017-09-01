const express = require('express');

const ProductModel = require('../models/product-model.js');

const router = express.Router();

router.get('/products', (req,res,next) => {

    ProductModel.find((err, allProducts) => {
      // if there's an error
      if (err) {
        console.log('OMG');
        console.log(err);
        return;
        // early return instead of else
      }

      // allProducts will be the array of products
      res.locals.listOfProducts = allProducts;

      res.render('product-views/product-list.ejs');
    });

});


module.exports = router;

var Cart = require('../model/Cart');
var fs = require('fs');
var items = JSON.parse(fs.readFileSync('./data/item.json',"utf-8"));

 const fullCart = function(req, res, next) {
    if (!req.session.cart) {
      return res.render('cart', {
        items: null
      });
    }
    var cart = new Cart(req.session.cart);
    res.render('cart', {
      title: 'NodeJS Shopping Cart',
      items: cart.getItems(),
      totalPrice: cart.totalPrice
    });
  }

  module.exports = {
      fullCart
  }
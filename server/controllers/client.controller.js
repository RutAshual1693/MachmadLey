const stripe = require("stripe")("sk_test_bbbrbm73dUAQc0cux6B8y4Ex");

function charge(req, res) {
  
    const token = req.body.stripeToken; // Using Express
    stripe.charges.create({
      amount: 999,
      currency: 'ils',
      description: 'Example charge',
      source: token,
    }).then(data => {
      console.log(data['status']);
      res.json({ 'status': data['status'] });
    }).catch(err => {
      res.json({ 'status': 'failed' });
    });
}
//--קבלת רשימת המוצרים
//function getProducts(req, res) {
//  var myPromise = new Promise((resolve, reject) => {
//    //--שליפת רשימת הקטגוריות מהשרת
//    dbo.collection("products").find().toArray(function (err, result) {
//      if (err) reject(err);
//      listProducts = result;
//      resolve(result);
//    });
//  });
//  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
//}

exports.charge = charge;
//exports.getProducts = getProducts;

'use strict';
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));
app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
var listProducts,listCategories,listProductOptions;
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/machmadleyDB";
var dbo;
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  dbo = db.db("machmadleyDB");
});
//  //-----שליחת רשימת המוצרים ללקוח
app.get('/listProducts', function (req, res) {
  getProducts(req,res);
});
//-------הוספת מוצר
app.post('/addProduct', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("products").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");     
        resolve(res);
    });
  });
  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
});
//--קבלת רשימת המוצרים
function getProducts(req, res) {
  var myPromise = new Promise((resolve, reject) => {
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("products").find().toArray(function (err, result) {
        if (err) reject(err);
        listProducts = result;
        console.log(result);
        resolve(result);
      });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
   //********************************************************************************
   //********קטגוריות***************************************************************
  //*********************************************************************************


//---שליחת רשימת הקטגוריות ללקוח
app.get('/listCategories', function(req, res) {
    getCategories(req, res);
});
function getCategories(req, res) {
  var myPromise = new Promise((resolve, reject) => {  
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("categories").find().toArray(function (err, result) {
        if (err) reject(err);
        listCategories = result;
        console.log(result);   
        resolve(result);
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
//--מחיקת קטגוריה------------------
app.post('/deleteCategories', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
     dbo.collection("categories").deleteOne({ name: req.body.name }, function (err, obj) {
       if (err) reject(err);
       console.log("1 document deleted");
       dbo.collection("categories").find().toArray(function (err, result) {
         if (err) reject(err);
         listCategories = result;
         console.log(result);     
         resolve(result);
       });
  });
  });
    myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));     
});
//------הוספת קטגוריה------------------
app.post('/addCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("categories").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");    
        resolve(res);
      });
    });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
});
app.get('/listProductOptions', function (_req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("productOptions").find().toArray(function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");
        resolve(res);
      });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
});
//-מחיקת אופציה
app.post('/deleteOption', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
      dbo.collection("productOptions").deleteOne({ name: req.body.name }, function (err, obj) {
        if (err) reject(err);
        console.log("1 document deleted");
        dbo.collection("productOptions").find().toArray(function (err, result) {
          if (err) reject(err);
          listProductOptions = result;
          console.log(result);
          resolve(result);
        });  
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
});
//--מחיקת ערך אחד מאפשרות מוצר
app.post('/deleteValue', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {  
    var myquery = { _id: new mongo.ObjectID(req.body._id) };
    var newvalues = { $set: {values:req.body.values} };
    dbo.collection("productOptions").updateOne(myquery, newvalues, function (err, res) {
    });
  });
    myPromise.then(fromResolve => getProducts(req,res), err => console.log(err));
})


app.post('/deleteProduct', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    console.log("lllllll" + req.body._id);
    dbo.collection("products").deleteOne({ _id: new mongo.ObjectID(req.body._id)}, function (err, obj) {
      if (err) reject(err);
      console.log("1 document deleted");
      resolve(listProducts);
    });
    });
myPromise.then(fromResolve => getProducts(req,res), err => console.log(err));  
}
)
///----------
app.post('/editCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    dbo.collection("categories").updateOne({ _id: new mongo.ObjectID(req.body._id) }, { $set: { name: req.body.name } }, function (err, obj) {
      if (err) reject(err);
      console.log("1 category updated");
      resolve(listProducts);
    });
  });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
}
)

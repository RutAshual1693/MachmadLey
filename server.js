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
var listProducts,listCategories;
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
var url = "mongodb://localhost:27017/machmadleyDB";

 
  //-----שליחת רשימת המוצרים ללקוח
app.get('/listProducts', function (req, res) {
  getProducts(req,res);
});
//-------הוספת מוצר
app.post('/addProduct', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("machmadleyDB");
      dbo.collection("products").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");
        db.close();
        resolve(res);
      });
    });
  });
  myPromise.then(fromResolve => getProducts(req, res), err => console.log(err));
});
//--קבלת רשימת המוצרים
function getProducts(req, res) {
  var myPromise = new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("machmadleyDB");
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("products").find().toArray(function (err, result) {
        if (err) reject(err);
        listProducts = result;
        console.log(result);
        db.close();
        resolve(result);
      });
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
    MongoClient.connect(url, function (err, db) {
      var dbo = db.db("machmadleyDB");
      //--שליפת רשימת הקטגוריות מהשרת
      dbo.collection("categories").find().toArray(function (err, result) {
        if (err) reject(err);
        listCategories = result;
        console.log(result);
        db.close();
        resolve(result);
      });
    });
  });
  myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));
}
//--מחיקת קטגוריה------------------
app.post('/deleteCategories', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
   MongoClient.connect(url, function (err, db) {
     if (err) throw err;
     var dbo = db.db("machmadleyDB");
     dbo.collection("categories").deleteOne({ name: req.body.name }, function (err, obj) {
       if (err) reject(err);
       console.log("1 document deleted");
       dbo.collection("categories").find().toArray(function (err, result) {
         if (err) reject(err);
         listCategories = result;
         console.log(result);
         db.close();
         resolve(result);
       });
    });
  });
  });
    myPromise.then(fromResolve => res.send(JSON.stringify(fromResolve)), err => console.log(err));     
});
//------הוספת קטגוריה------------------
app.post('/addCategory', function (req, res) {
  var myPromise = new Promise((resolve, reject) => {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("machmadleyDB");
      dbo.collection("categories").insertOne(req.body, function (err, res) {
        if (err) reject(err);
        console.log("1 category inserted");    
        db.close();
        resolve(res);
      });
    });
  });
  myPromise.then(fromResolve => getCategories(req, res), err => console.log(err));
});






///
//function resolveAfter2Seconds(req) {
//  return new Promise(resolve => {
//    setTimeout(() => {
//      MongoClient.connect(url, function (err, db) {
//        if (err) throw err;
//        var dbo = db.db("machmadleyDB");
//        dbo.collection("categories").deleteOne({ name: req.body.name }, function (err, obj) {
//          if (err) reject(err);
//          console.log("1 document deleted");
//          dbo.collection("categories").find().toArray(function (err, result) {
//            if (err) reject(err);
//            listCategories = result;
//            console.log(result);
//            db.close();
//            resolve(listCategories);
//          });
//        });
//      });
//    }, 0);
//  });
//}
//async function f1(req, res) {
//  var x = await resolveAfter2Seconds(req);
//  res.send(JSON.stringify(x)); // 10
//}





const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const { MongoClient } = require('mongodb');
const url =  'mongodb+srv://admin:admin@ecommercedata.2rahr.mongodb.net/test' || 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbs_name = 'shopee-cl';
let db = null;
let collection = null;

async function getData() {
    await client.connect();
    db = client.db(dbs_name);
    collection = db.collection('products');
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const template = Handlebars.compile("Name: {{name}}");

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/cart.html'));
})

app.get('/products/detail', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/detailproduct.html'));
})

app.listen(process.env.PORT || port, () => {
    getData();
    console.log('Listen on port: ' + port);
});

//mongodb+srv://admin:admin@ecommercedata.2rahr.mongodb.net/test
//process.env.MONGODB_URL
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("hello world");
})

app.listen(port, () => {
    console.log('Listen on port: ' + port);
});

//mongodb+srv://admin:admin@ecommercedata.2rahr.mongodb.net/test
//process.env.MONGODB_URL
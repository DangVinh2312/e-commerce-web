const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log("hello world");
})

app.listen(port, () => {
    console.log('Listen on port: ' + port);
});
const express = require('express');
const app = express();

app.post('/', function(req, res) {
    console.log('Hello, world');
    return res.send('Hello, world');
});

app.listen(3000);
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function(req, res) {
    console.log(req.body);
    return res.send();
});

app.listen(3000);
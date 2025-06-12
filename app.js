const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function(req, res) {
    if (req.body.SubType && req.body.EventData && req.body.EventData.JobName) {
        console.log(`SubType: ${req.body.SubType}, JobName: ${req.body.EventData.JobName}`);
    }
    return res.send();
});

app.listen(3000);
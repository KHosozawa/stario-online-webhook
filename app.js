const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/', function(req, res) {
    const subType = req.body.SubType;
    const jobName = req.body.EventData && req.body.EventData.JobName;
    if ((subType === 'completed' || subType === 'failed') && jobName) {
        console.log(`SubType: ${subType}, JobName: ${jobName}`);
    }
    return res.send();
});

app.listen(3000);
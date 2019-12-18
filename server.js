var express = require('express');
var app = express();

app.use(require('cors')());

app.use(express.static('dist'));


app.get('/modules', function (req, res) {
    res.json(modules);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
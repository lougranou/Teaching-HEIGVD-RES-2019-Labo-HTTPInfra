const Chance = require('chance');
const chance = new Chance();
const express = require('express')
const app = express();

app.get('/', function(req, res){
    res.send('Hello ' + chance.name() 
    + ' you live in the great city of ' + chance.city() + '.\n');
});

app.get('/test', function(req, res){
    res.send('Find test folder\n');
});


app.listen(3000, function () {
    console.log('Accepting HTTP requests on port 3000.');
});


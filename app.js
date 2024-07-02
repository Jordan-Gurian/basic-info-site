const fs = require('fs');

const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    return fs.readFile("./index.html", (err, data) => {
        res.end(data);
    });
});

app.get('/about', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    return fs.readFile("./about.html", (err, data) => {
        res.end(data);
    });
});

app.get('/contact-me', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    return fs.readFile("./contact-me.html", (err, data) => {
        res.end(data);
    });
});


app.get('*', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    return fs.readFile("./404.html", (err, data) => {
        res.end(data);
    });  
});



app.listen(port)
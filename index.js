const express = require('express');
const app = express();
const http = require('http');



app.listen(3000 , ()=>{
    console.log('App listening on port 3000');
});
app.use(express.json({limit:'100mb'}));
app.use(express.static('public'));

// API for client to change variables
var lights="OFF";
app.post('/api' , (req, res)=>{
    lights = req.body.ls;
    console.log(lights);
    res.json({status: 'success'});
});

// API for raspberry pi to connect to

app.get('/rasp/lights' , (req, res)=>{
    res.send(lights);
});


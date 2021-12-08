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
var curtain = "CLOSED";
var door = "0";
app.post('/api' , (req, res)=>{
    lights = req.body.ls;
    curtain = req.body.cs;
    door = req.body.ds;
    console.log(lights);
    console.log(curtain);
    console.log(door);
    res.json({status: 'success'});
});

// API for raspberry pi to connect to

app.get('/rasp/lights' , (req, res)=>{
    res.send(lights);
});

app.get('/rasp/curtain' , (req, res)=>{
    res.send(curtain);
});

app.get('/rasp/door' , (req, res)=>{
    res.send(door);
})




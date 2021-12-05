const express = require('express');
const app = express();

app.listen(3000 , ()=>{
    console.log('App listening on port 3000');
});
app.use(express.json({limit:'100mb'}));
app.use(express.static('public'));
app.post('/api' , (req, res)=>{
    console.log(req.body);
});
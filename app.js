const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

//for pug stuff
app.set('view engine', 'pug'); //set view engine with pug
app.set('views', path.join('views')); //set the views directory

app.get('/', (req,res) =>{
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req,res) =>{
    const params = {};
    res.status(200).render('contact.pug', params);
});


app.listen(port, () => {
    console.log(`This Request is Running Sucessfully ${port}`);
});
const express = require('express');
const app     = express();
const port    = '3000';
const bodyParser = require('body-parser');
const jwt        = require('jsonwebtoken');
const path       = require('path');
const mysql      = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'user_data'

  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });



app.get('/',(req,res) => {
    res.render('home');
})



app.use(express.static(__dirname + ''));
app.set('views', path.join(__dirname, 'application/views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
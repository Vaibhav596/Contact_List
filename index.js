//Creating a server using expess module
const express = require('express');
const port = 8000;
const path = require('path');
const { urlencoded } = require('express');
const app = express();
const db = require('./config/mongoose')
const Contacts = require('./models/contactSchema')

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded());
app.use(express.static('assets'));

app.use('/',require('./routes/user'))




app.listen(port, function(err){
    if(err){
        return console.log("Error in running server");
    }
    return console.log("The server is running on port : ",port);
})
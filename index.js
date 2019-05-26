const express = require('express');
const app = express(); 

app.get('/test', function(request, respone){
    respone.send("abcdefgh")
})

app.listen('12345'); //definisi halaman port
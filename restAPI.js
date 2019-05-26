const express = require('express');
const app = express(); 

app.get('/test', (req, res)=>{
    res.end("Ini get XI RPL ");
});

app.post('/test', (req, res)=>{
    res.end("Ini post XI RPL ");
});

app.listen('8080',(e)=>{
    console.log(e)
}); //definisi halaman port
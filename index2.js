const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}))

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const DBurl = "mongodb://127.0.0.1:27017/";
const DBname = "smktelkom";

let dbo = null;
MongoClient.connect(DBurl, (error, db)=>{
    if (error)throw error;
    dbo = db.db(DBname);
});

app.get('/siswa',(request, response)=>{
    dbo.collection("siswa").find().toArray((err, res)=>{
        if(err)throw err;
        response.json(res);
    })
});

app.get('/siswa/:nama', (request, response)=>{
    let namaSiswa = request.params.nama;
    response.end("menampilkan nama siswa "+ namaSiswa);
});

app.post('/siswa', (request, response)=>{
    let namaSiswa = request.body.nama;
    // let alamat = request.body.adress;
    response.end('menampilkan siswa baru ' + namaSiswa + ' yang beralamat di ' + alamat);
});

app.delete('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id '+ id + ' telah dihapus, dengan nama '+namaSiswa);
});

app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    // let alamat = request.body.alamat;
    response.end('siswa dengan id : '+id+' telah diupdate')
});

app.listen('8080',(e)=>{
    console.log(e)
});
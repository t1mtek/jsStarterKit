/**
 * Created by timtek on 21/02/2018.
 */
var express = require('express');
var path = require('path');
var open = require('open');

var port = 3259;
var app = express();

app.get('/', function (req,res) {
    res.sendfile(path.join(__dirname, '../src/index.html'));
});

app.listen(port,function (err) {
    if(err){
        console.log(err)
    }else{
        open('http://localhost:'+port);
    }

});

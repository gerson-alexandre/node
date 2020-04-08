var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');
var bodyParser = require('body-parser') ;

router.get('/', function(req, res, next){

    res.render('create', {message:false});
});

router.post('/', function(req, res, next){
    console.log(req);

    
    var id = parseInt(Pokemon.pokemon.length + 1);
    
    request({
        url:"http://localhost:3000/pokemon",
        method:"POST",
        form:{
            id: id,
            name: req.body.name,
            image: req.body.image_url,
        }
    }, function(error, response, body){
        console.log(body);

        //send a response message
        res.render.apply('create', {message: 'successfully added'});
    });
    
     res.redirect('/');
})


module.exports = rout
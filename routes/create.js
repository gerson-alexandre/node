var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require('request');

router.get('/', function(req, res, next){

    res.render('create', {message:false});
});

router.post('/', function(req, res, next){

    var id = Pokemon.pokemon.length
    request({
        url:"http://localhost:3000",
        method:"post",
        form:{
            id: id,
            name: req.body.name,
            image: req.body.image,
        }
    }, function(error, response, body){
        console.log(body);

        //send a response message
        res.render.apply('create', {message: 'successfully added'});
    });

})


module.exports = router; 
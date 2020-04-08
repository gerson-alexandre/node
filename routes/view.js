var express = require('express');
var router = express.Router();
var  pokemon = require('../db.json');
var request = require('request');

router.get('/:pokeId', function(req, res, next){

    request({
        url:"http://localhost:3000", req:params.pokeId,
        method:"GET",
    }, function(error, response,body){
        console.log(JSON.parse(body));
        //send a response
        res.render('view', {poke: JSON.parse(body)});

    })
})

module.exports = router;
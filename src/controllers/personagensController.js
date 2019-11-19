// const personagens = require("../model/personagens.json")

const Personagens = require('../model/personagens.js');

const fs = require('fs');

exports.get = (req, res) => {
  // console.log(req.url)
  // res.status(200).send(personagens)
  Personagens.find(function(err, personagens){
    console.log(personagens);
    res.status(200).send(personagens);
  })
}








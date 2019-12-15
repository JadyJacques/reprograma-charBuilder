const Users = require('../model/users.js');

const fs = require('fs');

exports.get = (req, res) => {
    Users.find(function(err, users){
        console.log(users);
        res.status(200).send(users);
      }) 
}
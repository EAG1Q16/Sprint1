var express = require('express');
var mongoose = require('mongoose');
var Users = require('../models/modeluser');
var router = express.Router();



// GET users in list
router.get('/', function(req, res) {
  // use mongoose to get all users in the database
  Users.find(function(err, users) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)
    res.json(users); // return all users in JSON format
    console.log(users);
  });
});

// Post user in list
router.post('/', function(req, res) {
  console.log(req.body);
  Users.create({
    name:req.body.name,
    email:req.body.email,
    description:req.body.description,
    photo:req.body.photo
  }, function(err, user) {
    if (err)
      res.send(err);

    // get and return all the users after you create another
    Users.find(function(err, users) {
      if (err)
        res.send(err)
      res.json(users);
    });
  });

});

// Update the selected user
router.put('/:user_id', function(req, res) {
 Users.update({
   _id : req.params.user_id
 },{$set:{name: req.body.name,
          email: req.body.email,
          description: req.body.description,
          photo: req.body.photo}},
     function(err, user) {
      if (err)
        res.send(err);

       Users.find(function(err, user) {
         if(err)
           res.send(err)
         res.send(user);
       });
     });
});


// delete a user
router.delete('/:user_id', function(req, res) {
  Users.remove({
    _id : req.params.user_id
  }, function(err, user) {
    if (err)
      res.send(err);
    // get and return all the users after you delete this one
    Users.find(function(err, users) {
      if (err)
        res.send(err)
      res.json(users);
    });
  });

});







module.exports = router;

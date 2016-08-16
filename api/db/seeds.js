var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/pelican';
mongoose.connect(databaseURL);

var Member = require("../models/member"); 


var Member1 = new Member({
  name: "Harry Potter",
  email: "hpotter@gmail.com",
  school: "Hogwarts"
})

Member1.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member2 = new Member({
  name: "Jack Black",
  email: "jblack@sor.com",
  school: "School of Rock"
})

Member2.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member3 = new Member({
  name: "Arnie  Schwartz",
  email: "as@gmail.com",
  school: "Kindergarten kop school"
})

Member3.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member4 = new Member({
  name: "Hermione Granger",
  email: "hg@hoggers.com",
  school: "Hogwarts"
});

Member4.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})


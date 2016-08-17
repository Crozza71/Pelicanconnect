var mongoose = require("mongoose");

var databaseURL = 'mongodb://localhost:27017/pelican';
mongoose.connect(databaseURL);

var Member = require("../models/member"); 

// TO DROP DATABASE COLLECTION MEMBER
// Member.collection.drop();

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
  school: "Kindergarten Kop School"
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

var Member5 = new Member({
  name: "Gus Stewart",
  email: "gus@eton.com",
  school: "Eton"
});

Member5.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member6 = new Member({
  name: "Chuck Norris",
  email: "chucky@h.com",
  school: "Harvard"
});

Member6.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member7 = new Member({
  name: "Sylvester Stallone",
  email: "ss@h.com",
  school: "Harvard"
});

Member7.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member8 = new Member({
  name: "Prince William",
  email: "hrh@eton.com",
  school: "Eton"
});

Member8.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member9 = new Member({
  name: "Jason Kenny",
  email: "jasonh@gold.com",
  school: "Gold School"
});

Member9.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

var Member10 = new Member({
  name: "Laura Trott",
  email: "laurah@gold.com",
  school: "Gold School"
});

Member10.save(function(err, member) {
  if (err) return console.log(err);
  console.log(member);
})

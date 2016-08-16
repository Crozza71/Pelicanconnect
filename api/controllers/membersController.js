var Member = require("../models/member");

function membersIndex(req, res){

  Member.find({}, function(err, member) {
    if (err) return res.status(404).send(err);
    //console.log(member);
    res.status(200).send(member);
  });
}

function membersCreate(req, res){
  var member = new Member(req.body.member);
  console.log(member)
  member.save(function(err, member) {
    if (err) return res.status(500).send(err);
    res.status(201).send(member)
  })
}

function membersShow(req, res){
  var id = req.params.id;
  Member.findById({ _id: id },req.body.member, function(err, member) {
    if (err) return res.status(500).send(err);
    if (!member) return res.status(404).send(err);

    res.status(200).send(member);
  })
}

function membersUpdate(req, res){
  var id = req.params.id;

  Member.findByIdAndUpdate({ _id: id }, req.body.member, function(err, member){
    if (err) return res.status(500).send(err);
    if (!member) return res.status(404).send(err);

    res.status(200).send(member);
  })
}

function membersDelete(req, res){
  var id = req.params.id;

  Member.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200)
  })
}

module.exports = {
  membersIndex:  membersIndex,
  membersCreate: membersCreate,
  membersShow:   membersShow,
  membersUpdate: membersUpdate,
  membersDelete: membersDelete
}
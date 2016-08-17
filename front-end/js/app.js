

$(document).ready(function(){
  getMembers();
  $("form#new-member").on("submit", createMembers);

  $("#schoolList li").on("click", function(){
    //console.log($(this).text());
    getmemberbyschool($(this).text());
  })
});

var allMembers = [];

////////// DEAL WITH API 
function getMembers(){
  var ajax = $.get('http://localhost:3000/members')
  .done(function(data){
    $.each(data, function(index, member){
      addMember(member);
    });
    // console.log("client members");
    // console.log(data);
  });
}

function createMembers(){
    event.preventDefault();

    $.ajax({
      url:'http://localhost:3000/members',
      type:'post',
      data: { member: {
        "name": $("input#name").val(),
        "email": $("input#email").val(),
        "school": $( "#school option:selected" ).text()
      }
    }
    }).done(function(member) {
        addMember(member)
    });
}
//////////

////////// DEAL WITH HTML PAGE
function addMember(member){
 $("#members").prepend("<div class='tile'><ul>" +
                         "<li>"+member.name+"</li>" +
                         "<li>"+member.email+"</li>" +
                         "<li>"+member.school+"</li>" +
                       "</ul></div>"); 
 allMembers.push(member);
}

function listMemberbyschool(member){

 $("#members").prepend("<div class='tile'><ul>" +
                           "<li>"+member.name+"</li>" +
                           "<li>"+member.email+"</li>" +
                           "<li>"+member.school+"</li>" +
                         "</ul></div>"); 
}



function getmemberbyschool(school) {
  $("#members").empty();
  for (var i = 0; i < allMembers.length; i++) {
    if (allMembers[i].school === school) {
      listMemberbyschool(allMembers[i])
    }
  }
}
//////////
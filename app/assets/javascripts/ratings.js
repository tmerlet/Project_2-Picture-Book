

function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: "json",
    data: data,
  })
}

function unlikeRating(){
  $this = $(this)
  if ($this.children("i").hasClass("fa-thumbs-o-down")){
    addUnlikeRating();
    removeLikeRating();
  }
  if ($this.children("i").hasClass("fa-thumbs-down")){
    removeUnlikeRating();
  }
  // $this.children("i").toggleClass("fa-thumbs-o-down").toggleClass("fa-thumbs-down")
}

function addUnlikeRating(){
  $numberOfUnlikes = parseInt($('#number_of_unlikes').text())
  request("POST", "/ratings", {
    rating:{
      photo_id: $("#currentphoto").val(),
      status: "negative"
    }
  }).success(function(data){
    $this.children("i").data("unlikerating-id", data.id);
    $('#number_of_unlikes').text($numberOfUnlikes + 1);
    $('#unlike').children("i").removeClass("fa-thumbs-o-down").addClass("fa-thumbs-down")
  })
}

function removeUnlikeRating(){
  $numberOfUnlikes = parseInt($('#number_of_unlikes').text())
  unlikeratingId = $('#unlike').children("i").data("unlikerating-id");
  $('#unlike').children("i").removeClass("fa-thumbs-down").addClass("fa-thumbs-o-down")
  request("DELETE", "/ratings/"+unlikeratingId, null).success(function(data){
    $('#number_of_unlikes').text($numberOfUnlikes - 1)
    $('#unlike').children("i").removeClass("fa-thumbs-down").addClass("fa-thumbs-o-down")
  })
}
   
function likeRating(){
  $this = $(this)
  $numberOfLikes = parseInt($('#number_of_likes').text())
  
  if ($this.children("i").hasClass("fa-thumbs-o-up")){
    addLikeRating();
    removeUnlikeRating();
  }

  if ($this.children("i").hasClass("fa-thumbs-up")){
    removeLikeRating();
  }
  // $this.children("i").toggleClass("fa-thumbs-o-up").toggleClass("fa-thumbs-up")
}

function addLikeRating(){
  $numberOfLikes = parseInt($('#number_of_likes').text())
  request("POST", "/ratings", {
    rating:{
      photo_id: $("#currentphoto").val(),
      status: "positive"
    }
  }).success(function(data){
    $this.children("i").data("likerating-id", data.id);
    $('#number_of_likes').text($numberOfLikes + 1);
    $('#like').children("i").removeClass("fa-thumbs-o-up").addClass("fa-thumbs-up")
  })
}

function removeLikeRating(){
  $numberOfLikes = parseInt($('#number_of_likes').text())
  likeratingId = $('#like').children("i").data("likerating-id");
  request("DELETE", "/ratings/"+likeratingId, null).success(function(data){
    $('#number_of_likes').text($numberOfLikes - 1)
    $('#like').children("i").removeClass("fa-thumbs-up").addClass("fa-thumbs-o-up")
  })
}


$(function(){
  $('#like').on('click', likeRating)
  $('#unlike').on('click', unlikeRating)
})
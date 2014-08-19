

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
  $numberOfUnlikes = parseInt($('#number_of_unlikes').text())
  
  // if ($this.children("i").hasClass("fa-thumbs-up")){
  //   removeLikeRating();
  //   alert("getting to here")
  //   $this.children("i").toggleClass("fa-thumbs-o-up").toggleClass("fa-thumbs-up")
  // }

  if ($this.children("i").hasClass("fa-thumbs-o-down")){
    addUnlikeRating();
  }
  if ($this.children("i").hasClass("fa-thumbs-down")){
    removeUnlikeRating();
  }
  $this.children("i").toggleClass("fa-thumbs-o-down").toggleClass("fa-thumbs-down")
}

function addUnlikeRating(){
  request("POST", "/ratings", {
    rating:{
      photo_id: $("#currentphoto").val(),
      status: "negative"
    }
  }).success(function(data){
    $this.children("i").data("rating-id", data.id);
    $('#number_of_unlikes').text($numberOfUnlikes + 1);
  })
}

function removeUnlikeRating(){
  ratingId = $('#unlike').children("i").data("rating-id");
  $('#unlike').children("i").removeClass("fa-thumbs-down").addClass("fa-thumbs-o-down")
  request("DELETE", "/ratings/"+ratingId, null).success(function(data){
    $('#number_of_unlikes').text($numberOfUnlikes - 1)
  })
}
   
function likeRating(){
  $this = $(this)
  $numberOfLikes = parseInt($('#number_of_likes').text())
  

  // if ($this.children("i").hasClass("fa-thumbs-up")){
  //   removeUnlikeRating();
  //   $this.children("i").toggleClass("fa-thumbs-o-up").toggleClass("fa-thumbs-up")
  // }

  if ($this.children("i").hasClass("fa-thumbs-o-up")){
    addLikeRating();
    removeUnlikeRating():
  }
  if ($this.children("i").hasClass("fa-thumbs-up")){
    removeLikeRating();
  }
  $this.children("i").toggleClass("fa-thumbs-o-up").toggleClass("fa-thumbs-up")
}

function addLikeRating(){
  request("POST", "/ratings", {
    rating:{
      photo_id: $("#currentphoto").val(),
      status: "positive"
    }
  }).success(function(data){
    $this.children("i").data("rating-id", data.id);
    $('#number_of_likes').text($numberOfLikes + 1)
  })
}

function removeLikeRating(){
  ratingId = $this.children("i").data("rating-id");
  request("DELETE", "/ratings/"+ratingId, null).success(function(data){
    $('#number_of_likes').text($numberOfLikes - 1)
  })
}


$(function(){
  $('#like').on('click', likeRating)
  $('#unlike').on('click', unlikeRating)
})


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
  
  if ($this.children("i").hasClass("fa-thumbs-o-down")){
    request("POST", "/ratings", {
      rating:{
        photo_id: $("#currentphoto").val(),
        status: "negative"
      }
    }).success(function(data){
      $this.children("i").data("rating-id", data.id);
      $('#number_of_unlikes').text($numberOfUnlikes + 1)
    })
  }

  if ($this.children("i").hasClass("fa-thumbs-down")){
    //  debugger
    ratingId = $this.children("i").data("rating-id");
    request("DELETE", "/ratings/"+ratingId, null).success(function(data){
      $('#number_of_unlikes').text($numberOfUnlikes - 1)
    })
  }

  $this.children("i").toggleClass("fa-thumbs-o-down").toggleClass("fa-thumbs-down")

}

function likeRating(){
  $this = $(this)
  $numberOfLikes = parseInt($('#number_of_likes').text())
  
  if ($this.children("i").hasClass("fa-thumbs-o-up")){
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

  if ($this.children("i").hasClass("fa-thumbs-up")){
    //  debugger
    ratingId = $this.children("i").data("rating-id");
    request("DELETE", "/ratings/"+ratingId, null).success(function(data){
      $('#number_of_likes').text($numberOfLikes - 1)
    })
  }

  $this.children("i").toggleClass("fa-thumbs-o-up").toggleClass("fa-thumbs-up")

}


$(function(){
  $('#like').on('click', likeRating)
  $('#unlike').on('click', unlikeRating)
})

function destroyComment(){
  $this = $(this)
  commentId = $this.data("id");
  request("DELETE", "/comments/"+commentId, null).success(function(data){
      $this.parent().parent().remove()
    })
} 


function getComments(){
  request("GET", "/comments?imageId="+ $('.image-container').data("photo-id"), null).success(function(data){
      $.each(data, function(i, comment){
        appendNewComment(comment)
      })
  })
}

function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: "json",
    data: data,
  })
}

function createComment(){

  request("POST", "/comments", {
    comment:{
      content: $("#new-comment").val(),
      photo_id: $("#currentphoto").val()
    }
  }).success(function(data){
    $('#new-comment').val("")
    appendNewComment(data)
  })
} 

function appendNewComment(data){
  
  $('<tr><td><img src='+ data.user.profile_image.thumb.url +'></td><td>'+ data.user.name +' says: </br>'+ data.content +'</td>'+
    '<td><button class="destroy" data-id="'+ data.id +'"><i class="fa fa-times"></i></button></td></tr>').prependTo("#comment-list")

}



$(function(){
  $('#new-comment').on('keypress', function (event) {
    if(event.which == '13') createComment()
  });
  $('#comment-list').on('click', ".destroy", destroyComment);
  getComments();
})


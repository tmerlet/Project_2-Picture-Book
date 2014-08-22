// Comments do not have their own page, but show up dynamically on the photo - show page.  


// this function deletes a comment - TM
function destroyComment(){
  $this = $(this)
  commentId = $this.data("id");
  request("DELETE", "/comments/"+commentId, null).success(function(data){
      $this.parent().parent().remove()
    })
} 

// this function is used to list the comments when the page is loaded - TM
function getComments(){
  request("GET", "/comments?imageId="+ $('.image-container').data("photo-id"), null).success(function(data){
      $.each(data, function(i, comment){
        appendNewComment(comment)
      })
  })
}

// this function is the Ajax request used by all the other functions - TM
function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: "json",
    data: data,
  })
}

// this function creates a new comment and appends it to the end of the comment list. 
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


// this function is used by other functions to create the HTML and add it to the page. -TM
function appendNewComment(data){
  $('<tr><td><img src='+ data.user.profile_image.thumb.url +'></td><td>'+ data.user.name +' says: </br>'+ data.content +'</td>'+
    '<td><button class="destroy" data-id="'+ data.id +'"><i class="fa fa-times"></i></button></td></tr>').prependTo("#comment-list")

}


// if key 13, Enter, is pressed, a comment is created.  in addition an event listener is setup to monitor for comment deletes.  
$(function(){
  $('#new-comment').on('keypress', function (event) {
    if(event.which == '13') createComment()
  });
  $('#comment-list').on('click', ".destroy", destroyComment);
  getComments();
})


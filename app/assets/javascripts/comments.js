
function destroyComment(){
  $this = $(this)
  commentId = $this.data("id");
  request("DELETE", "/comments/"+commentId, null).success(function(data){
      $this.parent().remove()
    })
}



function getComments(){
  request("GET", "/comments", null).success(function(data){
      $.each(data, function(i, task){
        appendNewComment(task)
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
    debugger
    $('#new-comment').val("")
    appendNewComment(data)
  })
}

function appendNewComment(data){
  
  $('<li><label><img src='+ data.user.profile_image.thumb.url +'> says: </label><label>'+ data.user.name +' says: </label><label>'+ data.content +'</label>'+
      '<button class="destroy" data-id="'+ data.id +'"><i class="fa fa-times"></i></button></li>').prependTo("#comment-list")
  
  // REFERENCE CODE TO REFER TO LATER TO INCREASE FUNCTIONALITY
  // $('<li class="'+ (data.done == true ? "completed" : "") + '">'+
  //     '<input class="toggle" type="checkbox" data-id="'+ data.id +'" '+ (data.done == true ? 'checked="checked"' : "") + '>'+
  //     '<label>'+ data.title +'</label>'+
  //     '<button class="destroy" data-id="'+ data.id +'"></button>'+
  //   '</li>').prependTo("#todo-list")
}



$(function(){
  $('#new-comment').on('keypress', function (event) {
    if(event.which == '13') createComment()
  });
  $('#comment-list').on('click', ".destroy", destroyComment);
  getComments();
})


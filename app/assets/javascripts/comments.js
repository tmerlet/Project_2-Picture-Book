

function request(method, url, data){
  return $.ajax({
    method: method,
    url: url,
    dataType: "json",
    data: data,
  })
}


function createComment(){
  // debugger
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

  $('<li><label>'+ data.content +'</label></li>').prependTo("#comment-list")

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
})
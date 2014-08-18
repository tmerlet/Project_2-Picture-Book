$(function(){
  autoComplete();
})

function autoComplete(){
  $( "#autocomplete" ).autocomplete({
    source: [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
  });
}
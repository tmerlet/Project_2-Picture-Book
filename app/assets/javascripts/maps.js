$(function(){
  if(window.photo){
  

    function marker(myLatlng, map){
      marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title:"Hello World!"
      })
    }

    function initialize() {
      var map;


      if(!(window.photo.latitude && window.photo.longitude)){
        var myLatlng = new google.maps.LatLng(48.0658107, -0.1015987);
        var zoomlevel = 1
      }else{
        var myLatlng = new google.maps.LatLng(window.photo.latitude, window.photo.longitude);
        var zoomlevel = 10
      }

      var mapOptions = {
        center: myLatlng,
        zoom: zoomlevel
      };
      
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 

      if((window.photo.latitude && window.photo.longitude)) {
        marker(myLatlng, map);
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }

})

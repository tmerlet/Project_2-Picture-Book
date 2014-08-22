
// this file contains the javascript required to show the map on the photo show page.  -TM

//  window.photo stops this code from running unless it is on the photo - show page. - TM
$(function(){
  if(window.photo){
  
// this function creates the market pointing to specific coordinates. -TM
    function marker(myLatlng, map){
      marker = new google.maps.Marker({
         position: myLatlng,
         map: map
      })
    }

    function initialize() {
      var map;

//  if no coordinates are passed in, use generic coordinates. -TM
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

// draw a map on the canvas -TM
      map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
// if we have spefic coordinates, create a marker.  -TM
      if((window.photo.latitude && window.photo.longitude)) {
        marker(myLatlng, map);
      }
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }

})

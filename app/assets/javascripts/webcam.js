// This Javascript file controles the webcam on the signup for.  you can view the form in devise, registration new and edit.  


var imageString = null;

function onFailure(err) {
    alert("The following error occured: " + err.name);
}

// once the page has loaded, checks to see whether the browser supports video. 
jQuery(document).ready(function () {
  if(window.user){
    var video = document.querySelector('#webcam');
    navigator.getUserMedia = (navigator.getUserMedia ||
                      navigator.webkitGetUserMedia ||
                      navigator.mozGetUserMedia ||
                      navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
        navigator.getUserMedia({ video: true }, function (localMediaStream) {
          video.src = window.URL.createObjectURL(localMediaStream);
        }, onFailure);
    }
    else {
        alert('OOPS No browser Support');
    }

// defines some variables that refer to objects on the page.  
    var button = document.querySelector('#screenshot-button');
    var webbutton = document.querySelector('#showwebcam-button');
    var canvas = document.querySelector('#screenshot-canvas');
    var ctx = canvas.getContext('2d');

// defines what happens when the 'capture' button is clicked     
    function snapshot(event) {
      event.preventDefault();

// swaps between the webcam and screenshot
      $('#screenshot-canvas').toggleClass('dispnone')
      $('#webcam').toggleClass('dispnone')

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      ctx.drawImage(video, 0, 0);
      imageString = canvas.toDataURL('image/png')
      // console.log("imageString", imageString)
      $('#canvasimage').attr('value', imageString)


      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      // document.querySelector('img').src = canvas.toDataURL('image/webp');
    }

// shows the webcam
    function showwebcam(event){
      event.preventDefault();
      $('#video').toggleClass('dispnone')
    }

    button.addEventListener('click',snapshot, false);
    webbutton.addEventListener('click',showwebcam, false);
  }
});



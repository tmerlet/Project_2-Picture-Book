var imageString = null;

function onFailure(err) {
    alert("The following error occured: " + err.name);
}

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

    var button = document.querySelector('#screenshot-button');
    var canvas = document.querySelector('#screenshot-canvas');
    var ctx = canvas.getContext('2d');
     
    function snapshot() {

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      //  canvas.width = 300 didn't work the canvas was that size but the image was badly cropped
      // 
      ctx.drawImage(video, 0, 0);
      imageString = canvas.toDataURL('image/png')
      console.log("imageString", imageString)
      $('#canvasimage').attr('value', imageString)


      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      // document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
    button.addEventListener('click',snapshot, false);
  }
});



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
        navigator.getUserMedia
                      (
                        { video: true },
                        function (localMediaStream) {
                            video.src = window.URL.createObjectURL(localMediaStream);

                        }, onFailure);
    }
    else {
        alert('OOPS No browser Support');
    }

    var button = document.querySelector('#screenshot-button');
    var canvas = document.querySelector('#screenshot-canvas');
    var ctx = canvas.getContext('2d');
     
    button.addEventListener('click',snapshot, false);
     
    function snapshot() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    }
  }
});

// jQuery(document).ready(function () {
//   if(window.photo){
//     var video = document.querySelector('#webcam');
//     navigator.getUserMedia = (navigator.getUserMedia ||
//                       navigator.webkitGetUserMedia ||
//                       navigator.mozGetUserMedia ||
//                       navigator.msGetUserMedia);
//     if (navigator.getUserMedia) {
//         navigator.getUserMedia
//                       (
//                         { video: true },
//                         function (localMediaStream) {
//                             video.src = window.URL.createObjectURL(localMediaStream);

//                         }, onFailure);
//     }
//     else {
//         alert('OOPS No browser Support');
//     }

//     var button = document.querySelector('#screenshot-button');
//     var canvas = document.querySelector('#screenshot-canvas');
//     var ctx = canvas.getContext('2d');
     
//     button.addEventListener('click',snapshot, false);
     
//     function snapshot() {
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     ctx.drawImage(video, 0, 0);
//     }
//   }
// });

var fs = require('fs');
var gcloud = require('gcloud');
var storage = gcloud.storage;
var c = document.createElement('canvas');
var vid = document.getElementById("vid");
navigator.getUserMedia = navigator.webkitGetUserMedia;

// From elsewhere
var bucket = new storage.Bucket({
  bucketName: 'ryanseys-selfies',
  keyFilename: './secrets.json'
});

var errorCallback = function(e) {
  console.log('An error occured! :(', e);
};

// Get user media automatically
if (navigator.getUserMedia) {
  navigator.getUserMedia({ audio: false, video: true }, function(stream) {
    vid.src = window.URL.createObjectURL(stream);
  }, errorCallback);
} else {
  alert('No getUserMedia =(');
}

/**
 * Snap a photo and upload to Google Cloud Storage
 */
function snap() {
  vid.pause(); // pause screen while uploading

  c.width = vid.clientWidth;
  c.height = vid.clientHeight;
  c.getContext("2d").drawImage(vid, 0, 0);

  var imgData = c.toDataURL().replace(/^data:image\/png;base64,/, "");
  var filename = 'selfie-' + (new Date()).getTime().toString() + '.png';

  bucket.write(filename, {
    data: new Buffer(imgData, 'base64'),
    metadata: {
      contentType: 'image/png'
    }
  }, function(err, result) {
    vid.play(); // play the video again

    if(err) {
      console.log(err);
    } else {
      console.log('Wrote image to cloud', result);
      bucket.stat(filename, function(err, result) {
        console.log(JSON.stringify(result));
      });
    }
  });
}

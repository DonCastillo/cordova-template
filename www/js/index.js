
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var options = {
        quality: 100,
    }

    $('#takePhoto').on('click', takePhoto);

    function takePhoto() {
        console.log('take a pic');
        navigator.camera.getPicture(onSuccess, onError, options);
    }

    function onSuccess(imageData) {
        console.log(imageData);
        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html
             $('#gallery').append(`<img src="${myNewImage}">`)
        }, onError);
    }
    function onError(message) {
       alert('Photo not taken because ' + message); 
    }
}

onDeviceReady();
var config = require('../../config/config'),
    ExifImage = require('exif').ExifImage,
    geolib = require('geolib'),
    googleMapsApi = require(config.ROOT + '/app/services/google-maps-api');


var exifCollector = {
    init: function (image) {
    try {
        new ExifImage({ image : image }, function (error, exifData) {
            if (error) {
                console.log(error);
                console.log('Error: '+error.message);
            } else {
                var sexagesimalLatitude = generateSexagesimal(exifData.gps.GPSLatitude,exifData.gps.GPSLatitudeRef);
                var sexagesimalGPSLongitude = generateSexagesimal(exifData.gps.GPSLongitude,exifData.gps.GPSLongitudeRef);
                var decimalLatitude = geolib.sexagesimal2decimal(sexagesimalLatitude);
                var decimalLongitude = geolib.sexagesimal2decimal(sexagesimalGPSLongitude);
                
                //cities will need google mapds
                googleMapsApi.requestMapData(function(error,res){
                   console.log(res.body);
                },
                {
                    latlng: decimalLatitude +','+decimalLongitude
                });

                
            }
        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
  }

} 

function generateSexagesimal(gps, ref) {
  return gps[0] + '° ' + gps[1] + '\' ' + gps[2] + '" ' + ref;
}

module.exports = {
    init: exifCollector.init
};



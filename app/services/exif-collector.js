var config = require('../../config/config'),
    ExifImage = require('exif').ExifImage,
    cities = require('cities'),
    geolib = require('geolib');


var exifCollector = {
    init: function (image) {
    try {
        new ExifImage({ image : image }, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else
                console.log(exifData)
                var sexagesimalLatitude = generateSexagesimal(exifData.gps.GPSLatitude,exifData.gps.GPSLatitudeRef);
                var sexagesimalGPSLongitude = generateSexagesimal(exifData.gps.GPSLongitude,exifData.gps.GPSLongitudeRef);
                var decimalLatitude = geolib.sexagesimal2decimal(sexagesimalLatitude);
                var decimalLongitude = geolib.sexagesimal2decimal(sexagesimalGPSLongitude);
                
                var city = cities.gps_lookup(decimalLatitude,decimalLongitude)
                console.log(decimalLatitude,decimalLongitude); 

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



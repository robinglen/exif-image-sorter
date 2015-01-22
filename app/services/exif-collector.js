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
                var sexagesimalLatitude = generateSexagesimal(exifData.gps);
                var decimalLatitude = geolib.sexagesimal2decimal(sexagesimalLatitude);
                console.log(decimalLatitude)
                //var city = cities.gps_lookup(exifData.gps.GPSLatitude, exifData.image.gps.GPSLongitude)
                //console.log(exifData.gps.GPSLatitude[0]); 

        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }
  }

} 

function generateSexagesimal(gps) {
  return gps.GPSLatitude[0] + '° ' + gps.GPSLatitude[1] + '\' ' + gps.GPSLatitude[2] + '" ' + gps.GPSLatitudeRef;
}

module.exports = {
    init: exifCollector.init
};



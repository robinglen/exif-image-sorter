var config = require('../../config/config'),
    fs = require('fs-extra'),
    moment = require('moment'),
    path =config.ROOT + 'dist/';


var storeImages = {
    init: function (imageMeta) {
      var momentDate = moment(imageMeta.exif.CreateDate, "YYYY:MM:DD HH:mm:ss").format('DD_MM_YYYY');
      fs.copy(imageMeta.path, path + momentDate + imageMeta.type, function(err) {
        if (err) return console.error(err)
        console.log("success!")
      }) 
    }

}

module.exports = {
    init: storeImages.init
};



var config = require('../../config/config'),
    fs = require('fs-extra'),
    moment = require('moment'),
    path =config.ROOT + 'dist/';


var storeImages = {
    init: function (imageMeta) {
      var momentDate = moment(imageMeta.exif.CreateDate, "YYYY:MM:DD HH:mm:ss").format('DD_MM_YYYY');
      var dataFile = path + momentDate +'.JSON';
      var imageFile = path + momentDate + imageMeta.type;
      fs.ensureFile(dataFile,  function (err) {
        if (err) return console.error(err)
          fs.writeJson(dataFile,imageMeta, function (err) {
            if (err) return console.error(err)
            console.log("Data success!")
          })
      })
      fs.copy(imageMeta.path, imageFile, function(err) {
        if (err) return console.error(err)
        console.log("Image success!")
      }) 
    }

}

module.exports = {
    init: storeImages.init
};



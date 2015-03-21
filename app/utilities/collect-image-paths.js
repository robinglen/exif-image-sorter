var config = require('../../config/config'),
    fs = require('fs');

var imagePathBuilder = {
    init: function (imageFolder) {
        var images = fs.readdirSync(config.ROOT + '/images');
        return images;
  }

} 



module.exports = {
    init: imagePathBuilder.init
};



var config = require('../../config/config'),
    fs = require('fs'),
    mime = require('mime');

var imagePathBuilder = {
    init: function (imageFolder) {
    	var imageDirectory = config.ROOT + 'images';
        var images = fs.readdirSync(imageDirectory);
        var imageArr = [];

        images.forEach(function(image){
        	var imagePath = imageDirectory + '/' + image;
        	var mimeType = mime.lookup(imagePath);
        	if(mimeType.indexOf("image") > -1) {
				imageArr.push(imagePath)
        	};
        })
        return imageArr;
  }

} 



module.exports = {
    init: imagePathBuilder.init
};



'use strict';
var config = require('./config/config'),
	exifCollector = require(config.ROOT + '/app/services/exif-collector'),
	imageArr = require(config.ROOT + '/app/utilities/collect-image-paths').init();


exifCollector.init(imageArr);


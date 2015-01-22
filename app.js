'use strict';
var config = require('./config/config'),
	exifCollector = require(config.ROOT + '/app/services/exif-collector');

exifCollector.init(config.ROOT + '/images/IMG_0005.JPG');
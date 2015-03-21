var request = require('request'),
    url = require('url');


function requestMapData (callback,opts) {
  var path = url.format({
    protocol: 'http',
    pathname: '//maps.googleapis.com/maps/api/geocode/json',
    query: opts
  });
  request(path, function (error, res, body) {
      if (!error && res.statusCode == 200) {
        callback(null,{res:res,body:body}) ;
      } else {
        callback(error,{
          res:{statusCode:404},
          body: error
        });
      }
  })
};

module.exports = {
  requestMapData:requestMapData
};
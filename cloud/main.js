var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
*/

/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  var cfg = require("config.js");
  return callback(null, {config: cfg.config});
};

exports.becomeMentor = function(params, callback){

    return callback(null, {"message": "Added as mentor"});
};

exports.findMentor = function(params, callback){

    return callback(null, {"mentors": [
        {"displayName": "Monica Wilkinson"}
    ]});
};


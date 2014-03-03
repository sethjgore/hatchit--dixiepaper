/**
 * Middleman taks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  dev: {
    options:{
      mangle: false
    },
    files: {
      '_themes/darklemon/js/darklemon.js' : ['_themes/darklemon/js/vendor/*.js', '_themes/darklemon/js/all.js']
    }
  }
}
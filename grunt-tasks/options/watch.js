/**
 * WATCH tasks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  options: {
    livereload: true,
  },
  scripts : {
    files: ['js/dixiepaper.js'],
    tasks: ['uglify']
  },
  haml : {
    files: ['haml/*.haml'],
    tasks : ['haml:layouts', 'haml:templates', 'haml:partials']
  },
  sass : {
    files: ['sass/**/**/*.{sass, scss}'],
    tasks : ['sass:dist']
  },
  coffee : {
    files: ['_themes/**/js/*.coffee'],
    tasks: ['coffee']
  },
  livereload: {
    files: ['*.html', '*.php', 'js/**/*.{js,json}', '*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
    options: {
      livereload: true
    }
  }
}
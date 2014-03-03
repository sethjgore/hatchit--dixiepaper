/**
 * COPY tasks configuration
 */

'use strict';

var config = require('../config');

module.exports = {
  build: {
    cwd: 'source',
    src: [
      '_add-ons/**',
      '_app/**',
      '_cache/**',
      '_config/**',
      '_content/**',
      '_logs/**',
      '_themes/darklemon/**',
      'admin/**',
      'assets/**',
      '*.php',
      'htaccess'
    ],
    dest: ['remote','deploy'],
    expand: true
  }
}
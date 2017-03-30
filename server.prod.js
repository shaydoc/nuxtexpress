'use strict';

var fs = require('fs');
var Nuxt = require('nuxt');
var resolve = require('path').resolve;
var app = require('express')();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);
// Import API Routes
app.use('/api', require('./api/index'));

// Import and Set Nuxt.js options
var rootDir = resolve('.');
var nuxtConfigFile = resolve(rootDir, 'nuxt.config.js');

var options = {};
if (fs.existsSync(nuxtConfigFile)) {
  options = require(nuxtConfigFile);
}
if (typeof options.rootDir !== 'string') {
  options.rootDir = rootDir;
}
options.dev = false; // Force production mode (no webpack middleware called)

var nuxt = new Nuxt(options);
nuxtConfigFile.dev = false;
app.use(nuxt.render);

// Build only in dev mode
//if (nuxtConfigFile.dev) {
// nuxt.build()
// .catch((error) => {
//   console.error(error) // eslint-disable-line no-console
//   process.exit(1)
// })
//}

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

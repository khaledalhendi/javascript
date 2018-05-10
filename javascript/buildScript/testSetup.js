//This file isn't transplited, so must use CommonJS and ES5

//Register babel to transip;le before our tests run. 
require('babel-register')(); 

//disable webpack features that Mocha diesn't understand
require.extensions['.css'] = function() {}; 

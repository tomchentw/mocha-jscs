"use strict";
/**
 * __template__gist__: https://gist.github.com/tomchentw/0dc24c30955c1a6c94d4#file-test__index-js
 */
describe("mocha-jscs", function() {
  require("mocha-jshint")(["./lib/"]);
  require("../lib")(["./lib/"]);
  require("../lib")(["./lib/index.js"]);
});

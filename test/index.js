"use strict";

describe("mocha-jscs", function() {
  require("mocha-jshint")({
  	paths: ["./lib/"],
  });
  require("../lib")(["./lib/"]);
  require("../lib")(["./lib/index.js"]);
});

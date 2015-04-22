"use strict";
var Path = require("path"),
    Checker = require("jscs"),
    ConfigFile = require("jscs/lib/cli-config"),
    checker;

module.exports = function (paths) {
  describe("jscs", function () {
    checker = new Checker();
    checker.registerDefaultRules();
    checker.configure(ConfigFile.load());

    paths = paths || ["."];
    paths.forEach(runForPath);
  });
};

function runForPath (path) {
  it("should pass for " + ("." === path ? "working directory" : path), function (done) {
    var error = new Error(""),
        promise;
    error.stack = "";

    promise = checker.checkDirectory(path);

    promise.then(function (errors) {
      errors.forEach(function (err) {
        if (!err.isEmpty()) {
          err.getErrorList().forEach(function (errInstance) {
            error.stack += err.explainError(errInstance);
            error.stack += "\n";
          });
        }
      });
      if (error.stack) {
        done(error);
      } else {
        done();
      }
    }, function () {
      error.message = "jscs failed unexpectedly.";
      done(error);
    });
  });
}

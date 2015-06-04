"use strict";

var Checker = require("jscs"),
    ConfigFile = require("jscs/lib/cli-config");

module.exports = function (_paths_) {
  var paths = _paths_ || ["."];

  describe("jscs", function () {
    var checker = new Checker();
    checker.registerDefaultRules();
    checker.configure(ConfigFile.load());

    paths.forEach(runForPath.bind(null, checker));
  });
};

function runForPath (checker, path) {
  it("should pass for " + ("." === path ? "working directory" : path), function (done) {
    checker.checkPath(path)
      .then(formatErrors, handleRejection)
      .then(done);

    function formatErrors (errors) {
      return errors.reduce(function (acc, error) {
        if (!error.isEmpty()) {
          if (!acc) {
            acc = new Error("");
            acc.stack = "\n";// fixed some line break issue
          }
          error.getErrorList().forEach(function (detailedError) {
            acc.stack += error.explainError(detailedError);
            acc.stack += "\n";
          });
        }
        return acc;
      }, null);
    }

    function handleRejection (reason) {
      return new Error(reason || "jscs failed unexpectedly.");
    }
  });
}

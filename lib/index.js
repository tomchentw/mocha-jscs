var Path = require("path"),
    execFile = require("child_process").execFile;

module.exports = function (paths) {
  describe("jscs", function () {
    paths = paths || ["."];
    paths.forEach(runForPath);
  });
};

function runForPath (path) {
  it("should pass for " + ("." === path ? "working directory" : path), function (done) {
    var error = new Error("");

    execFile(
      require.resolve("jscs/bin/jscs"),
      [path, "--verbose"],
      onProcessFinished
    );

    function onProcessFinished (_, stdout, stderr) {
      if (_) {
        error.stack = stdout;
        throw error;
      } else {
        done();
      }
    }
  });
}

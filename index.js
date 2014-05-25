"use strict";

var gitExecute = require('git-execute');

module.exports = function(repoPath, rev, callback) {
  var args = ["ls-tree", (rev || "HEAD"), "-r", "--name-only"];

  gitExecute(repoPath, args, function(err, stdout, stderr) {
    if (err) { return callback(err); }

    callback(null, stdout.trim().split('\n').length);
  });
}

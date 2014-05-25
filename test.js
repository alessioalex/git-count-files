"use strict";

var proxyquire = require('proxyquire');
var should = require('should');

describe('git-count-files', function() {
  it('should delegate correctly', function(done) {
    var repoPath = '/home/node.git';
    var rev = 'master';

    var gitCountFiles = proxyquire.load('./', {
      'git-execute': function(path, args, cb) {
        path.should.eql(repoPath);
        args.should.eql(["ls-tree", rev, "-r", "--name-only"]);

        var files = ".gitignore\nREADME.md\nexample.js\nindex.js";
        files += "\npackage.json\ntest.js";

        cb(null, files);
      }
    });

    gitCountFiles(repoPath, rev, function(err, files) {
      files.should.eql(6);

      done();
    });
  });
});

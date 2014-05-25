"use strict";

var gitCountFiles = require('./');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitCountFiles(repoPath, rev, function(err, files) {
  if (err) { throw err; }

  console.log('Total files for %s#%s: \n  = %s', repoPath, rev, files);
});

# git-count-files

Get the total number of files for a repo and a specific revision by shelling out to git.

## Usage

```js
gitCountFiles(repoPath, revision, callback);
```

Example

```js
var gitCountFiles = require('git-count-files');
var path = require('path');
var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
var rev = process.env.REV || 'master';

gitCountFiles(repoPath, rev, function(err, files) {
  if (err) { throw err; }

  console.log('Total files for %s#%s: \n  = %s', repoPath, rev, files);
});
```

## Tests

```
npm test
```

## License

MIT

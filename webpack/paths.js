const Path = require('path');

const root = Path.dirname(__dirname);
const src = Path.join(root, 'src');
const dist = Path.join(root, 'docs');

const basePaths = {
  root,
  src,
  dist
};

module.exports = {
  ...Object.keys(basePaths).reduce((pathFunctions, basePathName) => {
    pathFunctions[basePathName] = (...trailers) => Path.join(basePaths[basePathName], ...trailers);
    return pathFunctions;
  }, {})
};

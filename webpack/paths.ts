import * as Path from 'path';

const root = Path.dirname(__dirname);
const src = Path.join(root, 'src');
const dist = Path.join(root, 'dist');

const basePaths: {[key: string]: string} = {
  root,
  src,
  dist
};

export const paths: {[key: string]: (...trailers: string[]) => string} =
  Object.keys(basePaths).reduce((pathFunctions, basePathName) => {
    pathFunctions[basePathName] = (...trailers: string[]) => Path.join(basePaths[basePathName], ...trailers);
    return pathFunctions;
  }, {});

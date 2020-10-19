const path = require('path');

exports.repoRoot = path.resolve(__dirname, '../');

exports.srcRoot = path.join(exports.repoRoot, 'src/');
exports.distRoot = path.join(exports.repoRoot, 'dist/');
exports.appRoot = path.join(exports.repoRoot, 'src/app/');

exports.libRoot = path.join(exports.repoRoot, 'lib/');
exports.es5Root = path.join(exports.repoRoot, 'es5/');

exports.componentRoot = path.join(exports.srcRoot, 'lib/');
exports.cssRoot = path.join(exports.repoRoot, 'css/');

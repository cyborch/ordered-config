const path = require('path');
const fs = require('fs');

const base = path.join(process.cwd(), 'config');
const environment = process.env.NODE_ENV || 'development';
const configurations = [
  path.join(base, 'default.json'),
  path.join(base, environment + '.json'),
  path.join(base, 'local.json')
];

module.exports = configurations
  .filter(fs.existsSync)  // Filter non-existent files out of the list
  .map(require)           // Map file names to objects loaded from json files
  .reduce(Object.assign); // Merge objects, later object properties override earlier properties

import 'reflect-metadata';
const { relative, basename } = require('path');
const { readFileSync } = require('fs');

require('source-map-support').install({
  retrieveSourceMap: function(source: string) {
    if (source.indexOf('.next') > -1) {
      const rel = relative(process.cwd(), source);
      const mapPath = `${rel}.map`;
      return {
        url: basename(rel),
        map: readFileSync(mapPath, 'utf8'),
      };
    } else {
      return null;
    }
  },
});

export {};

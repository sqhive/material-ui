/**
 *
 */

'use strict';

import fs from 'fs'
import path from'path'
import gulp from 'gulp'

import browserify from 'browserify'
import babelify from 'babelify'
import vss from 'vinyl-source-stream'
import uglify from 'gulp-uglify'

/**
 * Build the target.
 */
gulp.task('build', () => {
  return browserify({
      // The target.
      entries: path.join('targets', '/standalone.js'),
      // Ignore specs
      ignore: '*.spec.js',
      // Relative paths.
      paths: ['./', './node_modules'],
      // Files to process
      extensions: ['.js']
    })
    // Transform
    .transform(babelify.configure({
      "presets": ["es2015", "stage-1", "react"],
      "plugins": [
        [
            "transform-replace-object-assign",
            "simple-assign"
        ],
        "transform-react-remove-prop-types",
        "transform-dev-warning"
      ]
    }))
    // Bundle everything together
    .bundle()
    // Rename
    .pipe(vss('react.js'))
    // Output
    .pipe(gulp.dest('./build'))
});

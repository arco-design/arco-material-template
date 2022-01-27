const path = require('path');
const gulp = require('gulp');
const gulpRename = require('gulp-rename');

/**
 * Copy Arco Material project files to a specify directory
 * @param targetDir { string } Path of project directory
 * @param framework { react | vue } Framework need to be used
 * @returns { Promise<void> }
 */
module.exports = function copyProjectFiles({ targetDir, framework = 'react' }) {
  if (!targetDir) {
    console.error('Directory name for new project is necessary!');
    process.exit(0);
  }

  const sourcePath = path.resolve(__dirname, `../${framework}`);

  return new Promise((resolve, reject) => {
    gulp
      .src([`${sourcePath}/{,.}[!.,!..]*`, `${sourcePath}/{,.}[!.,!..]*/**`], { base: sourcePath })
      .pipe(
        gulpRename(({ dirname, basename, extname }) => {
          return {
            extname,
            dirname,
            basename: basename === 'gitignore' ? '.gitignore' : basename,
          };
        })
      )
      .pipe(gulp.dest(targetDir))
      .on('end', resolve)
      .on('error', reject);
  });
};

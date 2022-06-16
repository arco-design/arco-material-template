const fs = require('fs-extra');
const path = require('path');
const gulp = require('gulp');
const gulpIgnore = require('gulp-ignore');
const gulpRename = require('gulp-rename');
const gulpReplace = require('gulp-replace');

const SHORTHAND_MAP_PROJECT_TYPE = {
  isolate: 'i',
  monorepo: 'm',
};
const SHORTHAND_MAP_MATERIAL_TYPE = {
  block: 'b',
  page: 'p',
  component: 'c',
  library: 'l',
  utils: 'u',
};

// RegExp to match suffix like $-bpc, $ means all
const REGEXP_SUFFIX = /\(((?:\$|\w+)-(?:\$|\w+))\)$/;

const DEFAULT_PACKAGE_NAME = 'my-first-material';
const PLACEHOLDER_PACKAGE_NAME = '@CONST_PACKAGE_NAME@';

/**
 * Copy Arco Material project files to a specify directory
 * @param packageName { string } Package name for material
 * @param targetDir { string } Path of project directory
 * @param type { block | page | component | library } Template type
 * @param framework { react | vue } Framework need to be used
 * @param isForMonorepo { boolean } Whether this package is in a Lerna project
 * @returns { Promise<void> }
 */
module.exports = function copyProjectFiles({
  packageName = DEFAULT_PACKAGE_NAME,
  targetDir,
  type,
  framework = 'react',
  isForMonorepo,
}) {
  type = SHORTHAND_MAP_MATERIAL_TYPE[type] ? type : 'component';
  targetDir = targetDir || path.resolve(packageName);

  const ignoreDirectories = [];
  const sourcePath = path.resolve(__dirname, `../${framework}`);

  return new Promise((resolve, reject) => {
    gulp
      .src([`${sourcePath}/{,.}[!.,!..]*`, `${sourcePath}/{,.}[!.,!..]*/**`], { base: sourcePath })
      .pipe(
        gulpIgnore.include(({ path: filePath }) => {
          for (const ignoreDirectoryPath of ignoreDirectories) {
            // This file is in a directory which should be ignored
            if (!path.relative(ignoreDirectoryPath, filePath).startsWith('..')) {
              return false;
            }
          }

          const isDirectory = fs.lstatSync(filePath).isDirectory();
          const relativePath = path.relative(sourcePath, filePath);
          const suffixMatches = relativePath
            .replace(path.extname(filePath), '')
            .split('/')
            .pop()
            .match(REGEXP_SUFFIX);

          // $ means all
          const [flagProject, flagType] = ((suffixMatches && suffixMatches[1]) || '$-$').split('-');
          const isValid =
            (flagType === '$' || flagType.indexOf(SHORTHAND_MAP_MATERIAL_TYPE[type]) > -1) &&
            (flagProject === '$' ||
              flagProject.indexOf(
                SHORTHAND_MAP_PROJECT_TYPE[isForMonorepo ? 'monorepo' : 'isolate']
              ) > -1);

          if (isDirectory && !isValid) {
            ignoreDirectories.push(filePath);
          }

          return isValid;
        })
      )
      .pipe(
        gulpReplace(/@CONST_[^@]*@/g, (str) => {
          switch (str) {
            case PLACEHOLDER_PACKAGE_NAME:
              return packageName;
            default:
              return str;
          }
        })
      )
      .pipe(
        gulpRename(({ dirname, basename, extname }) => {
          return {
            extname,
            basename: basename === 'gitignore' ? '.gitignore' : basename.replace(REGEXP_SUFFIX, ''),
            dirname: dirname
              .split(path.sep)
              .map((item) => item.replace(REGEXP_SUFFIX, ''))
              .join(path.sep),
          };
        })
      )
      .pipe(gulp.dest(targetDir))
      .on('end', resolve)
      .on('error', reject);
  });
};

const path = require('path');
const fs = require('fs-extra');
const gulp = require('gulp');
const replace = require('gulp-replace');

const PLACEHOLDER_UTIL_NAME = '@CONST_UTIL_NAME@';

const utilName = process.argv[2];
const pathTemplate = path.resolve(__dirname, 'template/util');
const pathTarget = path.resolve(__dirname, `../src/${utilName}`);
const pathUtilsEntry = path.resolve(__dirname, '../src/index.ts');

if (!utilName) {
  console.error('Error: 请提供函数名称！');
  process.exit();
}

if (fs.pathExistsSync(pathTarget)) {
  console.error('Error: 此函数已经存在！');
  process.exit();
}

// 拷贝、替换模板内容
function copyUtilSrc() {
  fs.copySync(pathTemplate, pathTarget);
  return gulp
    .src([`${pathTarget}/**/*`], {
      base: pathTarget,
      allowEmpty: true,
    })
    .pipe(replace(PLACEHOLDER_UTIL_NAME, utilName))
    .pipe(gulp.dest(pathTarget))
    .on('error', (err) => console.error(err));
}

// 在工具库入口中对外暴露此工具
function registerUtil() {
  fs.appendFileSync(pathUtilsEntry, `export { default as ${utilName} } from \'./${utilName}\';\n`);
}

gulp.series(
  copyUtilSrc,
  gulp.parallel(() => {
    registerUtil();
    // eslint-disable-next-line no-console
    console.log(`工具 ${utilName} 初始化完成！`);
    process.exit(0);
  })
)();

const path = require('path');
const fs = require('fs-extra');
const gulp = require('gulp');
const replace = require('gulp-replace');

const PLACEHOLDER_COMPONENT_NAME = '@CONST_COMPONENT_NAME@';

const componentName = process.argv[2];
const templatePath = path.resolve(__dirname, 'template');
const targetComponentPath = path.resolve(__dirname, `../components/${componentName}`);
const targetStoryPath = path.resolve(__dirname, `../stories`);

if (!componentName) {
  console.error('Error: 请提供组件名！');
  process.exit();
}

if (fs.pathExistsSync(targetComponentPath)) {
  console.error('Error: 此组件已经存在！');
  process.exit();
}

// 拷贝、替换组件模板内容
function copyComponentSrc() {
  fs.copySync(`${templatePath}/component`, targetComponentPath);
  return gulp
    .src([`${targetComponentPath}/**/*`], {
      base: targetComponentPath,
      allowEmpty: true,
    })
    .pipe(replace('@CONST_COMPONENT_NAME@', componentName))
    .pipe(gulp.dest(targetComponentPath))
    .on('error', (err) => console.error(err));
}

// 拷贝替换组件 Story
function copyComponentStory() {
  const targetStoryFilePath = `${targetStoryPath}/${componentName}.jsx`;
  fs.copySync(`${templatePath}/story.jsx`, targetStoryFilePath);
  return gulp
    .src(targetStoryFilePath)
    .pipe(replace(PLACEHOLDER_COMPONENT_NAME, componentName))
    .pipe(gulp.dest(`${targetStoryPath}`))
    .on('error', (err) => console.error(err));
}

// 在组件库入口中对外暴露此组件
function registerComponent() {
  fs.appendFileSync(
    path.resolve(__dirname, '../components/index.tsx'),
    `export { default as ${componentName} } from \'./${componentName}\';\n`
  );
}

gulp.series(
  gulp.parallel(copyComponentSrc, copyComponentStory),
  gulp.parallel(() => {
    registerComponent();
    // eslint-disable-next-line no-console
    console.log(`组件 ${componentName} 初始化完成！`);
    process.exit(0);
  })
)();

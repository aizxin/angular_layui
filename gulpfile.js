var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');
var del = require('del');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var fs = require('fs');
var assets = JSON.parse(fs.readFileSync('assets.json'));

//清空文件
gulp.task('clean', function(cb) {
  return del(['./dist/'], cb);
});
//拷贝Img文件
gulp.task('copyImg', ['clean'], function() {
  gulp.src(['./src/public/img/*.*'])
    .pipe(gulp.dest('./dist/assets/img/'));
});
//拷贝html文件
gulp.task('copyHtml', ['clean'], function() {
  gulp.src(['./src/app/templates/**/*.html'])
    .pipe(gulp.dest('./dist/templates'));
  gulp.src(['./src/*.html'])
    .pipe(gulp.dest('./dist/'));
});
//拷贝layui文件
gulp.task('copyLayui', ['clean'], function() {
  gulp.src(['./libs/layui/**/*.*'])
    .pipe(gulp.dest('./dist/assets/layui/'));
});
//压缩js
gulp.task('appJs', ['clean'], function() {
  //压缩内部js
  gulp.src(assets.appJs)
    .pipe(concat('app.js', {
      newLine: ';\n'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
});
//压缩外部js
gulp.task('assetsJs', ['clean'], function() {
  gulp.src(assets.assetsJs)
    .pipe(concat('assets.js', {
      newLine: ';\n'
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/assets/js/'));
});
//压缩css
gulp.task('appCss', ['clean'], function() {
  //压缩内部css
  gulp.src(assets.appCss)
    .pipe(concat('app.css', {
      newLine: '\n\n'
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/assets/css/'));
});
// //压缩外部css
// gulp.task('assetsCss', ['clean'], function() {
//   gulp.src(assets.assetsCss)
//     .pipe(concat('assets.css', {
//       newLine: '\n\n'
//     }))
//     .pipe(minifyCss())
//     .pipe(gulp.dest('./dist/assets/css/'));
// });
//压缩外部字体库
// gulp.task('assetsFonts', ['clean'], function() {
//   gulp.src(assets.assetsFonts)
//     .pipe(gulp.dest('./dist/assets/fonts/'));
// });
//监视文件变化
gulp.task('watch', ['clean'], function() {
  gulp.watch('./src/**/*.*', ['reload']);
});
gulp.task('reload', ['clean'], function() {
  runSequence(['build'], ['reload-browser']);
});
gulp.task('reload-browser', ['clean'], function() {
  browserSync.reload();
});
//编译
gulp.task('build', function() {
  runSequence(['assetsJs'], ['copyImg', 'appJs', 'appCss', 'copyHtml','copyLayui']);
});
//启动
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
    port: 8080
  });
});
//默认 gulp启动入口
gulp.task('default', function() {
  runSequence(['build'], ['serve', 'watch']);
  // console.log('ddd');
});
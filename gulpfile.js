/**
 * Created by byy on 2017/9/18.
 */
/**
 * 这个是一个固定的文件 gulpfile.js
 * gulp的主文件，用于注册任务的
 * gulp的机制就是将重复的工作抽象成一个个任务
 */

'use strict';

//此处代码都是有node执行
//载入gulp模块
var gulp = require('gulp');
/*gulp.task('copy',function(){
    //当gulp执行这个“copy”任务时会自动执行该函数
    //console.log('hello world');
    //合并，压缩之类的操作
    //复制文件
    //gulp.src 取一个文件
    //gulp.dest 是目的地

    gulp.src('src/index.html')
        .pipe(gulp.dest('dist/')); //将此处需要的操作传递出去；每个pipe就是一个环节
});

gulp.task('dist',function(){

    //当这个index.html文件变化，就去执行copy
    gulp.watch('src/index.html',['copy']);
});*/


/*gulp.task('less', function () {
    return gulp.src('./less/!**!/!*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./public/css'));
});*/


//自动压缩less文件
var less = require('gulp-less');//less变css
var cssnano = require('gulp-cssnano');//压缩文件

//var path = require('path');
gulp.task('style',function(){
    gulp.src('src/style/*.less')
        .pipe(less())
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('dist',function(){
    gulp.watch('src/style/*.less',['style']);
});


///////////////////////////////////////////////////
/*var concat = require('gulp-concat');//合并

gulp.task('scripts', function() {
    return gulp.src('./lib/!*.js')
        .pipe(concat('all.js'))//将文件合并成一个叫all.js文件
        .pipe(gulp.dest('./dist/'));//然后放到这个目录下
});*/

///////////////////////////////////////////////////////////////
//
var browserSync = require('browser-sync').create();

// 静态服务器 - 自动帮你起一个服务器页面出来
//所有的浏览器端包括手机端都将同步你的操作
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./" //静态服务器的根目录
        }
    });
});

// 代理
/*gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "你的域名或IP"
    });
});*/


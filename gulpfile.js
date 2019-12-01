const gulp = require("gulp")
const watch = require("gulp-watch")
const babel = require("gulp-babel")
const rollup = require("gulp-rollup")
const replace = require("rollup-plugin-replace")

const entry = "./src/server/**/*.js"
const configEntry = "./src/server/config/index.js"

function buildDev() {
  return watch(entry, {
    ignoreInitial: false
  }, function () {
    gulp.src(entry).pipe(babel({
      babelrc: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
      .pipe(gulp.dest('dist'))
  })
}

function buildProd() {
  return gulp.src(entry)
    .pipe(babel({
      babelrc: false,
      plugins: ["@babel/plugin-transform-modules-commonjs"]
    }))
    .pipe(gulp.dest('dist'))
}

function buildConfig() {
  return gulp.src(entry)
    .pipe(rollup({
      input: configEntry,
      output: {
        format: "cjs"
      },
      plugins: [
        replace({
          "process.env.NODE_ENV": JSON.stringify('production')
        })
      ]
    }))
    .pipe(gulp.dest('./dist'))
}

let build = gulp.series(buildDev)
if (process.env.NODE_ENV == "production") {
  build = gulp.series(buildProd, buildConfig)
}

gulp.task("default", build)
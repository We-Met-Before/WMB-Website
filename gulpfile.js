const gulp = require('gulp');
const tinypng = require('gulp-tinypng-compress');
const imageResize = require('gulp-image-resize');
const { src, dest, series, watch } = require('gulp');
const minifyJs = require('gulp-uglify');
const sourceMaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();

function compressImages() {
	return src('assets/images/*.{png,jpg,jpeg}')
		.pipe(
			tinypng({
				key: 'Bt7YfyhKTZqXBwb4D4d2bDGc2VwjW4PX',
				sigFile: 'assets/.tinypng-sigs',
				log: true,
			})
		)
		.pipe(dest('assets/compressed'));
}

function resizeLarge() {
	return src('assets/compressed/*.{png,jpg,jpeg}')
		.pipe(
			imageResize({
				width: 1000,
				quality: 1,
				rename: { suffix: '_large' },
			})
		)
		.pipe(dest('assets/compressed'));
}

function resizeMedium() {
	return src('assets/compressed/*_large.{png,jpg,jpeg}')
		.pipe(
			imageResize({
				width: 768,
				quality: 1,
				rename: { suffix: '_medium' },
			})
		)
		.pipe(dest('assets/compressed'));
}

function resizeSmall() {
	return src('assets/compressed/*_medium.{png,jpg,jpeg}')
		.pipe(
			imageResize({
				width: 575,
				quality: 1,
				rename: { suffix: '_small' },
			})
		)
		.pipe(dest('assets/compressed'));
}

function bundleJs() {
	return src('./js/*.js')
		.pipe(sourceMaps.init())
		.pipe(minifyJs())
		.pipe(concat('bundle.js'))
		.pipe(sourceMaps.write())
		.pipe(dest('./dist/js/'))
		.pipe(browserSync.stream());
}

function createStyles() {
	return src('./styles/scss/**/*.scss')
		.pipe(sourceMaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourceMaps.write())
		.pipe(
			autoprefixer({
				browsers: ['last 5 versions'],
				cascade: false,
			})
		)
		.pipe(dest('./dist/css/'))
		.pipe(browserSync.stream());
}

function minifyCss() {
	return src('./dist/css/*.css').pipe(cleanCSS()).pipe(dest('./dist/css/'));
}

function serve() {
	browserSync.init({
		server: {
			baseDir: './',
			index: 'index.html',
		},
	});
	watch('./styles/scss/**/*.scss', series(createStyles));
	watch('./*.html').on('change', browserSync.reload);
	watch('./js/*.js', series(bundleJs));
}

exports.default = series(
	createStyles,
	bundleJs,
	minifyCss,
	// compressImages,
	// resizeLarge,
	// resizeMedium,
	// resizeSmall,
	serve
);

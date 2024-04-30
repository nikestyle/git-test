import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './#src';

export const path = {
   build: {
      js: `${buildFolder}/assets/js/`,
      user: `${buildFolder}/assets/js/`,
      vue: `${buildFolder}/assets/js/`,
      css: `${buildFolder}/assets/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/assets/img/`,
      fonts: `${buildFolder}/assets/fonts/`,
      iconfont: `${buildFolder}/assets/iconfont/`,
      files: `${buildFolder}/assets/files/`,
   },
   src: {
      js: `${srcFolder}/assets/js/base.js`,
      user: `${srcFolder}/assets/js/user.js`,
      vue: `${srcFolder}/assets/js/main.js`,
      images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
      iconfont: `${srcFolder}/assets/iconfont/**/*.*`,
      svg: `${srcFolder}/assets/img/**/*.svg`,
      scss: `${srcFolder}/assets/scss/base.scss`,
      html: `${srcFolder}/*.html`,
      files: `${srcFolder}/assets/files/**/*.*`,
      svgicons: `${srcFolder}/assets/img/svgicons/*.svg`

   },
   watch: {
      js: [`${srcFolder}/assets/js/base.js`, `${srcFolder}/assets/js/modules/*.js`],
      user: `${srcFolder}/assets/js/**/*.js`,
      vue: [`${srcFolder}/assets/js/main.js`, `${srcFolder}/assets/js/components/*.{js,vue}`],
      scss: `${srcFolder}/assets/scss/**/*.scss`,
      html: `${srcFolder}/**/*.html`,
      images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/assets/files/**/*.*`
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `ilya.daricvety.com.ua/test_${Math.random().toString(36).substring(2, 7)}`,
}
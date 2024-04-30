import gulp from "gulp";

import { path } from "./gulp/config/path.js"

import { plugins } from "./gulp/config/plugins.js"

// Передаем значения в глобальную переменную
global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins
}
// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { user } from "./gulp/tasks/user.js";
import { vue } from "./gulp/tasks/vue.js";
import { images } from "./gulp/tasks/images.js";
import { iconfont, otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js"
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { ftp } from "./gulp/tasks/ftp.js";

//Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.user, user);
   gulp.watch(path.watch.vue, vue);
   gulp.watch(path.watch.images, images);
}

// export { svgSprive };

const fonts = gulp.series(iconfont, otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, svgSprive, gulp.parallel(copy, html, scss, js, vue, user, images));

//Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const deployFTP = gulp.series(reset, mainTasks, ftp);

export { deployFTP }
// Выполнение сценариев по умолчанию
gulp.task('default', dev);
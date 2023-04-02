import gulp from "gulp";
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';
// import build from 'react'




function send() {

    let configFTP = {
        host: "vh330.timeweb.ru",
        user: "cq61295",
        password: "tessit369360",
        parallel: 5
    }

    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    gulp.src(`build/**/*.*`, {})
        // .pipe(ftpConnect.dest(`RM/public_html/`))
        .pipe(ftpConnect.dest(`regeneration-test/public_html/`));
        // .pipe(ftpConnect.dest(`RM-yandex/public_html/`));    
}

function watcher () {
    gulp.watch('build/**/*.*', send)
}

gulp.task('default', send);
  


   
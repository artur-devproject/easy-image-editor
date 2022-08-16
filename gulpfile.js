// Imports
const gulp = require('gulp')
const sync = require('browser-sync').create()

// Paths
const { resolve } = require('path')
const path = {
    gulp: resolve(),
    source: resolve('src'),
    html: resolve('src/*.html'),
}

// Tasks
function server() {
    sync.init({ server: path.source })
    gulp.watch('src/**/*.*').on('change', sync.reload)
}

// Exports
exports.run = gulp.series(server)
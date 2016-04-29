var gulp    = require('gulp')
var concat  = require('gulp-concat')
var uglify  = require('gulp-uglify')
var rename  = require('gulp-rename');
var sass    = require('gulp-sass');
var connect = require('gulp-connect');
var path    = require('path'); // Core module Node.js

// TACHE PERMETTANT DE TRAITER LES FICHIERS JAVASCRIPT
gulp.task('process-scripts', function() {
  return gulp.src('./sources/scripts/*.js') // Gulp va chercher tous les fichiers JS dans /scripts/ 
      .pipe( concat('app.js') )             // Il utilise par dessus gulp-concat pour les 
                                            // rassembler en 1 seul fichier "app.js"
      .pipe( gulp.dest('./build/') )        // Enfin, il écrit le tout dans un dossier de destination
      .pipe( uglify() )                     // Minification
      .pipe( rename('app.min.js') )         // Renommage du flux
      .pipe( gulp.dest('./build/') )        // Ecriture dans /build/
      .pipe( connect.reload() )
})

// TACHE PERMETTANT DE TRAITER LES FICHIERS DE STYLE
gulp.task('process-styles', function() {
  return gulp.src('./sources/styles/*.scss')
        .pipe( sass({outputStyle:'expanded'}).on('error',sass.logError) )
        .pipe( rename('app.css') )
        .pipe( gulp.dest('./build/') )
        .pipe( sass({outputStyle:'compressed'}).on('error',sass.logError) )
        .pipe( rename('app.min.css') )
        .pipe( gulp.dest('./build/') )
        .pipe( connect.reload() )
})

// TACHE PERMETTANT DE SURVEILLER LES FICHIERS JS ET SCSS
gulp.task('watch', function() {
  console.info('Gulp is watching for changes ...');

  gulp.watch('./sources/scripts/*.js', ['process-scripts'])
  gulp.watch('./sources/styles/*.scss', ['process-styles'])
})


// Cette tâche permet de créer un serveur local (avec livereload)
// qui sert notre application web
gulp.task('connect', function() {
  connect.server({
    root: path.resolve('./'),
    livereload : true
  })
});

gulp.task('default', ['connect', 'watch'])
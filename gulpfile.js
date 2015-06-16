var gulp   = require( 'gulp' );

var babel  = require( 'gulp-babel' );

var uglify = require( 'gulp-uglify');

var useref = require( 'gulp-useref');

var rimraf = require( 'gulp-rimraf' );

gulp.task( 'default', [ 'clean', 'json', 'js'] )

gulp.task( 'clean', function() {

    return gulp.src( [

        'public/json/**/*.json',

        'public/javascripts/**/*.js'

    ],

        { read : false }

    )

    .pipe( rimraf() );

} );

gulp.task( 'json', function() {

    var assets = useref.assets();

    return gulp.src( 'app/json/**/*.json' )

        .pipe( assets )

        .pipe( assets.restore() )

        .pipe( useref() )

        .pipe(gulp.dest( 'public/json' ));

} );


gulp.task( 'js', function () {    

    return gulp.src( 'app/**/*.js' )

        .pipe( babel() )

        .pipe( uglify() )

        .pipe( gulp.dest( 'public' )

    );

} );



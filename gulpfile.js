var gulp   = require( 'gulp' );

var babel  = require( 'gulp-babel' );

var uglify = require( 'gulp-uglify');

var useref = require( 'gulp-useref');

var rimraf = require( 'gulp-rimraf' );

gulp.task( 'default', [ 'clean', 'json', 'images', 'html', 'js', 'css'] )

gulp.task( 'clean', function() {

    return gulp.src( [

        'public/json/**/*.json',

        'public/images/**/*.*',

        'public/html/**/*.html',

        'public/javascripts/**/*.js',

        'public/stylesheets/**/*.css'

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

gulp.task( 'images', function() {

    var assets = useref.assets();

    return gulp.src( 'app/images/**/*.*' )

        .pipe( assets )

        .pipe( assets.restore() )

        .pipe( useref() )

        .pipe(gulp.dest( 'public/images' ));

} );

gulp.task( 'html', function() {

    var assets = useref.assets();

    return gulp.src( 'app/**/*.html' )

        .pipe( assets )

        .pipe( assets.restore() )

        .pipe( useref() )

        .pipe(gulp.dest( 'public' ));

} );

gulp.task( 'js', function () {    

    return gulp.src( 'app/**/*.js' )

        .pipe( babel() )

        .pipe( uglify() )

        .pipe( gulp.dest( 'public' )

    );

} );

gulp.task( 'css', function() {

    var assets = useref.assets();

    return gulp.src( 'app/stylesheets/**/*.css' )

        .pipe( assets )

        .pipe( assets.restore() )

        .pipe( useref() )

        .pipe(gulp.dest( 'public/stylesheets' ));

} );


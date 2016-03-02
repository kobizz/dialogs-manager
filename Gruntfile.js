module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ],
                dist: {
                    files: [{
                        src: 'dist/css/*.css'
                    }]
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/style.css': 'src/scss/style.scss'
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> \n * author: <%= pkg.author %> \n */\n'
            },
            dist: {
                files: [{
					expand: true,
					cwd: 'src/js',
					src: '**/*.js',
					dest: 'dist/js',
					ext: '.min.js'
				}]
            }
        },
        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['scripts']
            },
            styles: {
                files: ['src/scss/*.scss'],
                tasks: ['styles']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-postcss');

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask( 'default', [
        'scripts',
        'styles'
    ] );

    grunt.registerTask( 'scripts', [
        'uglify'
    ] );

    grunt.registerTask( 'styles', [
        'sass',
        'postcss'
    ] );
};
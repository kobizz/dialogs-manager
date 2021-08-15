module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: require('node-sass'),
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/css/style.css': 'src/scss/style.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')()
                ],
                map: {
                    inline: false,
                    annotation: 'dist/css/'
                }
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> | (c) <%= pkg.author %> | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt \n <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
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

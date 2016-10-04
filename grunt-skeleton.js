var grunt,
    defaults,
    settings;

var consts = {
    defaultsConfigFile: './defaults.json',
    _: 'lodash',
    header: '===== Grunt Skeleton =====',
    packageJson: 'package.json',
    gruntPrefix: 'grunt-contrib-',
    defaultTaskDescription: 'Grunt Skeleton default task',
    defaultTaskMessage: 'grunt-skeleton default task success ;)'
};

var _ = require(consts._);

/**
 * Show module header text
 */
function showHeader() {
    // TODO: improve header
    grunt.log.subhead(consts.header);
}

/**
 * load tasks from devDependencies
 */
function loadDevDependencies() {
    var packageJson = grunt.file.readJSON(consts.packageJson);
    var tasks =  packageJson.devDependencies || {};
    var prefix = consts.gruntPrefix;

    Object.keys(tasks).forEach(function(task) {
        if (task.indexOf(prefix) === 0) {
            grunt.loadNpmTasks(task)
        }
    });
}

/**
 * load configs for tasks
 */
function loadConfigs() {
    grunt.file.expandMapping(settings.configs, '', {
        flatten: true,
        ext: ''
    }).forEach(function(configFile) {
        var config = {};
        config[configFile.dest] = grunt.file.readJSON(configFile.src[0]);
        grunt.config.merge(config);
    });
}

function registerDefaultTask() {
    grunt.registerTask('default', consts.defaultTaskDescription, function() {
        grunt.log.ok(consts.defaultTaskMessage);
    });
}

/**
 * load tasks
 */
function loadTasks() {
    grunt.loadTasks(settings.tasks);
}

function loadAliases() {
    grunt.file.expandMapping(settings.aliases, '', {
        flatten: true,
        ext: ''
    }).forEach(function(alias) {
        grunt.registerTask(alias.dest, grunt.file.readJSON(configFile.src[0]));
    });
}

module.exports = function (_grunt, options) {
    grunt = _grunt;
    defaults = require(consts.defaultsConfigFile);
    settings = _.merge(defaults, options);

    showHeader();
    loadDevDependencies();
    loadConfigs();

    registerDefaultTask();

    loadTasks();
    loadAliases();
};
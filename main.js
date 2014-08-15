define(function (require, exports, module) {
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

    ExtensionUtils.loadStyleSheet(module, 'styles/main.css');
    ExtensionUtils.loadStyleSheet(module, 'styles/awesome.css');
    ExtensionUtils.loadStyleSheet(module, 'styles/pictonic.css');

    require('./services/injector').init();
    require('./services/preferences').init();

    require('./services/onlineTracking').init();
});

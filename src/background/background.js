chrome.browserAction.onClicked.addListener(function (tab) {

    var scripts = [
        'js/jquery.min.js',
        'js/select2.min.js',
        'src/inject/inject.js'
    ];
    scripts.forEach(function (script) {
        chrome.tabs.executeScript(null, {
            file: script
        }, function (resp) {
            if (script !== 'inject.js') return;
        });
    });
});
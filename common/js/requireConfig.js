requirejs.config({
    baseUrl: '../common/js',
    paths: {
        'jquery.fullPage':'jquery.fullPage.min',
        'jquery': 'jquery-1.9.1.min',
        'jquery.validator': 'jquery.validator'
    },
    shim: {
        'jquery.fullPage':{
            deps: ['jquery'],
            exports: 'jQuery.fn.fullPage'
        }
       
    }
});
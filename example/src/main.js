var Vue = require('vue');
var appOptions = require('./app');
window.app = new Vue(appOptions).$mount('#app');
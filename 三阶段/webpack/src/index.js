// es6  规范
import $ from 'jquery';
import 'weui';
import './aa/styles.scss';
import './js/test.js'
import header from './bb/header.html';
import search from './bb/search.html';
import panel from './bb/panel.html';
$('body').html(header + search + panel);

// es6  规范
// import template from './assets/template.txt'

// es5 commonn.js规范
// const template = require('./assets/template.txt')
// console.log(template.default)
// const fs = require('fs')
// $('body').html(template.default)
// console.log(1)
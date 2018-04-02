import qzxUrl from './resource/qzx.jpeg';
import '../css/index.css';
import {foo} from './test01';
import * as $ from 'jquery';
foo('app.js++++++--->>>>');
$('#app').append(
  `<img src="${qzxUrl}"/>`
);
$('#btn').click(e => alert('^_^'));
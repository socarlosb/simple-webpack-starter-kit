// var styles = require('./scss/styles.css');
import './scss/styles.scss';

// comonjs import sintax
var messages = require('./messages');

// es6 import sintax
// import Button from './button';
// import Avatar from './image';
// import Screenshot from './screenshot';




const newMessage = () => (`
<div class='${styles.box}'>
DEV: ${DEVELOPMENT.toString()}<br>
PROD: ${PRODUCTION.toString()}<br>
Hello<br>
</div>
`);
// ${Avatar}
// ${Screenshot}

// const newMessage = () => (Button.button);

import {
  multiply
} from './mathstuff';

// const newMessage = () => (multiply(3, 4));




var app = document.getElementById('app');
// app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>';
app.innerHTML = newMessage();

// Button.attachEl();

if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
  }
}

import _ from 'lodash';
import './style.css';

import myName from './myName';

function component() {
    const element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Josh Gunson');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
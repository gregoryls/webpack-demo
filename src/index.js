import _ from 'lodash';
import './style.css';
import icon from './companion-cube-full.png';


import myName from './myName';

function component() {
    const element = document.createElement('div');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.textContent = myName('Josh Gunson');
    element.classList.add('hello');

    //add image to div
    const myIcon = new Image();
    myIcon.src = icon;

    element.appendChild(myIcon);


    return element;
}

document.body.appendChild(component());
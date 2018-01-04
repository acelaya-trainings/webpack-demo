import _ from 'lodash';
import './style.css';
import Alot from './alot.png';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const image = new Image();
    image.src = Alot;
    element.appendChild(image);

    return element;
}

document.body.appendChild(component());

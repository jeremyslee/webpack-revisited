import _ from 'lodash';
import './style.css';
import Smudge from './smudge.jpg';
import Data from './data.xml';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');
  
  const myIcon = new Image();
  myIcon.src = Smudge;
  
  element.appendChild(myIcon);

  console.log('Data: ', Data);

  return element;
}

document.body.appendChild(component());

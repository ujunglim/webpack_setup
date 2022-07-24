import {sum} from './math';
import './app.css';
import img from './img.png'

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#app');
  element.innerHTML = `
    <h1>1+2 = ${sum(1,2)}</h1>
    <img src="${img}" alt="webpack" />
  `
})
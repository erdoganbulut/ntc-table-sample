global.$ = require("jquery");

// Test import of a JavaScript function, an SVG, and Sass
import HelloWorld from './js/HelloWorld';
import './styles/NTCUIKit.css';
import './styles/index.scss';

// Create heading node
const greeting = document.createElement('h1');
greeting.textContent = HelloWorld();

// Append SVG and heading nodes to the DOM
const app = document.querySelector('#root');
app.append(greeting);

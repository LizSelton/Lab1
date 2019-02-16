const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://forbes400.herokuapp.com/api/forbes400/women', true);
request.onload = function () {




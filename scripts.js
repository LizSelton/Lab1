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
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(woman => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = woman.name;

      const p = document.createElement('p');
      woman.country = woman.country.substring(0, 400);
      p.textContent = `${"Position:" + woman.position +   ", Worth in Billions:" + woman.worth +   ", Age:" + woman.age}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();



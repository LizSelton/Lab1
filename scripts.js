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

var myConfig = {
  type: "pie", 
  backgroundColor: "#2B313B",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip:{
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: ""
    },
    animation:{
     effect: 2, 
     method: 5,
     speed: 500,
     sequence: 1
   }
  },
  source: {
    text: '/api/forbes400/',
    fontColor: "#8e99a9",
    fontFamily: "Open Sans"
  },
  title: {
    fontColor: "#fff",
    text: 'Forbes Richest Women by Age',
    align: "left",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 25
  },
  subtitle: {
    offsetX: 10,
    offsetY: 10,
    fontColor: "#8e99a9",
    fontFamily: "Open Sans",
    fontSize: "16",
    text: '',
    align: "left"
  },
  plotarea: {
    margin: "20 0 0 0"  
  },
 series : [
   {
     values : [11.38],
     text: "Age 20-35",
     backgroundColor: '#50ADF5',
   },
   {
     values: [56.94],
     text: "Age 36-51",
     backgroundColor: '#FF7965'
   },
   {
     values: [14.52],
     text: 'Age 52-66',
     backgroundColor: '#FFCB45'
   },
   {
     text: 'Age 67-82',
     values: [9.69],
     backgroundColor: '#6877e5'
   },
   {
     text: 'Age 83-99',
     values: [7.48],
     backgroundColor: '#6FB07F'
   }
 ]
};

zingchart.render({ 
 id : 'myChart', 
 data : myConfig, 
 height: 500, 
 width: 725
 
});
import './sass/main.scss';
import currentTemplate from './partials/current.hbs';

const apiKey = '5f6a749c3c5144f09d0145640212010';
const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=lviv&lang=uk&days=3`;

fetch(apiUrl)
  .then(data => data.json())
  .then(res => {
    console.log(res);
    renderCurrent(res.current);
  });

function renderCurrent(current) {
  const currentRoot = document.querySelector('#currentRoot');
  const currentHTML = currentTemplate(current);
  currentRoot.innerHTML = currentHTML;
}

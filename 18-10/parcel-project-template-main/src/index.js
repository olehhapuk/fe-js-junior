import './sass/main.scss';
// import cardTemplate from './partials/card.hbs';

// const rootElem = document.querySelector('#root');

// const card1HTML = cardTemplate({ title: 'Handlebars is awesome' });
// const card2HTML = cardTemplate({ title: 'Parcel is awesome' });

// // const title = 'Handlebars is awesome';
// // const cardHTML = `
// //   <div>
// //     <h2>${title}</h2>
// //   </div>
// // `;
// rootElem.insertAdjacentHTML('beforeend', card1HTML);
// rootElem.insertAdjacentHTML('beforeend', card2HTML);

// --- DOM ---
const listElem = document.querySelector('#list');
console.log(listElem.children[0].nextElementSibling);
console.log(listElem.querySelector('li > span'));
listElem.textContent = 'I am list';

console.log(listElem.getAttribute('class'));
console.log(listElem.classList.add('box'));

const inputElem = document.querySelector('#text');
console.log(inputElem.value);

const checkboxElem = document.querySelector('#checkbox');
console.log(checkboxElem.checked);

"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);

//obsługa przycisku przy zmianie wielkości ekranu

let navigationSwticher = document.querySelector('.navigation__switcher--js');
let navigationList = document.querySelector('.navigation__list--js');

navigationSwticher.addEventListener('click', change);

function change() {
  navigationList.classList.toggle('navigation__list--modifed');
}
//----------------------------------przeniesione------------------------------------
document.cookie = "testowe ciastko=wartosc";
document.cookie = "testowe ciastko2=wartosc";
document.cookie = "testowe ciastko3=wartosc";
document.cookie = "testowe ciastko4=wartosc";
console.log(document.cookie);

const person = {
  name: 'daniel',
  age: '39'
}
console.log('obiekt:');
console.log(person);

const jsonPerson = JSON.stringify(person); // dane z obiektu zamieniam na jeden ciąg znaków

console.log(`jsonPerson: ${jsonPerson}`);

localStorage.setItem('person', jsonPerson); // pierwsza wartość to klucz, a druga dane które posyłam


const personStringify = localStorage.getItem('person'); // przypisuje do zmiennej dane z pod klucza 'person'

console.log(`personStringify: ${personStringify}`);

const newPerson = JSON.parse(personStringify); // zamieniam ciąg znaków na obiekt 
console.log('newPerson:')
console.log(newPerson);

localStorage.removeItem('person');//usuwa dane z dysku lokalnego


const focusInput = document.querySelector('.focus--js');
if (focusInput) {
  focusInput.addEventListener('keyup', (e) => {
    localStorage.setItem('focus', e.target.value);
  })
}
if (localStorage.getItem('focus')) focusInput.value = localStorage.getItem('focus');
//localStorage.removeItem('focus');


//----------------------------------------------------------------------------------
//------------------------------Api-promise-JSON------------------------------------
if ('.list--js') {
  const list = document.querySelector('.list--js');
  fetch('https://api.github.com/users/doneilprakapawecz/repos').
    then(resp => resp.json())
    .then(resp => {
      const repos = resp;
      for (const repo of repos) {
        const {description,html_url, name} = repo;
        list.innerHTML += `<li>
             <a href="${html_url}"class="link"target="_blank"> ${name} </a>
             <p class="paragrath">${description ? description: "brak opisu" }</p>
         </li>`;
      }
    }).catch(err => {
      console.log(err);
    })
}
//---------------------------------------------------------------------------------
//-----------------------------------ciekawostki-----------------------------------
const osoba = {
  imie: "daniel",
  nazwisko: 'p-cz',
  wiek: 39
}
const Contakt = {
  email: 'test@gmail.com',
  phone: '13445554'
}
console.log(Contakt);
const personContakt = {
  ...osoba,
  ...Contakt
}
console.log('test');
console.log(personContakt);

console.log(osoba);
const { imie, wiek } = osoba;
console.log(`${imie} ${wiek}`);


const food = ['pizza', 'burger', 'kiszony'];
console.log(food);
const [pierwszy, drugi] = food;
console.log(`numer: 1 ${pierwszy} ${drugi}`);
const [nie_pierwszy, , nie_drugi] = food;
console.log(`numer: 2 ${nie_pierwszy} ${nie_drugi}`);



const sum = (a, b, c) => {
  return a + b + c;
}

const numbers = [5, 9, 9];

console.log(sum(numbers[0], numbers[1], numbers[2]));
console.log(sum(...numbers));
console.log(23);
//---------------------------------------------------------------------------------
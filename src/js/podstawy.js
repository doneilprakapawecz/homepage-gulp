"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.cookie="testowe ciastko=wartosc";
document.cookie="testowe ciastko2=wartosc";
document.cookie="testowe ciastko3=wartosc";
document.cookie="testowe ciastko4=wartosc";
console.log(document.cookie);

const person = {
    name:'daniel',
    age:'39'
}
console.log('obiekt:');
console.log(person);

const jsonPerson=JSON.stringify(person); // dane z obiektu zamieniam na jeden ciąg znaków

console.log(`jsonPerson: ${jsonPerson}`);

localStorage.setItem('person',jsonPerson); // pierwsza wartość to klucz, a druga dane które posyłam


const personStringify=localStorage.getItem('person'); // przypisuje do zmiennej dane z pod klucza 'person'

console.log(`personStringify: ${personStringify}`);

const newPerson=JSON.parse(personStringify); // zamieniam ciąg znaków na obiekt 
console.log('newPerson:')
console.log(newPerson);

//localStorage.removeItem('person');//usuwa dane z dysku lokalnego


const focusInput = document.querySelector('.focus--js');
focusInput.addEventListener('keyup',(e)=>{
   localStorage.setItem('focus',e.target.value);
})
if(localStorage.getItem('focus'))focusInput.value=localStorage.getItem('focus');

//localStorage.removeItem('focus');
console.log('test api');

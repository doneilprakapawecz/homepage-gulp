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

// place your code below


console.log(`Hello world!`);

//obsługa przycisku przy zmianie wielkości ekranu

let navigationSwticher=document.querySelector('.navigation__switcher--js');
let navigationList=document.querySelector('.navigation__list--js');

navigationSwticher.addEventListener('click',change);

function change()
{
    navigationList.classList.toggle('navigation__list--modifed');
}

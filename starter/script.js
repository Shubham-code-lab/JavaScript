'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

let nodeList = document.querySelectorAll('.section');
console.log(nodeList);

let HTMLTags = document.getElementsByTagName('button');
console.log(HTMLTags);

HTMLTags[0].remove();
nodeList[0].remove();

console.log(nodeList);
console.log(HTMLTags);

let message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `Please accept all the cookies enter <button class="btn--close-cookie">Got it!</button>`
document.querySelector('.header').prepend(message);


console.log(document.getElementsByClassName('btn--close-cookie'));
document.getElementsByClassName('btn--close-cookie')[0].addEventListener('click', function(){
  message.remove();
})


const logo = document.querySelector('.nav__logo');
console.log(logo.className);

console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.setAttribute('designer', 'jeevan');

logo.classList.contains();



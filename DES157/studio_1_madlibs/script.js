(function () {
  console.log('Happy Hacking!');
  ('use strict');

  //Pulling next buttons and putting them into an array

  // let nextBtns = document.querySelectorAll('.next');

  // let sections = document.querySelectorAll('.overlay');

  // for (let everyBtn of nextBtns) {
  //   everyBtn.addEventListener('click', function (e) {

  //   });
  // }

  // Page 1
  const nextBtnOne = document.querySelector('.nextOne');

  nextBtnOne.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayOne').className = 'overlay hidden';

    document.getElementById('overlayTwo').className = 'overlay showing';
  });

  // Page 2
  const nextBtnTwo = document.querySelector('.nextTwo');

  nextBtnTwo.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayTwo').className = 'overlay hidden';

    document.getElementById('overlayThree').className = 'overlay showing';
  });

  // Page 3
  const nextBtnThree = document.querySelector('.nextThree');

  nextBtnThree.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayThree').className = 'overlay hidden';

    document.getElementById('overlayFour').className = 'overlay showing';
  });

  // Page 4
  const nextBtnFour = document.querySelector('.nextFour');

  nextBtnFour.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayFour').className = 'overlay hidden';

    document.getElementById('overlayFive').className = 'overlay showing';
  });

  // Retrieving data from user entry
  const mainForm = document.querySelector('#mainForm');

  const madLib = document.querySelector('#articleOne');

  // Event Handler, listening to the mainForm for user input for #day
  mainForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.querySelector('#name').value;

    let feelings = document.querySelector('#feelings').value;

    let tips = document.querySelector('#tips').value;

    let happinessChoice = document.querySelector('#happinessChoice').value;

    // Injects user Data into the inner HTML of the id tag #day as paragraph madlib!
    `Hi, ${name}! Thanks for taking some time to be a little more mindful today. I noticed you mentioned you were feeling ${feelings}. That's great news!!! First of all, that means the button works, and secondly, it means you're not dead... It turns out, we both like ${happinessChoice}! When you come face to face with everyday conflicts like grizzly bears, uncomfortable conversations with your romantic partner, or what music you should listen to, just ask yourself, what would ${happinessChoice} do?`;
  });
})();

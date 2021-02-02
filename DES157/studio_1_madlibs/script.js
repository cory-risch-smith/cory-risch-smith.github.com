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

  // come back and add tips
  var userName, feelings, userGreeting, tips;

  nextBtnOne.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayOne').className = 'overlay hidden';

    userName = document.querySelector('#userName').value;
    console.log(userName);

    document.getElementById('overlayTwo').className = 'overlay showing';

    userGreeting = document.querySelector('#userNameGreeting');

    userGreeting.innerHTML = `Hey, ${userName}! Tell me a little bit about your day today.`;
  });

  // Page 2
  // Takes users name and inserts it as an H1

  const nextBtnTwo = document.querySelector('.nextTwo');

  nextBtnTwo.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayTwo').className = 'overlay hidden';

    feelings = document.querySelector('#feelings').value;
    console.log(feelings);

    document.getElementById('overlayThree').className = 'overlay showing';
  });

  // Page 3
  const nextBtnThree = document.querySelector('.nextThree');

  nextBtnThree.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayThree').className = 'overlay hidden';

    tips = document.querySelector('#tips').value;

    console.log(tips);

    document.getElementById('overlayFour').className = 'overlay showing';
  });

  // Page 4
  const nextBtnFour = document.querySelector('.nextFour');

  nextBtnFour.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('overlayFour').className = 'overlay hidden';

    let happinessChoice = document.querySelector('#happinessChoice').value;
    console.log(happinessChoice);

    document.getElementById('overlayFive').className = 'overlay showing';

    let madLib = document.querySelector('#articleOne');

    // Injects user Data into the inner HTML of the id tag #day as paragraph madlib!

    madLib.innerHTML = `Hi, ${userName}! Thanks for taking some time to be a little more mindful today. I noticed you mentioned you were feeling ${feelings}. That's great news!!! First of all, that means the button works, and secondly, it means you're not dead... It turns out, we both like ${happinessChoice}! When you come face to face with everyday conflicts like grizzly bears, uncomfortable conversations with your romantic partner, or what music you should listen to, just ask yourself, what would ${happinessChoice} do?`;

    // Random generation function

    function randomInt(min, max) {
      return Math.floor((max - min + 1) * Math.random()) + min;
    }

    const quotes = [
      'Do not dwell in the past, do not dream in the future, concentrate the mind on the present moment. <br/><br/> - Buddha',
      'Surrender to what is. Let go of what was. Have faith in what will be. <br/> - Sonia Ricotti',
      'Adopt the pace of nature: Her secret is patience. <br/><br/> - Ralph Waldo Emerson',
      'If you simmer down the highest teachings of any discipline from any direction, the quintessence is: Remain without identity. Stay as awareness. <br/><br/> - Mooji',
      'Wisdom says we are nothing. Love says we are everything. Between these two our life flows. <br/><br/> - Jack Kornfield',
      'The primary cause of unhappiness is never the situation but your thoughts about it. <br/><br/> - Eckhart Tolle',
    ];

    // returns randomized quote from array of quotes regardless of length.

    function inspirationalQuote() {
      let quote = quotes[randomInt(0, quotes.length - 1)];
      return quote;
    }

    // returns randomized quote and handles no entry with alternate message
    if (tips == 'yes') {
      document.querySelector(
        '#inspiration'
      ).innerHTML = `${inspirationalQuote()}`;
    } else {
      document.querySelector('#inspiration').innerHTML =
        'I hope you have a wonderful day today!';
    }
  });
})();

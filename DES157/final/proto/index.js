(function () {
  ('use strict');
  var scrollPos = 0;

  // Update numbers, starting from 0, 1, 2, 3 ...

  // try using the querySelectorAll method
  var box0 = document.getElementById('box0');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');
  var box5 = document.getElementById('box5');
  var box6 = document.getElementById('box6');
  var box7 = document.getElementById('box7');
  var box8 = document.getElementById('box8');
  var box9 = document.getElementById('box9');
  var box10 = document.getElementById('box10');
  var box11 = document.getElementById('box11');
  var box12 = document.getElementById('box12');
  var box13 = document.getElementById('box13');
  var box14 = document.getElementById('box14');
  var voice1 = document.getElementById('voice1');
  var voice2 = document.getElementById('voice2');
  var voice3 = document.getElementById('voice3');
  var finalBtn = document.getElementById('finalBtn');
  var lastOverlay = document.getElementById('lastOverlay');

  //sets the initial div to small size in viewport

  // changed boxes to voices in html file

  box0.style.transform = 'matrix(0,0,0,0,0,0)';
  box2.style.transform = 'matrix(0,0,0,0,0,0)';
  box3.style.transform = 'matrix(0,0,0,0,0,0)';

  // (initial (init) values go in css, changes go in the js)
  // box4.style.visibility = 'hidden';
  // box5.style.visibility = 'hidden';
  // box6.style.visibility = 'hidden';
  // box7.style.visibility = 'hidden';
  // box8.style.visibility = 'hidden';
  // box9.style.visibility = 'hidden';
  // box10.style.visibility = 'hidden';
  // box11.style.visibility = 'hidden';
  // box12.style.visibility = 'hidden';
  // box13.style.visibility = 'hidden';
  // box14.style.visibility = 'hidden';
  // box14.style.height = '0';

  // anonymous function

  overlayBtn.addEventListener('click', function () {
    overlay.className = 'box hidden';
    overlay.style.width = '0px';
    overlay.style.height = '0px';
    alert(
      'Welcome! \n\n 1. Click through Greeting Screen \n 2. Scroll until final button is reached. \n 3. Click Final Button. \n \n Thank you for particpating in this simulation. '
    );
  });

  // named callback function

  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    scrollPos = [window.scrollY];
    console.log(scrollPos);

    // Handles 1st div
    if (scrollPos >= 0 && scrollPos <= 6000) {
      box0.style.visibility = 'visible';

      var myScale = scrollPos / 1000;
      // console.log(myScale);

      box0.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box0.style.opacity = `${myScale}`;

      box0.style.zIndex = '1';

      voice1.style.opacity = `${myScale * 0.5}`;
    }

    // Handles 2nd div

    // *******************************************************************change to the text and take opacity off the box and put on the type
    else if (scrollPos >= 6001 && scrollPos <= 12000) {
      box0.style.visibility = 'hidden';
      box2.style.visibility = 'visible';

      myScale = scrollPos / 1000 - 6;

      // console.log(myScale);

      box2.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box2.style.opacity = `${myScale}`;

      box2.style.zIndex = '1';

      voice1.style.visibility = 'hidden';
      voice2.style.visibility = 'visible';
      voice2.style.opacity = `${myScale * 0.5}`;

      if (scrollPos === 10500) {
        voice2.style.opacity = '0.95';
      } else if (scrollPos === 10600) {
        voice2.style.opacity = '0.85';
      } else if (scrollPos === 10700) {
        voice2.style.opacity = '0.75';
      } else if (scrollPos === 10800) {
        voice2.style.opacity = '0.65';
      } else if (scrollPos === 10900) {
        voice2.style.opacity = '0.55';
      } else if (scrollPos === 11000) {
        voice2.style.opacity = '0.5';
      } else if (scrollPos === 11100) {
        voice2.style.opacity = '0.45';
      } else if (scrollPos === 11200) {
        voice2.style.opacity = '0.4';
      } else if (scrollPos === 11300) {
        voice2.style.opacity = '0.35';
      } else if (scrollPos === 11400) {
        voice2.style.opacity = '0.3';
      } else if (scrollPos === 11500) {
        voice2.style.opacity = '0.25';
      } else if (scrollPos === 11600) {
        voice2.style.opacity = '0.2';
      } else if (scrollPos === 11700) {
        voice2.style.opacity = '0.15';
      } else if (scrollPos === 11800) {
        voice2.style.opacity = '0.1';
      } else if (scrollPos === 11900) {
        voice2.style.opacity = '0.05';
      } else if (scrollPos === 12000) {
        voice2.style.opacity = '0';
      }
    }
    // Handles 3rd div
    else if (scrollPos >= 12001 && scrollPos <= 24000) {
      box2.style.visibility = 'hidden';
      box3.style.visibility = 'visible';

      myScale = scrollPos / 1000 - 12;

      // console.log(myScale);

      box3.style.transform = `matrix(${myScale / 10},0,0,${myScale / 10},${
        myScale / 10
      },${myScale / 10})`;

      box3.style.opacity = `${myScale}`;

      box3.style.zIndex = '1';

      voice2.style.visibility = 'hidden';
      voice3.style.visibility = 'visible';
      box4.style.visibility = 'hidden';
    }

    // Handles 4th div, Vertical Scroll
    else if (scrollPos >= 24001 && scrollPos <= 44000) {
      voice3.style.visibility = 'hidden';
      box3.style.visibility = 'hidden';
      box4.style.visibility = 'visible';
      box5.style.visibility = 'visible';
      box6.style.visibility = 'visible';
      box7.style.visibility = 'visible';
      box8.style.visibility = 'visible';
      box9.style.visibility = 'visible';
      box10.style.visibility = 'visible';
      box11.style.visibility = 'visible';
      box12.style.visibility = 'visible';
      box13.style.visibility = 'visible';
      // myScale = scrollPos / 1000 - 20;
      // console.log(myScale);

      box4.classList.add('vertical');
      box4.style.top = '24002px';

      box5.classList.add('vertical');
      box5.style.top = '26002px';

      box6.classList.add('vertical');
      box6.style.top = '28002px';

      box7.classList.add('vertical');
      box7.style.top = '30002px';

      box8.classList.add('vertical');
      box8.style.top = '32002px';

      box9.classList.add('vertical');
      box9.style.top = '34002px';

      box10.classList.add('vertical');
      box10.style.top = '36002px';

      box11.classList.add('vertical');
      box11.style.top = '38002px';

      box12.classList.add('vertical');
      box12.style.top = '40002px';

      box13.classList.add('vertical');
      box13.style.top = '42002px';
      box13.style.height = '768px';
    }
  }

  finalBtn.addEventListener('click', function () {
    box13.classList.add('fadeOut');
    box13.style.visibility = 'hidden';
    box14.style.visibility = 'visible';
    box14.style.display = 'block';
    box14.style.height = '100%';
    // **********FIX ME *****************

    // remove eventListener here
    window.removeEventListener('scroll', scrollFunction);
    console.log('removed window scroll event listener');
    var body = (document.getElementsByTagName('body')[0].style.overflow =
      'hidden');
  });
})();

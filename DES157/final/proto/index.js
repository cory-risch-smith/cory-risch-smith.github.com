(function () {
  ('use strict');
  var scrollPos = 0;

  // Update numbers, starting from 0, 1, 2, 3 ...

  // try using the querySelectorAll method
  var boxes = document.querySelectorAll('.box');
  console.log(boxes);

  var v0 = document.getElementById('v0');
  var v1 = document.getElementById('v1');
  var v2 = document.getElementById('v2');
  var finalBtn = document.getElementById('finalBtn');
  var namiOverlay = document.getElementById('namiOverlay');

  //sets the initial div to small size in viewport

  // (initial (init) values go in css, changes go in the js)

  // named callback function

  // ********************* Change all the boxes from visibility hidden and showing to show and hide

  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    scrollPos = [window.scrollY];
    console.log(scrollPos);

    // Handles 1st div
    if (scrollPos >= 0 && scrollPos <= 6000) {

      var myScale = scrollPos / 1000;
      // console.log(myScale);

      box0.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box0.style.opacity = `${myScale}`;

      box0.style.zIndex = '1';

      v0.style.opacity = `${myScale * 0.5}`;
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

      v0.style.visibility = 'hidden';
      v1.style.visibility = 'visible';
      v1.style.opacity = `${myScale * 0.5}`;
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

      v1.style.visibility = 'hidden';
      v2.style.visibility = 'visible';
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

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

  for (i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('hide');
  }

  //sets the initial div to small size in viewport

  // (initial (init) values go in css, changes go in the js)

  // named callback function

  // ********************* Change all the boxes from visibility hidden and showing to show and hide

  window.addEventListener('scroll', scrollFunction);

  function scrollFunction() {
    scrollPos = [window.scrollY];
    console.log(scrollPos);

    //  Handles first Voice
    if (scrollPos >= 0 && scrollPos <= 3000) {
      var myScale = scrollPos / 1000;
      // console.log(myScale);

      boxes[0].style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      v0.style.opacity = `${myScale}`;
      boxes[0].classList.add('show');
    }

    // Handles 2nd Voice

    // *******************************************************************change to the text and take opacity off the box and put on the type
    else if (scrollPos >= 3000 && scrollPos <= 6000) {
      // boxes[0].classList.add('hide');
      boxes[1].classList.add('show');

      myScale = scrollPos / 1000 - 3;
      // console.log(myScale);

      // As matrix comes in, fade opacity of previous text
      v0.style.opacity = `${1 - myScale * 1.5}`;

      boxes[1].style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      v1.style.opacity = `${myScale * 0.5}`;
    }
    // Handles 3rd div
    else if (scrollPos >= 6001 && scrollPos <= 9000) {
      boxes[1].classList.add('hide');
      boxes[2].classList.add('show');
      myScale = scrollPos / 1000 - 6;

      v1.style.opacity = `${1 - myScale * 1.5}`;
      boxes[2].style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      v2.style.opacity = `${myScale}`;
    }

    // Handles 4th div, Vertical Scroll
    else if (scrollPos >= 9001 && scrollPos <= 44000) {
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

      box3.classList.add('vertical');
      box3.style.top = '24002px';

      box4.classList.add('vertical');
      box4.style.top = '26002px';

      box5.classList.add('vertical');
      box5.style.top = '28002px';

      box6.classList.add('vertical');
      box6.style.top = '30002px';

      box7.classList.add('vertical');
      box7.style.top = '32002px';

      box8.classList.add('vertical');
      box8.style.top = '34002px';

      box9.classList.add('vertical');
      box9.style.top = '36002px';

      box10.classList.add('vertical');
      box10.style.top = '38002px';

      box11.classList.add('vertical');
      box11.style.top = '40002px';

      box12.classList.add('vertical');
      box12.style.top = '42002px';
      box12.style.height = '768px';
    }
  }

  finalBtn.addEventListener('click', function () {
    box12.classList.add('fadeOut');
    box12.style.visibility = 'hidden';
    box13.style.visibility = 'visible';
    box13.style.display = 'block';
    box13.style.height = '100%';
    // **********FIX ME *****************

    // remove eventListener here
    window.removeEventListener('scroll', scrollFunction);
    console.log('removed window scroll event listener');
    var body = (document.getElementsByTagName('body')[0].style.overflow =
      'hidden');
  });
})();

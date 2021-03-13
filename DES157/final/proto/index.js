(function () {
  ('use strict');
  var scrollPos = 0;

  // Update numbers, starting from 0, 1, 2, 3 ...

  // try using the querySelectorAll method
  var boxes = document.querySelectorAll('.box');
  console.log(boxes);

  var voices = document.querySelectorAll('.voices');

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
    else if (scrollPos >= 9001 && scrollPos <= 30000) {
      myScale = scrollPos / 1000 - 9;
      // Changes opacity of main message (word:depression)
      v2.style.opacity = `${1 - myScale * 1.5}`;

      for (i = 3; i > boxes.length; i++) {
        boxes[i].classList.add('show');
      }

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

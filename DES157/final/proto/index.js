(function () {
  ('use strict');
  var scrollPos = 0;

  var boxes = document.querySelectorAll('.box');
  console.log(boxes);

  var voices = document.querySelectorAll('.voices');

  var v0 = document.getElementById('v0');
  var v1 = document.getElementById('v1');
  var v2 = document.getElementById('v2');
  var finalBtn = document.getElementById('finalBtn');
  var namiOverlay = document.getElementById('namiOverlay');
  var closeBtn = document.getElementById('closeBtn');

  for (i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('hide');
  }

  //sets the initial div to small size in viewport

  // named callback function

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

    // ************       FIX ME (Vertical scroll fade)      *****************

    // Handles 4th div, Vertical Scroll
    else if (scrollPos >= 9001 && scrollPos <= 30000) {
      myScale = scrollPos / 1000 - 9;
      // Changes opacity of main message (word:depression)
      v2.style.opacity = `${1 - myScale * 1.5}`;
      v3.style.opacity = `${myScale * 0.9}`;

      // Fix top positioning for windows

      // Fading for vertical scroll section
      if (scrollPos === 9800) {
        v3.style.opacity = `${myScale * 0.25}`;
      } else if (scrollPos === 10200) {
        v2.style.opacity = '0.85';
      } else if (scrollPos === 10700) {
        v2.style.opacity = '0.75';
      } else if (scrollPos === 10800) {
        v2.style.opacity = '0.65';
      } else if (scrollPos === 10900) {
        v2.style.opacity = '0.55';
      } else if (scrollPos === 11000) {
        v2.style.opacity = '0.5';
      } else if (scrollPos === 11100) {
        v2.style.opacity = '0.45';
      } else if (scrollPos === 11200) {
        v2.style.opacity = '0.4';
      } else if (scrollPos === 11300) {
        v2.style.opacity = '0.35';
      } else if (scrollPos === 11400) {
        v2.style.opacity = '0.3';
      } else if (scrollPos === 11500) {
        v2.style.opacity = '0.25';
      } else if (scrollPos === 11600) {
        v2.style.opacity = '0.2';
      } else if (scrollPos === 11700) {
        v2.style.opacity = '0.15';
      } else if (scrollPos === 11800) {
        v2.style.opacity = '0.1';
      } else if (scrollPos === 11900) {
        v2.style.opacity = '0.05';
      } else if (scrollPos === 12000) {
        v2.style.opacity = '0';
      }

      for (i = 3; i > boxes.length; i++) {
        boxes[i].classList.add('show');
      }
      namiOverlay.classList.remove('show');
    }
  }

  finalBtn.addEventListener('click', function () {
    box12.classList.add('fadeOut');
    box12.classList.add('hide');
    namiOverlay.classList.add('show');

    // remove eventListener here
    window.removeEventListener('scroll', scrollFunction);
    // console.log('removed window scroll event listener');
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  });

  closeBtn.addEventListener('close', function () {
    //Add some kind of scroll out or fade out and go to home.
  });
})();

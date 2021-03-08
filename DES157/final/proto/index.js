(function () {
  'use strict';
  // console.log('happy hacking');

  var scrollPos = 0;

  var overlay = document.getElementById('overlay');
  var box1 = document.getElementById('box1');
  var box2 = document.getElementById('box2');
  var box3 = document.getElementById('box3');
  var box4 = document.getElementById('box4');
  var boxOneImg = document.getElementById('boxOneImg');
  var voice1 = document.getElementById('voice1');
  var voice2 = document.getElementById('voice2');
  var voice3 = document.getElementById('voice3');
  var overlayBtn = document.querySelector('.btn');
  var wrapper = document.getElementById('wrapper');

  window.addEventListener('load', function () {
    //sets the initial div to small size in viewport
    box1.style.transform = 'matrix(0,0,0,0,0,0)';
    box2.style.transform = 'matrix(0,0,0,0,0,0)';
    box3.style.transform = 'matrix(0,0,0,0,0,0)';
    box4.style.visibility = 'hidden';

    overlayBtn.addEventListener('click', function () {
      overlay.className = 'box hidden';
      overlay.style.width = '0px';
      overlay.style.height = '0px';
    });

    window.addEventListener('scroll', function () {
      scrollPos = [window.scrollY];
      console.log(scrollPos);

      // Handles 1st div
      if (scrollPos >= 0 && scrollPos <= 6000) {
        //   Will have to change to division of position tops of div.

        box1.style.visibility = 'visible';

        var myScale = scrollPos / 1000;
        console.log(myScale);

        box1.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

        box1.style.opacity = `${myScale}`;

        box1.style.zIndex = '1';

        box1.style.borderRadius = `${myScale * 70}%`;

        voice1.style.visibility = 'visible';
      }

      //Conditions for first set of voices

      // Handles 2nd div
      else if (scrollPos >= 6001 && scrollPos <= 9000) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'visible';

        myScale = scrollPos / 1000 - 6;

        console.log(myScale);

        box2.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

        box2.style.opacity = `${myScale}`;

        box2.style.zIndex = '1';

        voice1.style.visibility = 'hidden';
        voice2.style.visibility = 'visible';
      }
      // Handles 3rd div
      else if (scrollPos >= 9001 && scrollPos <= 20000) {
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'visible';

        myScale = scrollPos / 1000 - 9;

        console.log(myScale);

        box3.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

        box3.style.opacity = `${myScale}`;

        box3.style.zIndex = '1';

        voice2.style.visibility = 'hidden';
        voice3.style.visibility = 'visible';
        box4.style.visibility = 'hidden';
      }

      // Handles 4th div, Vertical Scroll
      else if (scrollPos >= 20000) {
        box3.style.transition = 'all 3 s ease';
        voice3.style.transition = 'all 3 s ease';
        voice3.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        // box4.style.transition = 'all 3 s ease';
        box4.style.visibility = 'visible';
        // myScale = scrollPos / 1000 - 20;
        // console.log(myScale);

        box4.style.top = 20000;
        box4.style.left = 0;
        box4.style.height = '2000px';
        box4.style.zIndex = '1';
        // box4.style.opacity = '1';
      }
    });
  });
})();

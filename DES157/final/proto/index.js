(function () {
  // alert(
  //   'Welcome! \n\n 1. Click through Greeting Screen \n 2. Scroll until final button is reached. \n 3. Click Final Button. \n \n Thank you for particpating in this simulation. '
  // );

  ('use strict');
  // console.log('happy hacking');
  var scrollPos = 0;

  var overlay = document.getElementById('overlay');
  var box1 = document.getElementById('box1');
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

  var voice1 = document.getElementById('voice1');
  var voice2 = document.getElementById('voice2');
  var voice3 = document.getElementById('voice3');
  var overlayBtn = document.querySelector('.btn');
  var finalBtn = document.getElementById('finalBtn');
  var lastOverlay = document.getElementById('lastOverlay');

  window.addEventListener('load', function () {
    //sets the initial div to small size in viewport
    box1.style.transform = 'matrix(0,0,0,0,0,0)';
    box2.style.transform = 'matrix(0,0,0,0,0,0)';
    box3.style.transform = 'matrix(0,0,0,0,0,0)';
    box4.style.visibility = 'hidden';
    box5.style.visibility = 'hidden';
    box6.style.visibility = 'hidden';
    box7.style.visibility = 'hidden';
    box8.style.visibility = 'hidden';
    box9.style.visibility = 'hidden';
    box10.style.visibility = 'hidden';
    box11.style.visibility = 'hidden';
    box12.style.visibility = 'hidden';
    box13.style.visibility = 'hidden';

    overlayBtn.addEventListener('click', function () {
      overlay.className = 'box hidden';
      overlay.style.width = '0px';
      overlay.style.height = '0px';
    });

    window.addEventListener('scroll', function () {
      scrollPos = [window.scrollY];
      // console.log(scrollPos);

      // Handles 1st div
      if (scrollPos >= 0 && scrollPos <= 6000) {
        box1.style.visibility = 'visible';

        var myScale = scrollPos / 1000;
        // console.log(myScale);

        box1.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

        box1.style.opacity = `${myScale}`;

        box1.style.zIndex = '1';

        box1.style.boxShadow = `0px 0px 28px ${scrollPos}px rgba(0,0,0,0.23)`;

        voice1.style.visibility = 'visible';
      }

      // Handles 2nd div

      // *******************************************************************change to the text and take opacity off the box and put on the type
      else if (scrollPos >= 6001 && scrollPos <= 12000) {
        box1.style.visibility = 'hidden';
        box2.style.visibility = 'visible';

        myScale = scrollPos / 1000 - 6;

        console.log(myScale);

        box2.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

        box2.style.opacity = `${myScale}`;

        box2.style.zIndex = '1';

        voice1.style.visibility = 'hidden';
        voice2.style.visibility = 'visible';

        // switch (myScale) {
        //   case 4.5:
        //     voice2.style.opacity = 0.95;
        //     break;
        //   case 4.6:
        //     voice2.style.opacity = 0.85;
        //     break;
        //   case 4.7:
        //     voice2.style.opacity = 0.75;
        //     break;
        //   case 4.8:
        //     voice2.style.opacity = 0.65;
        //     break;
        //   case 4.9:
        //     voice2.style.opacity = 0.55;
        //     break;
        //   case 5.0:
        //     voice2.style.opacity = 0.45;
        //     break;
        //   case 5.1:
        //     voice2.style.opacity = 0.4;
        //     break;
        //   case 5.2:
        //     voice2.style.opacity = 0.35;
        //     break;
        //   case 5.3:
        //     voice2.style.opacity = 0.3;
        //     break;
        //   case 5.4:
        //     voice2.style.opacity = 0.25;
        //     break;
        //   case 5.5:
        //     voice2.style.opacity = 0.2;
        //     break;
        //   case 5.6:
        //     voice2.style.opacity = 0.15;
        //     break;
        //   case 5.7:
        //     voice2.style.opacity = 0.1;
        //     break;
        //   case 5.8:
        //     voice2.style.opacity = 0.05;
        //     break;
        //   case 6.0:
        //     voice2.style.opacity = 0;
        //     break;
        //   default:
        //     voice2.style.opacity = 1;
        //     break;
        // }

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
      else if (scrollPos >= 12001 && scrollPos <= 43000) {
        box2.style.visibility = 'hidden';
        box3.style.visibility = 'visible';

        myScale = scrollPos / 1000 - 12;

        console.log(myScale);

        box3.style.transform = `matrix(${myScale / 25},0,0,${myScale / 25},${
          myScale / 25
        },${myScale / 25})`;

        box3.style.opacity = `${myScale}`;

        box3.style.zIndex = '1';

        voice2.style.visibility = 'hidden';
        voice3.style.visibility = 'visible';
        box4.style.visibility = 'hidden';
      }

      // Handles 4th div, Vertical Scroll
      else if (scrollPos >= 43001 && scrollPos <= 45000) {
        box3.style.transition = 'all 3 s ease';
        voice3.style.transition = 'all 3 s ease';
        voice3.style.visibility = 'hidden';
        box3.style.visibility = 'hidden';
        // box4.style.transition = 'all 3 s ease';
        box4.style.visibility = 'visible';
        // myScale = scrollPos / 1000 - 20;
        // console.log(myScale);

        box4.style.top = '43002px';
        box4.style.left = 0;
        box4.style.height = '2000px';
        box4.style.zIndex = '1';
        // box4.style.opacity = '1';
      }
      //Handles 5th Div
      else if (scrollPos >= 45001 && scrollPos <= 47000) {
        box4.style.visibility = 'hidden';
        box5.style.visibility = 'visible';

        box5.style.top = '45002px';
        box5.style.left = 0;
        box5.style.height = '2000px';
        box5.style.zIndex = '1';
      }
      //Handles 6th Div
      else if (scrollPos >= 47001 && scrollPos <= 49000) {
        box5.style.visibility = 'hidden';
        box6.style.visibility = 'visible';
        box6.style.top = '47002px';
        box6.style.left = 0;
        box6.style.height = '2000px';
        box6.style.zIndex = '1';
      }
      //Handles 7th Div
      else if (scrollPos >= 49001 && scrollPos <= 51000) {
        box6.style.visibility = 'hidden';
        box7.style.visibility = 'visible';
        box7.style.top = '49002px';
        box7.style.left = 0;
        box7.style.height = '2000px';
        box7.style.zIndex = '1';
      }
      //Handles 8th Div
      else if (scrollPos >= 51001 && scrollPos <= 53000) {
        box7.style.visibility = 'hidden';
        box8.style.visibility = 'visible';

        box8.style.top = '51002px';
        box8.style.left = 0;
        box8.style.height = '2000px';
        box8.style.zIndex = '1';
      }

      //Handles 9th Div
      else if (scrollPos >= 53001 && scrollPos <= 55000) {
        box8.style.visibility = 'hidden';
        box9.style.visibility = 'visible';

        box9.style.top = '53002px';
        box9.style.left = 0;
        box9.style.height = '2000px';
        box9.style.zIndex = '1';
      }

      //Handles 10th Div
      else if (scrollPos >= 55001 && scrollPos <= 57000) {
        box9.style.visibility = 'hidden';
        box10.style.visibility = 'visible';

        box10.style.top = '55002px';
        box10.style.left = 0;
        box10.style.height = '2000px';
        box10.style.zIndex = '1';
      }

      //Handles 11th Div
      else if (scrollPos >= 57001 && scrollPos <= 59000) {
        box10.style.visibility = 'hidden';
        box11.style.visibility = 'visible';

        box11.style.top = '57002px';
        box11.style.left = 0;
        box11.style.height = '2000px';
        box11.style.zIndex = '1';
      }

      //Handles 12th Div
      else if (scrollPos >= 59001 && scrollPos <= 61000) {
        box11.style.visibility = 'hidden';
        box12.style.visibility = 'visible';

        box12.style.top = '59002px';
        box12.style.left = 0;
        box12.style.height = '2000px';
        box12.style.zIndex = '1';
      }

      //Handles 13th Div
      else if (scrollPos >= 61001 && scrollPos <= 63000) {
        box12.style.visibility = 'hidden';
        box13.style.visibility = 'visible';

        box13.style.top = '61002px';
        box13.style.left = 0;
        box13.style.height = '2000px';
        box13.style.zIndex = '1';

        finalBtn.addEventListener('click', function () {
          // **********FIX ME *****************
        });
      }

      // *****************Add show overlay into event AudioListener.
    });
  });
})();

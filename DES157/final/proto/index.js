// console.log('happy hacking');

const div = document.querySelectorAll('.box');
// console.log(div);

var scrollPos = 0;
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');

window.addEventListener('load', function () {
  //sets the initial div to small size in viewport
  box1.style.transform = 'matrix(0,0,0,0,0,0)';
  box2.style.transform = 'matrix(0,0,0,0,0,0)';
  box3.style.transform = 'matrix(0,0,0,0,0,0)';
  box4.style.transform = 'matrix(0,0,0,0,0,0)';

  window.addEventListener('scroll', function () {
    scrollPos = [window.scrollY];
    console.log(scrollPos);

    // Handles 1st div

    if (scrollPos >= 0 && scrollPos <= 2000) {
      //   Will have to change to division of position tops of div.

      box1.style.visibility = 'visible';

      var myScale = scrollPos / 1000;
      console.log(myScale);

      box1.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box1.style.opacity = `${myScale}`;

      box1.style.zIndex = '1';
    }

    // Handles 2nd div
    else if (scrollPos >= 2001 && scrollPos <= 4000) {
      box1.style.visibility = 'hidden';
      box2.style.visibility = 'visible';

      myScale = scrollPos / 1000 - 2;

      console.log(myScale);

      box2.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box2.style.opacity = `${myScale}`;

      box2.style.zIndex = '1';
    }
    // Handles 3rd div
    else if (scrollPos >= 4001 && scrollPos <= 6000) {
      box2.style.visibility = 'hidden';
      box3.style.visibility = 'visible';

      myScale = scrollPos / 1000 - 4;

      console.log(myScale);

      box3.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box3.style.opacity = `${myScale}`;

      box3.style.zIndex = '1';
    }

    // Handles 4th div, Vertical Scroll
    else if (scrollPos >= 6001 && scrollPos <= 8000) {
      box3.style.visibility = 'hidden';
      box4.style.visibility = 'visible';

      myScale = scrollPos / 1000 - 6;

      console.log(myScale);

      box4.style.transform = `matrix(${myScale},0,0,${myScale},${myScale},${myScale})`;

      box4.style.opacity = `${myScale}`;

      box4.style.zIndex = '1';
    }
  });
});

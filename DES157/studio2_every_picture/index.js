(function () {
  ('use strict');

  //Red Color Block
  const redColorBlock = document.querySelector('.cBlockOne');

  redColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockOne').className = 'cBlockOne animate';
  });

  //Orange Color Block
  const orangeColorBlock = document.querySelector('.cBlockTwo');

  orangeColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockTwo').className = 'cBlockTwo animate';
  });
  //Yellow Color Block
  const yellowColorBlock = document.querySelector('.cBlockThree');

  yellowColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockThree').className =
      'cBlockThree animate';
  });
  //Green Color Block
  const greenColorBlock = document.querySelector('.cBlockFour');

  greenColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockFour').className = 'cBlockFour animate';
  });
  //Blue Color Block
  const blueColorBlock = document.querySelector('.cBlockFive');

  blueColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockFive').className = 'cBlockFive animate';
  });

  //Brown Color Block
  const brownColorBlock = document.querySelector('.cBlockSix');

  brownColorBlock.addEventListener('click', function (e) {
    e.preventDefault();

    document.getElementById('colorBlockSix').className = 'cBlockSix animate';
  });
  // console.log('test');
})();

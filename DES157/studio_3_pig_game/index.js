(function () {
  'use strict';

  // Element and corresponding sounds
  var startGame = document.getElementById('startGame');
  const startSound = new Audio('sounds/start.mp3');

  var game = document.getElementById('game');
  const snakeSound = new Audio('sounds/hiss.mp3');

  var gameControl = document.getElementById('gamecontrol');
  const dice = new Audio('sounds/dice.mp3');

  var score = document.getElementById('score');
  var actionArea = document.getElementById('actions');
  var pOnePosession = document.querySelector('.pOnePosession');
  var pTwoPosession = document.querySelector('.pTwoPosession');
  // var numRounds = document.querySelector('.numberOfRounds');
  var pOneScore = document.getElementById('playerOneScore');
  var pTwoScore = document.getElementById('playerTwoScore');
  var userMsg = document.getElementById('userMsg');

  var dieOne = document.getElementById('dieOne');
  var dieTwo = document.getElementById('dieTwo');

  var gameData = {
    dice: [
      'images/die1.png',
      'images/die2.png',
      'images/die3.png',
      'images/die4.png',
      'images/die5.png',
      'images/die6.png',
    ],
    players: ['Player 1', 'Player 2'],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 30,
  };

  // handles changing overlays

  const introScreen = document.getElementById('introScreen');
  introScreen.addEventListener('click', function (e) {
    e.preventDefault();

    document
      .getElementById('roundSelection')
      .addEventListener('change', function () {
        // replace innerhtml for selected *********numRounds
        console.log(value);
        // numRounds.innerHTML = this.value;
        //Pass in selected rounds here ^^
      });

    //Plays sounds
    startSound.play();

    // Changes overlay from welcome to game page
    document.getElementById('welcome').className = 'overlay hidden';
    document.getElementById('overlayOne').className = 'overlay showing';

    //Selects random player
    gameData.index = Math.round(Math.random());
    score.innerHTML += '<button id="quit">Wanna Quit?</button>';

    document.getElementById('quit').addEventListener('click', function () {
      //Just Reloads the page!
      location.reload();
    });

    // console.log(gameData.index);
    setUpTurn();
  });

  function setUpTurn() {
    gameControl.innerHTML = `<h3>It's your turn ${
      gameData.players[gameData.index]
    }, don't mess this up!</h3>`;
    userMsg.innerHTML = '';

    //Assigning the proper color to the proper player posession based on random selection

    if (gameData.players[gameData.index] === 'Player 1') {
      pOnePosession.style.backgroundColor = 'red';
    } else {
      pTwoPosession.style.backgroundColor = 'red';
    }

    // ******************************Consider restructuring to HTML

    actionArea.innerHTML = "<button id='roll'>Roll 'Em!</button>";
    document.getElementById('roll').addEventListener('click', function () {
      dieOne.className = '';
      dieTwo.className = '';
      throwDice();
    });
  }

  function throwDice() {
    dice.play();
    actionArea.innerHTML = '';
    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;

    // Injects the corresponding dice roll image into the src attribute for the img tag

    dieOne.src = gameData.dice[gameData.roll1 - 1];
    dieTwo.src = gameData.dice[gameData.roll2 - 1];

    gameData.rollSum = gameData.roll1 + gameData.roll2;

    // console.log(gameData);

    dieOne.className = 'animate';
    dieTwo.className = 'animate';

    //  *************** conditionals for dice roll ****************

    //if two 1s are rolled...
    if (gameData.rollSum === 2) {
      userMsg.innerHTML +=
        '<h3>Shoot Darn Dag Nabbit! Snake Eyes 🐍 👀 ...</h3>';
      snakeSound.play();
      gameData.score[gameData.index] = 0;
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);

      showCurrentScore();

      setTimeout(setUpTurn, 2000);
    }

    // if either dice was a 1
    else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      // Changing posessions back to black
      pOnePosession.style.backgroundColor = 'black';
      pTwoPosession.style.backgroundColor = 'black';

      gameData.index ? (gameData.index = 0) : (gameData.index = 1);

      userMsg.innerHTML += `<h3>Darn it! A One! ${
        gameData.players[gameData.index]
      }, here's your chance!</h3>`;

      setTimeout(setUpTurn, 2000);

      //   console.log('One dice was a 1!');
    } else {
      gameData.score[gameData.index] =
        gameData.score[gameData.index] + gameData.rollSum;
      actionArea.innerHTML =
        "<button id='rollagain'>Roll Again</button> OR <button id='pass'>Pass</button>";

      document
        .getElementById('rollagain')
        .addEventListener('click', function () {
          dieOne.className = '';
          dieTwo.className = '';

          throwDice();
          dice.play();

          //might change to throwDice();
        });

      document.getElementById('pass').addEventListener('click', function () {
        // change current posession to black

        if (pOnePosession.style.backgroundColor === 'red') {
          pOnePosession.style.backgroundColor = 'black';
          pTwoPosession.style.backgroundColor = 'red';
        } else {
          pOnePosession.style.backgroundColor = 'red';
          pTwoPosession.style.backgroundColor = 'black';
        }

        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
      });

      checkWin();

      //   console.log('game proceeds');
    }
  }

  function checkWin() {
    if (gameData.score[gameData.index] > gameData.gameEnd) {
      score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${
        gameData.score[gameData.index]
      } points!</h2>`;

      // Plays corresponding winner sound.

      let winner = new Audio(`sounds/${gameData.players[gameData.index]}.mp3`);

      winner.play();

      actionArea.innerHTML = '';
      score.innerHTML += '<button id="quit">Start a New Game?</button>';

      document.getElementById('quit').addEventListener('click', function () {
        //Just Reloads the page!
        location.reload();
      });

      showCurrentScore();
    } else {
      //Show current score
      showCurrentScore();
    }
  }

  function showCurrentScore() {
    // Change Score handling

    pOneScore.innerHTML = gameData.score[0];
    pTwoScore.innerHTML = gameData.score[1];

    // score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
  }

  //   console.log('happy hacking');
})();

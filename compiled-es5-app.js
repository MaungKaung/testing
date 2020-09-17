System.register((void 0), [], function() {
  "use strict";
  var scores,
      roundScored,
      activePlayer;
  scores = [0, 0];
  roundScored = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.querySelector('.btn-roll').addEventListener('click', function() {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if (dice !== 1) {
      roundScored += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScored;
    } else {
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScored = 0;
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '1';
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      document.querySelector('.dice').style.display = 'none';
    }
  });
  return {};
});

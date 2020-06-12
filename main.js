const playerChar = document.getElementById("playerChar");
const computerChar = document.getElementById("computerChar");
const resetBtn = document.getElementById("resetBtn");

const choicePunch = document.getElementById("punch");
const choiceKick = document.getElementById("kick");
const choiceGrapple = document.getElementById("grapple");
const choiceBlock = document.getElementById("block");

const win = `<img src="./img/win.png" id="win" width="20px">`;
const lose = `<img src="./img/lose.png" id="lose" width="16px">`;
const draw = `<img src="./img/draw.png" id="draw" width="30px">`;

const playerOutcome = document.getElementById("playerOutcome");
const computerOutcome = document.getElementById("computerOutcome");
const audio = document.getElementById("audio");

const playerPunch = `<img src="https://media.giphy.com/media/RGe2WI1YUvOjetdkn1/giphy.gif" class="character" id="punch">`;
const playerKick = `<img src="https://media.giphy.com/media/ck0SSlByX8MFCdXurQ/giphy.gif" id="kick" width="140px">`;
const playerGrapple = `<img src="https://media.giphy.com/media/hQFtxD8ji9JBWmo2bs/giphy.gif" class="character" id="grapple">`;
const playerBlock = `<img src="https://media.giphy.com/media/Rl6VQRGtu5KGi5HsUS/giphy.gif" class="character" id="block">`;
const playerStance = `<img src="./character animation/player-stance-loop.gif" class="character" alt="kick" id="playerStance">`;

const computerPunch = `<img src="https://media.giphy.com/media/XgSQw4eTgH8OXhC0Jj/giphy.gif" class="character" id="punch" width="140px">`;
const computerKick = `<img src="https://media.giphy.com/media/SVa49J3gdcKQzw5UdF/giphy.gif" class="character" id="kick">`;
const computerGrapple = `<img src="https://media.giphy.com/media/SWbw5GrPSt9uPAVi59/giphy.gif" class="character" id="grapple">`;
const computerBlock = `<img src="https://media.giphy.com/media/d7qpmxU8V03e3fm6rk/giphy.gif" class="character" id="block">`;
const computerStance = `<img src="./character animation/computer-stance-loop.gif"  class="character" alt="stance" id="computerStance">`;

const playerWin = `<img src="./character animation/player-win-loop.gif"  class="character" alt="stance" id="playerWin">`;
const playerLose = `<img src="./character animation/player-lose.gif"  class="character" alt="stance" id="playerLose">`;
const computerWin = `<img src="./character animation/computer-win-loop.gif"  class="character" alt="stance" id="computerWin">`;
const computerLose = `<img src="./character animation/computer-lose.gif"  class="character" alt="stance" id="computerLose">`;


const array1 = [computerPunch, computerKick, computerGrapple, computerBlock];

let playerScore = 0;
let computerScore = 0;

choicePunch.addEventListener("click", function() {
  playerChar.innerHTML = playerPunch;
  computerChar.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerChar.innerHTML === computerPunch) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerChar.innerHTML === computerKick){
    playerOutcome.innerHTML = win;
    playerScore++;
    computerOutcome.innerHTML = lose;
  } else if(computerChar.innerHTML === computerGrapple) {
    playerOutcome.innerHTML = win;
    computerOutcome.innerHTML = lose;
  } else if(computerChar.innerHTML === computerBlock) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  }

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore; 

  if (playerScore === 5){
    playerChar.innerHTML = playerWin;
    computerChar.innerHTML = computerLose;
  } else if (computerScore === 5) {
    computerChar.innerHTML = computerWin;
    playerChar.innerHTML = playerLose;
  }
});


choiceKick.addEventListener("click", function() {
  playerChar.innerHTML = playerKick;
  computerChar.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerChar.innerHTML === computerPunch) {
    playerOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerChar.innerHTML === computerKick){
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerChar.innerHTML === computerGrapple) {
    playerOutcome.innerHTML = win;
    playerScore++;
    computerOutcome.innerHTML = lose;
  } else if(computerChar.innerHTML === computerBlock) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  }

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
  
  if (playerScore === 5){
    playerChar.innerHTML = playerWin;
    computerChar.innerHTML = computerLose;
  } else if (computerScore === 5) {
    computerChar.innerHTML = computerWin;
    playerChar.innerHTML = playerLose;
  }
});


choiceGrapple.addEventListener("click", function() {
  playerChar.innerHTML = playerGrapple;
  computerChar.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerChar.innerHTML === computerPunch) {
    playerOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerChar.innerHTML === computerKick){
    playerOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerChar.innerHTML === computerGrapple) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerChar.innerHTML === computerBlock) {
    playerOutcome.innerHTML = win;
    computerOutcome.innerHTML = lose;
    playerScore++;
  }

  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  if (playerScore === 5){
    playerChar.innerHTML = playerWin;
    computerChar.innerHTML = computerLose;
  } else if (computerScore === 5) {
    computerChar.innerHTML = computerWin;
    playerChar.innerHTML = playerLose;
  }
});

choiceBlock.addEventListener("click", function() {
  playerChar.innerHTML = playerBlock;
  computerChar.innerHTML = array1[Math.floor(Math.random() * array1.length)];
  
  if(computerChar.innerHTML === computerPunch) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  } else if(computerChar.innerHTML === computerKick){
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw; 
  } else if(computerChar.innerHTML === computerGrapple) {
    playerOutcome.innerHTML = lose;
    computerOutcome.innerHTML = win;
    computerScore++;
  } else if(computerChar.innerHTML === computerBlock) {
    playerOutcome.innerHTML = draw;
    computerOutcome.innerHTML = draw;
  }
  
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;

  if (playerScore === 5){
    playerChar.innerHTML = playerWin;
    computerChar.innerHTML = computerLose;
  } else if (computerScore === 5) {
    computerChar.innerHTML = computerWin;
    playerChar.innerHTML = playerLose;
  }
});

document.getElementById("playerScore").innerHTML = playerScore;
document.getElementById("computerScore").innerHTML = computerScore;

resetBtn.addEventListener("click", function() {
  playerScore = 0;
  computerScore = 0;
  playerChar.innerHTML = playerStance;
  computerChar.innerHTML = computerStance;
  playerOutcome.innerHTML = "";
  computerOutcome.innerHTML = "";
  document.getElementById("title").innerHTML = `<img src="./img/document.png" alt="document" width="400px">`;

});

const audioLevel = document.getElementById("audioLevel");
audio.volume = 0.1;

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){
  document.getElementById("title").innerHTML = `<h1>Untitled Game (TBA)</h1>`;
});

//   document.getElementById("playerTxt").innerHTML = `<h2>Player</h2>`;
//   document.getElementById("computerTxt").innerHTML = "<h2>Computer</h2>";
//   document.getElementById("playerScore").innerHTML = 0;
//   document.getElementById("computerScore").innerHTML = 0;

// const winner = function () {
// if (document.getElementById("playerScore") === 2) {
//   playerChar.innerHTML = playerWin;
//   computerChar.innerHTML = computerLose;
// } else if (document.getElementById("computerScore") === 2) {
//   playerChar.innerHTML = playerLose;
//   computerChar.innerHTML = computerWin;
//   }
// };


// const scoreCounter = function score(){
  //   if(playerOutcome === win){
    //     playerScore++;
    //   } else if (computerOutcome === win) {
      //     computerScore++;
      //   }
      // }

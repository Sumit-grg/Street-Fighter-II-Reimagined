const playerChar = document.getElementById("playerChar");
const computerChar = document.getElementById("computerChar");

const choicePunch = document.getElementById("punch");
const choiceKick = document.getElementById("kick");
const choiceGrapple = document.getElementById("grapple");
const choiceBlock = document.getElementById("block");

const win = `<img src="./img/win.png" id="win" width="20px">`;
const lose = `<img src="./img/lose.png" id="lose" width="16px">`;
const draw = `<img src="./img/draw.png" id="draw" width="30px">`;

const userOutcome = document.getElementById("userOutcome");
const computerOutcome = document.getElementById("computerOutcome");

const playerPunch = `<img src="https://media.giphy.com/media/RGe2WI1YUvOjetdkn1/giphy.gif" class="character" id="punch">`;
const playerKick = `<img src="https://media.giphy.com/media/ck0SSlByX8MFCdXurQ/giphy.gif" id="kick" width="140px">`;
const playerGrapple = `<img src="https://media.giphy.com/media/hQFtxD8ji9JBWmo2bs/giphy.gif" class="character" id="grapple">`;
const playerBlock = `<img src="https://media.giphy.com/media/Rl6VQRGtu5KGi5HsUS/giphy.gif" class="character" id="block">`;

const computerPunch = `<img src="https://media.giphy.com/media/XgSQw4eTgH8OXhC0Jj/giphy.gif" class="character" id="punch" width="140px">`;
const computerKick = `<img src="https://media.giphy.com/media/SVa49J3gdcKQzw5UdF/giphy.gif" class="character" id="kick">`;
const computerGrapple = `<img src="https://media.giphy.com/media/SWbw5GrPSt9uPAVi59/giphy.gif" class="character" id="grapple">`;
const computerBlock = `<img src="https://media.giphy.com/media/d7qpmxU8V03e3fm6rk/giphy.gif" class="character" id="block">`;

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
  scoreCounter;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore; 
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

  scoreCounter;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
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
  scoreCounter;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
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
  scoreCounter;
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
});


const scoreCounter = function score(){
  if(playerOutcome === win){
    playerScore++;
  } else if (computerOutcome === win) {
    computerScore++;
  }
}



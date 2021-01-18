//buttons
const punch = document.getElementById("punch");
const kick = document.getElementById("kick");
const grapple = document.getElementById("grapple");
const block = document.getElementById("block");

const fight = document.getElementById("fight");
const guide = document.getElementById("doc");
const reset = document.getElementById("resetBtn");
const next = document.getElementById("next");

const left_buttons = document.getElementById("btn");
const right_buttons = document.getElementById("btnRight");

//animation player
const pIntro = `<img src="./animation/play-intro.gif" class="gifImg" style="width:215px;height:295px;position:absolute;top:16px;left:167px;" alt="">`;
const pStance = `<img src="./animation/play-stance-loop1.gif" class="gifImg" alt="">`;
const pPunch = `<img src="./animation/play-punch1.gif" class="gifImg" style="width:200px;" alt="">`;
const pKick = `<img src="./animation/play-kick1.gif" class="gifImg" style="width:260px;" alt="">`;
const pGrapple = `<img src="./animation/play-grapple1.gif" class="gifImg" style="width:210px;" alt="">`;
const pBlock = `<img src="./animation/play-block1.gif" class="gifImg" style="width:180px;" alt="">`;
const pWin = `<img src="./animation/play-win-loop1.gif" class="gifImg" style="width:190px;" alt="">`;
const pLose = `<img src="./animation/play-lose1.gif" style="width:250px;" class="gifImg" alt="">`;

//animation computer
const cIntro = `<img src="./animation/com-intro1.gif" class="gifImg" style="width:330px;height:410px;position:absolute;top:-155px;left:-170px;" alt="">`;
const cStance = `<img src="./animation/com-stance-loop1.gif" class="gifImg" alt="">`;
const cPunch = `<img src="./animation/com-punch1.gif" style="width:270px;height:255px;" class="gifImg" alt="">`;
const cKick = `<img src="./animation/com-kick1.gif" class="gifImg" style="width:310px;" alt="">`;
const cGrapple = `<img src="./animation/com-grapple1.gif" class="gifImg" class="gifImg" style="width:350px;height:260px;" alt="">`;
const cBlock = `<img src="./animation/com-block1.gif" class="gifImg" style="width:170px;height:260px;" alt="">`;
const cWin = `<img src="./animation/com-win-loop1.gif" class="gifImg" style="width:240px;" alt="">`;
const cLose = `<img src="./animation/com-lose1.gif" class="gifImg" style="width:290px;height:250px;" alt="">`;

//animation Display
const pDisplay = document.getElementById("playerDisplay");
const cDisplay = document.getElementById("computerDisplay");

//move name Display
const pMoveName = document.getElementById("pMove");
const cMoveName = document.getElementById("cMove");

//hitbar 
const pHitbar = document.getElementById("hitbarPlayer");
const cHitbar = document.getElementById("hitbarComputer");

//score
const pScore = document.getElementById("player_score");
const cScore = document.getElementById("computer_score");

//HealthBar Hit
const pHealthBar = document.getElementById("HitbarPlayer");
const cHealthBar = document.getElementById("HitbarComputer");

//winlosedrawIcon
const winIcon = `[<img src="./img/win.png" class="icon win" style="width:20px;" alt="">]`;
const loseIcon = `[<img src="./img/lose.png" class="icon lose" style="width:20px;" alt="">]`;
const drawIcon = `[<img src="./img/draw.png" style="width:20px;" class="icon win" alt="">]`;

//Icon Locations
const pIcon = document.getElementById("pResult");
const cIcon = document.getElementById("cResult");

//audio controls
const audio = document.getElementById("audio");

const vol_up = document.getElementById("volUp");
const vol_down = document.getElementById("volDown");
const audio_play = document.getElementById("play");
const audio_pause = document.getElementById("pause");

//win counter
const pwinCount = document.getElementById("player_count");
const cwinCount = document.getElementById("computer_count");

//start screen
const fightlogoAdd = document.getElementById("clickStart");
const fightLogo = document.getElementById("startLogo");
const startScreen = document.getElementById("startScreen");

//audio files 
const selectSound = new Audio("./audio/select-sound.mp3");
const fightSound = new Audio("./audio/fight.mp3");

const thunder1 = new Audio("./audio/thunder.mp3");
const thunder2 = new Audio("./audio/thunder2.mp3");
const thunder3 = new Audio("./audio/thunder3.mp3");

const winAudio = new Audio("./audio/you-win.mp3");
const loseAudio = new Audio("./audio/you-lose.mp3");
const playGrunt = new Audio("./audio/play-lose.mp3");
const comGrunt = new Audio("./audio/com-lose.mp3");
const comLaugh = new Audio("./audio/com-win.mp3");

const oneA = new Audio("./audio/1.mp3");
const twoA = new Audio("./audio/2.mp3");
const threeA = new Audio("./audio/3.mp3");
const fourA = new Audio("./audio/4.mp3");
const fiveA = new Audio("./audio/5.mp3");
const sixA = new Audio("./audio/6.mp3");
const sevenA = new Audio("./audio/7.mp3");
const eightA = new Audio("./audio/8.mp3");
const nineA = new Audio("./audio/9.mp3");
const roundA = new Audio("./audio/round.mp3");
const finalA = new Audio("./audio/final.mp3");

// number img
const zero = `<img src="./img/num0.png" id="num" alt="1">`;
const one = `<img src="./img/num1.png" id="num" alt="1">`;
const two = `<img src="./img/num2.png" id="num" alt="1">`;
const three = `<img src="./img/num3.png" id="num" alt="1">`;
const four = `<img src="./img/num4.png" id="num" alt="1">`;
const five = `<img src="./img/num5.png" id="num" alt="1">`;
const six = `<img src="./img/num6.png" id="num" alt="1">`;
const seven = `<img src="./img/num7.png" id="num" alt="1">`;
const final = `<img src="./img/final.png" id="final" alt="1">`;

//fight round number
const fightRoundDiv = document.getElementById("roundNoti");
const fightDisplay = `<img src="./img/fight.png" id="fightIcon" alt="">`;
const roundDisplay = `<img src="./img/round.png" id="round" alt="round">`;

//you win or lose img
const youWin = `<img src="./img/you-win.png" id="youwin" alt="">`;
const youLose = `<img src="./img/you-lose.png" id="youwin" alt="">`;

//display image 
const ryuWinDisplay = `<img src="./img/ryu-win-display.png" id="dp" alt="">`;
const ryuLoseDisplay = `<img src="./img/ryu-lose-display.png" id="dp1" alt="">`;
const bisonWinDisplay = `<img src="./img/bison-win-display.png" id="dp" alt="">`;
const bisonLoseDisplay = `<img src="./img/bison-lose-display.png" id="dp1" alt="">`;

const playerDP = document.getElementById("playerDP");
const computerDP = document.getElementById("computerDP");

//ending 
const ryuEnding = `<img src="./img/ryu-ending.gif" id="end" alt="">`;
const bisonEnding = `<img src="./img/bison-ending.gif" id="end" alt="">`;

//game manaul
const manaul = `<img src="./img/manaul.jpg" id="manaul" alt="">`;
const manaul2 = `<img src="./img/manaul2.jpg" id="manaul2" alt="">`;
const manaulAdd = document.getElementById("gameManaul");


export {
  manaulAdd,
  manaul,
  manaul2,
  next,
  reset,
  fightlogoAdd,
  playerDP,
  computerDP,
  ryuEnding,
  bisonEnding,
  ryuWinDisplay,
  ryuLoseDisplay,
  bisonLoseDisplay,
  bisonWinDisplay,
  seven,
  youWin,
  youLose,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  final,
  finalA,
  fightRoundDiv,
  fightDisplay,
  roundDisplay,
  oneA,
  twoA,
  threeA,
  fourA,
  fiveA,
  sixA,
  sevenA,
  eightA,
  nineA,
  roundA,
  winAudio,
  loseAudio,
  playGrunt,
  comGrunt,
  comLaugh,
  pIntro,
  cIntro,
  fightSound,
  selectSound,
  thunder1,
  thunder2,
  thunder3,
  left_buttons,
  right_buttons,
  guide,
  fightLogo,
  startScreen,
  pwinCount,
  cwinCount,
  audio,
  vol_up,
  vol_down,
  audio_play,
  audio_pause,
  pIcon,
  cIcon,
  drawIcon,
  winIcon,
  loseIcon,
  pHealthBar,
  cHealthBar,
  punch,
  kick,
  grapple,
  block,
  fight,
  pStance,
  pPunch,
  pKick,
  pBlock,
  pGrapple,
  pWin,
  pLose,
  cStance,
  cPunch,
  cKick,
  cGrapple,
  cBlock,
  cWin,
  cLose,
  pDisplay,
  cDisplay,
  pMoveName,
  cMoveName,
  pHitbar,
  cHitbar,
  pScore,
  cScore,
};
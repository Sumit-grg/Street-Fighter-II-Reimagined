import { 
  punch,kick,grapple,block,fight,pStance,pPunch,pKick,pBlock,pGrapple,pWin,pLose,cStance,
  cPunch,cKick,cGrapple,cBlock,cWin,cLose,cDisplay,pDisplay,pMoveName,cMoveName,pHitbar,cHitbar,
  pScore,cScore,pHealthBar,cHealthBar,winIcon,loseIcon,drawIcon,pIcon,cIcon,vol_up,vol_down,
  audio_play,audio_pause,audio,pwinCount,cwinCount,fightLogo,startScreen,guide,left_buttons,
  right_buttons,thunder1,thunder2,thunder3,selectSound,fightSound,cIntro,pIntro,winAudio,
  loseAudio,playGrunt,comLaugh,comGrunt,oneA,twoA,threeA,fourA,fiveA,sixA,sevenA,eightA,nineA,roundA,
  fightDisplay,roundDisplay,fightRoundDiv,finalA,zero,one,two,three,four,five,six,final,youWin,youLose,
  seven,ryuWinDisplay,ryuLoseDisplay,bisonLoseDisplay,bisonWinDisplay,ryuEnding,bisonEnding,
  playerDP,computerDP,fightlogoAdd,reset,next,manaul,manaul2,manaulAdd,
} 
from "./constants.js";

const full_Health_player = 5;
const full_health_computer = 5;

pScore.innerHTML = full_Health_player;
cScore.innerHTML = full_health_computer;

var player_win_count = 0;
var computer_win_count = 0;

const com_animations = [cPunch, cKick, cGrapple, cBlock];

const randomNumber = () => {
  return Math.floor(Math.random() * com_animations.length);
}

const gameCounterImg = (x,y) => {
  let num;
  switch (x) {
    case 0:
      num = zero;
      break;
    case 1:
      num = one;
      break;
    case 2:
      num = two;
      break;
    case 3:
      num = three;
      break;
    case 4:
      num = four;
      break;
    case 5:
      num = five;
      break;
    case 6:
      num = six;
      break;
    case 7:
      num = seven;
      break;
    }
  y.innerHTML = num;
}

const gamefightAudio = () => {
  let x = player_win_count + computer_win_count;
  let no;
  switch (x) {
    case 0:
      no = oneA;
      break;
    case 1:
      no = twoA;
      break;
    case 2:
      no = threeA;
      break;
    case 3:
      no = fourA;
      break;
    case 4:
      no = fiveA;
      break;
    case 5:
      no = sixA;
      break;
    case 6:
      no = finalA;
      break;
  }
    if (no == finalA){
      no.play();
      setTimeout(() => {
        roundA.play();
      }, 800);
    }else{
      roundA.play();
      setTimeout(() => {
        no.play();
      }, 800);
    }
}

//on page load
window.onload = () => {
  audio.pause();
  pMoveName.style.visibility = "hidden";
  cMoveName.style.visibility = "hidden";
  left_buttons.style.transform = "scale(0)";
  right_buttons.style.transform = "scale(0)";
};

//round number notice
const fightRound = () => {
  if (gameRoundNum() === final) {
    fightRoundDiv.innerHTML = gameRoundNum() + roundDisplay;
    setTimeout(() => {
      fightRoundDiv.innerHTML = fightDisplay;
    }, 1500);
  } else {
    fightRoundDiv.innerHTML = roundDisplay + gameRoundNum();
    setTimeout(() => {
      fightRoundDiv.innerHTML = fightDisplay;
    }, 1500);
  }
}

//round number cal
const gameRoundNum = () => {
  let x = player_win_count + computer_win_count;
  let no;
  switch (x) {
    case 0:
      no = one;
      break;
    case 1:
      no = two;
      break;
    case 2:
      no = three;
      break;
    case 3:
      no = four;
      break;
    case 4:
      no = five;
      break;
    case 5:
      no = six;
      break;
    case 6:
      no = final;
      break;
    }
  return no;
}


//start screen
const start_Screen = () => {
  const allbtn = () => {
    left_buttons.style.transition = "1s ease-in";
    right_buttons.style.transition = "1s ease-in";
    left_buttons.style.transform = "scale(1)";
    right_buttons.style.transform = "scale(1)";
    left_buttons.style.visibility = "visible";
    right_buttons.style.visibility = "visible";
  }
  //click event on fight logo on starting page
  fightLogo.addEventListener("click", ()=>{
    selectSound.play();
    setTimeout(()=>{thunder1.play();},1000);
    fightLogo.style.zIndex = -1;
    startScreen.style.backgroundImage = "url(./img/ryu-intro2.gif)";
    setTimeout(()=>{thunder();gamefight();audio.play();startScreen.style.zIndex = -1;gamefightAudio();
      allbtn();cDisplay.innerHTML = cIntro; pDisplay.innerHTML = pIntro;fightRound();
      reset.style.transform = "scale(1)";
    }, 
    4000);
    setTimeout(() => {
      fightSound.play(); 
    }, 5550);
    setTimeout(()=>{
      cDisplay.innerHTML = cStance; pDisplay.innerHTML = pStance;
    }, 6500);
  })
}

start_Screen();

//move stance dispplay after start screen
const after_start_moveDisplay = () => {
  cMoveName.style.visibility = "visible";
  pMoveName.style.visibility = "visible";
}

//volume control function
const audio_Control = () => {
  let x = audio.volume;
  vol_down.addEventListener("click", ()=> {
    if (x > 0){
      const y = x - 0.1;
      x = y.toFixed(1);
      audio.volume = x;
    }
  });
  vol_up.addEventListener("click", ()=> {
    if (x < 1){
      const z = parseFloat(x) + 0.1;
      x = z.toFixed(1);
      audio.volume = x;
    }
  })
  audio_pause.addEventListener("click", ()=> {
    audio.pause();
  })
  audio_play.addEventListener("click", ()=> {
    audio.play();
  })
}

audio_Control();

//thunder audio background
const thunder = () => {
  setTimeout(()=>{thunder1.play()},6000);
  setTimeout(()=>{thunder2.play()},14000);
  setTimeout(()=>{thunder3.play()},22000);
  setInterval(() => {thunder3.play()}, 40000);
  setInterval(() => {thunder1.play()}, 30000);
  setInterval(() => {thunder2.play()}, 50000);
  document.getElementById("iframe").muted = true; 
}

// computer decision function
const com_decision = () => {
  let x = randomNumber();
  cDisplay.innerHTML = com_animations[x];
  let text;
  switch (x) {
    case 0:
      text = "Punch";
      break;
    case 1:
      text = "Kick";
      break;
    case 2:
      text = "Grapple";
      break;
    case 3:
      text = "Block";
  }
  cMoveName.innerHTML = text;
}

//add classes - for health damage illusion
const phealthBarCounter = () => {
  let ptext;
  switch (parseInt(pScore.innerHTML)) {
    case 4:
      ptext = "hitBar4";
      break;
    case 3:
      ptext = "hitBar3";
      break;
    case 2:
      ptext = "hitBar2";
      break;
    case 1:
      ptext = "hitBar1";
      break;
    case 0:
      ptext = "hitBar0";
      break;
    default:
      ptext = "what";  
  }
  pHealthBar.classList.add(ptext);

  let ctext;
  switch (parseInt(cScore.innerHTML)) {
    case 4:
      ctext = "hitBar4";
      break;
    case 3:
      ctext = "hitBar3";
      break;
    case 2:
      ctext = "hitBar2";
      break;
    case 1:
      ctext = "hitBar1";
      break;
    case 0:
      ctext = "hitBar0";
      break;
    default:
      ctext = "what";
  }
  cHealthBar.classList.add(ctext);
}


//winner
const winner = () => {
  if (pScore.innerHTML == 0 && cScore.innerHTML > 0) {
    cMoveName.innerHTML = "Winner";
    cDisplay.innerHTML = cWin;
    pDisplay.innerHTML = pLose;
    pMoveName.innerHTML = "";   
    pIcon.innerHTML = "";
    setTimeout(()=>{loseAudio.play()},1300);
    playGrunt.play();
    comLaugh.play();
    gameOver();
    computer_win_count = computer_win_count + 1;
    gameCounterImg(computer_win_count,cwinCount);
    fightRoundDiv.innerHTML = youLose;
  } else if (pScore.innerHTML > 0 && cScore.innerHTML == 0){
    pMoveName.innerHTML = "Winner";
    pDisplay.innerHTML = pWin;
    cDisplay.innerHTML = cLose;
    cMoveName.innerHTML = "";
    cIcon.innerHTML = "";
    setTimeout(()=>{winAudio.play()},700);
    comGrunt.play();
    gameOver();
    player_win_count = player_win_count + 1;
    gameCounterImg(player_win_count,pwinCount);
    fightRoundDiv.innerHTML = youWin;
  }
}

// game over
const gameOver = () => {
  punch.disabled = true;
  punch.style.cursor = "not-allowed";
  punch.classList.remove("hover");
  kick.disabled = true;
  kick.style.cursor = "not-allowed";
  kick.classList.remove("hover");
  grapple.disabled = true;
  grapple.style.cursor = "not-allowed";
  grapple.classList.remove("hover");
  block.disabled = true;
  block.style.cursor = "not-allowed";
  block.classList.remove("hover");
}

//game fight 
const gamefight = () => {
  punch.disabled = false;
  punch.style.cursor = "pointer";
  punch.classList.add("hover");
  kick.disabled = false;
  kick.style.cursor = "pointer";
  kick.classList.add("hover");
  grapple.disabled = false;
  grapple.style.cursor = "pointer";
  grapple.classList.add("hover");
  block.disabled = false;
  block.style.cursor = "pointer";
  block.classList.add("hover");
}

//display img toggle
const playDpLoseImg = () => {
  playerDP.innerHTML = ryuLoseDisplay;
  setTimeout(() => {
    playerDP.innerHTML = ryuWinDisplay;
  }, 2000);
}
const comDpLoseImg = () => {
  computerDP.innerHTML = bisonLoseDisplay;
  setTimeout(() => {
    computerDP.innerHTML = bisonWinDisplay;
  }, 2000);
}


//end of game
const btnGameEnd = () => {
  audio.pause();
  pMoveName.style.visibility = "hidden";
  cMoveName.style.visibility = "hidden";
  left_buttons.style.transform = "scale(0)";
  right_buttons.style.transform = "scale(0)";
  pIcon.innerHTML = "";
  cIcon.innerHTML = "";
}

const gameEnd = () => {
  if(pwinCount.innerHTML === four && cwinCount.innerHTML < four) {
    btnGameEnd();
    setTimeout(() => {
      startScreen.style.backgroundImage = "url(./img/ryu-ending.gif)";
      startScreen.style.zIndex = 1; 
      fightlogoAdd.innerHTML += `<img src="./img/ryu-win-display.png" id="finalRyu" alt="">` + 
      `<img src="./img/bison-lose-display.png" id="finalBison" alt="">` + 
      `<img src="./img/thank-you-mess.png" id="thankyou" alt="thankyou">`;
    }, 3000);
  } else if(cwinCount.innerHTML == four && pwinCount.innerHTML < four){
    btnGameEnd();
    setTimeout(() => {
      startScreen.style.backgroundImage = "url(./img/bison-ending.gif)";
      startScreen.style.zIndex = 1; 
      fightlogoAdd.innerHTML += `<img src="./img/ryu-lose-display.png" id="finalRyu" alt="">` + 
      `<img src="./img/bison-win-display.png" id="finalBison" alt="">` + 
      `<img src="./img/thank-you-mess.png" id="thankyou" alt="thankyou">`;
    }, 3000);
  }
};

//buttons eventlistner
punch.addEventListener("click",function() {
  pDisplay.innerHTML = pPunch;
  com_decision();
  pMoveName.innerHTML = "Punch";
  if (cMoveName.innerHTML === "Punch"){
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  } else if (cMoveName.innerHTML === "Kick") {
    cScore.innerHTML = (cScore.innerHTML - 1);
    pIcon.innerHTML = winIcon;
    cIcon.innerHTML = loseIcon;
    comDpLoseImg();
  } else if (cMoveName.innerHTML === "Grapple") {
    cScore.innerHTML = (cScore.innerHTML - 1);
    pIcon.innerHTML = winIcon;
    cIcon.innerHTML = loseIcon;
    comDpLoseImg();
  } else if (cMoveName.innerHTML === "Block") {
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  }
  after_start_moveDisplay();
  phealthBarCounter();
  winner();
  gameEnd();
});

kick.addEventListener("click",function() {
  pDisplay.innerHTML = pKick;
  com_decision();
  pMoveName.innerHTML = "Kick";
  if (cMoveName.innerHTML === "Punch"){ 
    pScore.innerHTML = (pScore.innerHTML - 1);
    pIcon.innerHTML = loseIcon;
    cIcon.innerHTML = winIcon;
    playDpLoseImg();
  } else if (cMoveName.innerHTML === "Kick") {
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  } else if (cMoveName.innerHTML === "Grapple") {
    cScore.innerHTML = (cScore.innerHTML - 1);
    pIcon.innerHTML = winIcon;
    cIcon.innerHTML = loseIcon;
    comDpLoseImg();
  } else if (cMoveName.innerHTML === "Block") {
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  }
  after_start_moveDisplay();
  phealthBarCounter();
  winner();
  gameEnd();
});

grapple.addEventListener("click",function() {
  pDisplay.innerHTML = pGrapple;
  com_decision();
  pMoveName.innerHTML = "Grapple";
  if (cMoveName.innerHTML === "Punch"){ 
    pScore.innerHTML = (pScore.innerHTML - 1);
    pIcon.innerHTML = loseIcon;
    cIcon.innerHTML = winIcon;
    playDpLoseImg();
  } else if (cMoveName.innerHTML === "Kick") {
    pScore.innerHTML = (pScore.innerHTML - 1);
    pIcon.innerHTML = loseIcon;
    cIcon.innerHTML = winIcon;
    playDpLoseImg();
  } else if (cMoveName.innerHTML === "Grapple") {
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  } else if (cMoveName.innerHTML === "Block") {
    cScore.innerHTML = (cScore.innerHTML - 1);
    pIcon.innerHTML = winIcon;
    cIcon.innerHTML = loseIcon;
    comDpLoseImg();
  }
  after_start_moveDisplay();
  phealthBarCounter();
  winner();
  gameEnd();
});

block.addEventListener("click",function() {
  pDisplay.innerHTML = pBlock;
  com_decision();
  pMoveName.innerHTML = "Block";
  if (cMoveName.innerHTML === "Punch"){ 
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  } else if (cMoveName.innerHTML === "Kick") {
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  } else if (cMoveName.innerHTML === "Grapple") {
    pScore.innerHTML = (pScore.innerHTML - 1);
    pIcon.innerHTML = loseIcon;
    cIcon.innerHTML = winIcon;
    playDpLoseImg();
  } else if (cMoveName.innerHTML === "Block"){
    pIcon.innerHTML = drawIcon;
    cIcon.innerHTML = drawIcon;
  }
  after_start_moveDisplay();
  phealthBarCounter();
  winner();
  gameEnd();
});

fight.addEventListener("click",function() {
  pDisplay.innerHTML = pStance;
  cDisplay.innerHTML = cStance;
  pMoveName.innerHTML = "Stance";
  cMoveName.innerHTML = "Stance";
  pIcon.innerHTML = "";
  cIcon.innerHTML = "";
  pScore.innerHTML = full_Health_player;
  cScore.innerHTML = full_health_computer;
  pHealthBar.classList.remove("hitBar4","hitBar3","hitBar2","hitBar1","hitBar0");
  cHealthBar.classList.remove("hitBar4","hitBar3","hitBar2","hitBar1","hitBar0");
  gamefight();
  setTimeout(()=>{fightSound.play()}, 1500);
  gamefightAudio();
  fightRound();
});

reset.addEventListener("click",()=> {
  audio.pause();
  setTimeout(() => {
    location.reload();
  }, 100);
})

guide.addEventListener("click", ()=>{
  manaulAdd.innerHTML += manaul + manaul2;
  next.style.visibility = "visible";
})

next.addEventListener("click", ()=>{
  next.style.visibility = "hidden";
  document.getElementById("manaul").style.transform = "scale(0)";
  document.getElementById("manaul2").style.transform = "scale(0)";
  setTimeout(() => {
    manaulAdd.innerHTML = "";
  }, 1100);
});
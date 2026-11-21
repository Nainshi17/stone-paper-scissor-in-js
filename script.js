let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = ()=>{
    const options = ["rock","paper","scissors"];
    //math class have random fun that generate random no. value as array idx
     //math.random()  only 0 to 1 no. ko random pick krta h
     //but we need to 0 to 2
     //so we can use math.random()*3
     //desimal value hatane ke liye  { math.floor(math.random()*10) } 0 to 9
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw");
     msg.innerText="game draw. play again.";
      msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
   console.log("user choice = ",userChoice);
   //generate computer choice -> modular
    const compChoice=genCompchoice();
     console.log("computer choice = ",compChoice);

     if(userChoice===compChoice){
        //draw game
        drawGame();
     }else{
        let userWin = true;
        if(userChoice === "rock"){
            //comp scissor,paper
           userWin = compChoice === "paper"?false : true;
        }else if(userChoice === "paper"){
            //comp rock,scissors
            userWin = compChoice==="scissors"?false:true;
        }else{
            //comp rock,paper
            userWin= compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }

};

// Reset Game
const resetGame = () => {
    userscore = 0;
    compscore = 0;

    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;

    msg.innerText = "Play your move!";
    msg.style.backgroundColor = "#081b31";
};
const resetBtn = document.querySelector("#reset-btn");
    resetBtn.addEventListener("click", resetGame);

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
      
        playGame(userChoice);
    });
});
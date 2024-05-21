let userScore = 1;
let comScore = 1;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg_text");
let userScoreNum = document.querySelector(".user_score_num");
let comScoreNum = document.querySelector(".com_socre_num");

choices.forEach((choice) => {
    choice.addEventListener("click", (event) => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let showWinner = (userWin, userChoice, comChoice) => {
    if(userWin){
        msg.innerText = `You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.background = "green";
        userScoreNum.innerText = userScore;
        userScore++;
    } else{
        msg.innerText = `You Lose! ${userChoice} beats your ${comChoice}`;
        msg.style.background = "red";
        comScoreNum.innerText = comScore;
        comScore++;
    };
};

let playGame = (userChoice) => {
    let comChoice = genComChoice();
    if(userChoice === comChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        };
        showWinner(userWin, userChoice, comChoice);
    };
};

let genComChoice = () => {
    let comOption = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return comOption[randomIndex];
};

let drawGame = () => {
    console.log("Draw The Game");
    msg.innerText = "Game was draw. Play again."
    msg.style.background = "blue";
};
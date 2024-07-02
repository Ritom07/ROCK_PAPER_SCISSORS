let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userTotalWin = document.querySelector("#user-score");
const compTotalWin = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

const genCompChoice = () => {               
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);     // genarate random index
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner= (userWin, userChoice, compChoice)=>{
    if (userWin === true) {
        userScore++;
        userTotalWin.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compTotalWin.innerText = compScore;
        msg.innerText = `You Lost. Comp's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    console.log(`User choice ${userChoice}`);
    // generate computer choice
    const compChoice = genCompChoice();
    console.log(`User choice ${compChoice}`);

    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            // comp has choice of paper and scissors
            if(compChoice === "paper") userWin = false;
            else userWin = true;
        }
        else if (userChoice === "paper") {
            // comp has choice of rock and scissors
            userWin = compChoice === "scissors" ? false : true; //if(compChoice === "scissors") userWin = false;   else userWin = true;
            
        }
        else{
            // comp has choice of rock and paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});


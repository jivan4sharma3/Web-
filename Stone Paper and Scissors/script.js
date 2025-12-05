let user_score = 0
let com_score = 0
let draw_score = 0

const choices = document.querySelectorAll(".choice")
const result = document.getElementById("msg")
const userScore = document.getElementById("user-score")
const comScore = document.getElementById("com-score")
const draw = document.getElementById("draw")

const genComputerChoice = () => {
    const options = ["stone", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * options.length)
    return options[randIdx]
}

const drawGame = () => {
    result.textContent = "🤝 Game was Draw"
    draw_score ++
    draw.textContent = draw_score
}

const showWinner = (userWin) => {
    if (userWin) {
        result.textContent = "🎉 You win!"
        user_score++
        userScore.textContent = user_score
    }
    else {
        result.textContent = "😢 You lose!"
        com_score++
        comScore.textContent = com_score
    }
}

const playGame = (userChoices) => {
    const compChoice = genComputerChoice()
    console.log("computer choices =", compChoice)
    if (userChoices == compChoice) {
        drawGame()
    }
    else {
        let userWin = true;
        if (userChoices === "stone") {
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoices === "paper") {
            userWin = compChoice === "scissors" ? false : true
        }
        else {
            userWin = compChoice === "stone" ? false : true
        }
        showWinner(userWin)
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoices = choice.getAttribute("id")
        console.log("user choices = ", userChoices)
        playGame(userChoices)
    })
})
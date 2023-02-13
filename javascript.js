let randomChoiceToComputer = () => parseInt(Math.random() * (4 - 1) + 1); //Generating a number between 1 and 3

function computerChoice() {
  // Taking the value generated by the machine and setting it as a computer choice.
  let choice;
  switch (randomChoiceToComputer()) {
    case 1:
      return (choice = "rock");
    case 2:
      return (choice = "paper");
    case 3:
      return (choice = "scissors");
    default:
      return console.log("error");
  }
}

function defPlayerChoice() {
  let defPlayerChoice;
  playerChoice = parseInt(
    prompt(`CHOOSE A NUMBER:
  1 - Rock;
  2 - Paper;
  3 - Scissors;`)
  );

  switch (playerChoice) {
    case 1:
      return (defPlayerChoice = "rock");
    case 2:
      return (defPlayerChoice = "paper");
    case 3:
      return (defPlayerChoice = "scissors");
    default:
      return console.log("error");
  }
}

function game() {
  let choicePC;
  let choicePlayer;
  let scorePc = 0;
  let scorePlayer = 0;
  let score;

  for (let i = 1; i <= 5; i++) {
    choicePC = computerChoice();
    choicePlayer = defPlayerChoice();

    console.log(`\n\nRound ${i}!\n\n\n\n`);

    console.log(`PC: ${choicePC} ||| Player: ${choicePlayer}`);

    switch (true) {
      case choicePC === choicePlayer:
        console.log("Draww!!!");
        break;

      // Pc win
      case choicePC === "rock" && choicePlayer === "scissors":
        console.log("PC WINN!");
        scorePc += 1;
        break;
      case choicePC === "scissors" && choicePlayer === "paper":
        console.log("PC WINN!");
        scorePc += 1;
        break;
      case choicePC === "paper" && choicePlayer === "rock":
        console.log("PC WINN!");
        scorePc += 1;
        break;

      //player win
      case choicePlayer === "rock" && choicePC === "scissors":
        console.log("Player WINN!");
        scorePlayer += 1;
        break;
      case choicePlayer === "scissors" && choicePC === "paper":
        console.log("Player WINN!");
        scorePlayer += 1;
        break;
      case choicePlayer === "paper" && choicePC === "rock":
        console.log("Player WINN!");
        scorePlayer += 1;
        break;
    }
    score = `FINAL RESULT ->>> PC: ${scorePc} | Player: ${scorePlayer}`;
    console.log(score);
  }

  return score;
}

game();

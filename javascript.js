let randomChoiceToComputer = () => parseInt(Math.random() * (4 - 1) + 1);

function computerChoice() {
  switch (randomChoiceToComputer()) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      console.log("error");
  }
}

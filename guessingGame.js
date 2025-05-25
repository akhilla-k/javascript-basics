// Function to get the computer's random choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 20 + 1);
  return computerChoice;
}

// Function to get user input and validate it
function getUserChoice() {
  const userChoice = Number(prompt("Enter your guess (number) between 1 to 20:"));
  if (userChoice > 0 && userChoice <= 20) {
    return userChoice;
  } else {
    console.log("You have entered an invalid number, please enter a valid number.");
    return getUserChoice();
  }
}

// Number of attempts allowed
let guess = 5;
let computerChoice = getComputerChoice();

for (let i = 1; i <= guess; i++) {
  let attemptLeft = guess - i;
  let userChoice = getUserChoice();

  if (userChoice > computerChoice) {
    console.log("Your GUESS is too HIGH.");
    console.log(`You have ${attemptLeft} CHANCES left.`);
  } else if (userChoice < computerChoice) {
    console.log("Your GUESS is too LOW.");
    console.log(`You have ${attemptLeft} CHANCES left.`);
  } else {
    console.log(`HEY...! Your GUESS is CORRECT. You are GENIUS. You completed it in ${i} attempt(s).`);
    break;
  }

  if (attemptLeft === 0 && userChoice !== computerChoice) {
    console.log(`The correct number was ${computerChoice}. Better luck next time!`);
  }
}

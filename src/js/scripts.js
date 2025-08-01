//Function -- main
async function main() {

    //Get Element -- play and leaderboard buttons
    const playbtn = document.getElementById('playbtn');
    const leaderboardbtn = document.getElementById('leaderboardbtn');





}





//hidden original program

/*
async function main() {


//Define Arrays and Variables -- options and selection
const menuOptions = new Set(["a", "play game", "b", "view highscores", "c", "quit"]);
const repeatingOptions = new Set (["a", "play game", "b", "view highscores"]);
const menuA = new Set(["a", "play game"]);
const menuB = new Set(["b", "view highscores"]);
const menuC = new Set(["c", "quit"]);
let leaderboard = { }
let menuSelect = " ";

//Menu Screen
do {
  output("Welcome to Guess The Number! \na. Play Game \nb. View Highscores \nc. Quit");
  menuSelect = await input("");
  menuSelect = menuSelect.toLowerCase();

  //Invalid user input
  while (!menuOptions.has(menuSelect)) {
    output("Input does not match available options. Please enter \"a\", \"b\", or \"c\".");
    menuSelect = await input("");
  }

  //Play game -- generate number
  let randomNum = Math.round(Math.random() * 100) + 1;
  let guessTracker = 0;
  if (menuA.has(menuSelect)) {
    userGuess = await input("Guess a number between 1 and 100: ");

    //Play game -- incorrect guess
    while (userGuess != randomNum) {

      //Guess is too high
      if (userGuess > randomNum) {
        output("Too high!");
        userGuess = await input("Guess again: ");
        guessTracker = guessTracker + 1;
      }

      //Guess is too low
      else if (userGuess < randomNum) {
        output("Too low!");
        userGuess = await input("Guess again: ");
        guessTracker = guessTracker + 1;
      }

      //Guess is invalid
      while (isNaN(userGuess) || !userGuess || userGuess < 1 || userGuess > 100) {
        output("Your input must be a number between 1 and 100.");
        userGuess = await input("");
      }
    }

    //Guess is correct
    if (userGuess == randomNum) {

      //1 guess
      if (guessTracker == 1) {
        highscore = await input("Congratulations! You guessed the number, and it took you " + guessTracker + " try to guess it! \nPlease type your name to be displayed on the leaderboard: ");
        highscore = highscore.trim()
      }
      
      //Multiple guesses
      else {
        highscore = await input("Congratulations! You guessed the number, and it took you " + guessTracker + " tries to guess it! \nPlease type your name to be displayed on the leaderboard: ");
        highscore = highscore.trim()
      }

      //Invalid input (is empty)
      while (!highscore) {
        highscore = await input("You must enter at least 1 non-whitespace character to continue. ");
        highscore = highscore.trim();
      }

      //Invalid input (name already in use)
      while (highscore in leaderboard) {
        highscore = await input("This name is already on the leaderboard. Please choose another name: ")
      }
      leaderboard[highscore] = guessTracker;
      }
    }

  //View highscores
  if (menuB.has(menuSelect)) {
    output(`These are the scores for this session: `);
    for (const scores of Object.entries(leaderboard)) {
      output(scores);
    }
  }
} while (repeatingOptions.has(menuSelect));

//Quit
if (menuC.has(menuSelect)) {
  output("Goodbye! Thanks for playing!");
}
}
*/
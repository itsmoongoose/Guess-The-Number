//Defining Variables
let leaderboard = {
    Julie: 5,
    David: 6,
}
const menubtn = document.getElementById("menubtn");
const playbtn = document.getElementById("playbtn");
const leaderboardbtn = document.getElementById("leaderboardbtn");
const arcadeLogo = document.getElementById("arcade-logo");
const container = document.getElementById("container");
const containerOutput = document.getElementById("output");
const leaderboardTitle = document.getElementById("leaderboard-title");
const guessthenumberTitle = document.getElementById("guess-the-number-title");
const shadowManRest = document.getElementById("shadow-man-rest");
let leaderboardName = "";
let gameTracker = 0;

//Function -- hide and reveal elements
function hideElements() {
    arcadeLogo.style.display = 'none';
    playbtn.style.display = 'none';
    leaderboardbtn.style.display = 'none';
    menubtn.style.display = 'inline-block';
    container.style.display = 'inline-block';
    containerOutput.style.display = 'inline-block';
}

//Function -- display leaderboard score
function displayLeaderboard() {
    for (let [username, score] of Object.entries(leaderboard)) {
            output(`${username}  ${score}`);
        }
}

//Function -- main
async function main() {

    //Hiding elements
    menubtn.style.display = 'none';
    container.style.display = 'none';
    containerOutput.style.display = 'none';
    leaderboardTitle.style.display = 'none';
    guessthenumberTitle.style.display = 'none';
    shadowManRest.style.display = 'none';

    //Menu -- play button
    playbtn.addEventListener('click', async function() {

        //Hiding and revealing elements
        hideElements();
        guessthenumberTitle.style.display = 'inline-block';
        output(" \n \n \n"); // adds 3 lines of space underneath leaderboardTitle (image) to separate output/container

        //Game -- generate number
        let correctNum = Math.round(Math.random() * 99) + 1;
        output(correctNum);
        let guessTracker = 0;
        output("Guess a number from 1 to 100: ");
        let userGuess = await input("");

        //Incorrect Guess
        while (userGuess != correctNum) {

            //Invalid Guess -- throws error
            while (isNaN(userGuess) || !userGuess || userGuess < 1 || userGuess > 100) {
                output("ERROR - Guess must be a whole number from 1 to 100: ");
                userGuess = await input("");
            }

            //Guess is too high
            if (userGuess > correctNum) {
                guessTracker = guessTracker + 1;
                output("Too High! Guess Again: ");
                userGuess = await input("");
            }

            //Guess is too low
            if (userGuess < correctNum) {
                guessTracker = guessTracker + 1;
                output("Too Low! Guess Again: ");
                userGuess = await input("");
            }
        }

        //Correct Guess
        if (userGuess == correctNum) {
            guessTracker = guessTracker + 1;
            if (guessTracker == 1) {
                output("INCREDIBLE! You guessed the number in a single try! \nPlease enter your name to be displayed on the leaderboard: ");
            } else {
                output("Congratulations! You guessed the number in " + guessTracker + " tries! \nPlease enter your name to be displayed on the leaderboard: ");
            }

            //Getting leaderboard name
            let leaderboardName = await input("");
            leaderboardName = leaderboardName.trim();

            //ERROR -- Name is blank or already exists
            while (!leaderboardName || leaderboardName in leaderboard) {
        
                //empty name
                if (!leaderboardName) {
                    output("You must enter at least 1 non-whitespace character to continue: ");
                    leaderboardName = await input("");
                    leaderboardName = leaderboardName.trim();
                
                //name already exists in leaderboard
                } else if (leaderboardName in leaderboard) {
                    output("This name is already on the leaderboard. Please choose another: ");
                    leaderboardName = await input("");
                    leaderboardName = leaderboardName.trim();
                }
            }

            gameTracker = gameTracker + 1;
            if (gameTracker == 1) {
                leaderboard["Nathan"] = 7;
            } else if (gameTracker == 2) {
                leaderboard["Katherine"] = 4;
            } //else if (gameTracker == 3) {

            //} else if (gameTracker == 4) {

            //}

            output("Successfully added score to leaderboard!");
        }
    });

    //Menu -- leaderboard button
    leaderboardbtn.addEventListener('click', function() {

        //Hiding and revealing elements
        hideElements();
        leaderboardTitle.style.display = 'inline-block';
        output(" \n \n \n"); // adds 3 lines of space underneath leaderboardTitle (image) to separate output/container

        //0 games played
        if (gameTracker == 0) {
            displayLeaderboard();
        }

        //1 game played
        if (gameTracker == 1) {
            shadowManRest.style.display = 'inline-block';
            displayLeaderboard();
        }

    });

    //Menu -- return to menu
    menubtn.addEventListener('click', function() {

        //Display Menu -- hiding and revealing elements
        menubtn.style.display = 'none';
        container.style.display = 'none';
        containerOutput.style.display = 'none';
        leaderboardTitle.style.display = 'none';
        guessthenumberTitle.style.display = 'none';
        shadowManRest.style.display = 'none';
        arcadeLogo.style.display = 'inline-block';
        playbtn.style.display = 'inline-block';
        leaderboardbtn.style.display = 'inline-block';

        //Removing previous outputs
        containerOutput.innerHTML = "";
    });

//main function ends
}
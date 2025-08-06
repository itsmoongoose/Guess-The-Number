//Test leaderboards
let leaderboard1 = {}
let leaderboard2 = {}

//Defining Variables
//let leaderboard1 = { }; //leaderboard array for scores that only took 1 guess
//let leaderboard2 = { }; //leaderboard array for scores with 2+ guesses
const menubtn = document.getElementById("menubtn");
const playbtn = document.getElementById("playbtn");
const leaderboardbtn = document.getElementById("leaderboardbtn");
const arcadeLogo = document.getElementById("arcade-logo");
const container = document.getElementById("container");
const containerOutput = document.getElementById("output");
let leaderboardName = "";

//Function -- hide and reveal elements
function hideElements() {
    arcadeLogo.style.display = 'none';
    playbtn.style.display = 'none';
    leaderboardbtn.style.display = 'none';
    menubtn.style.display = 'inline-block';
    container.style.display = 'inline-block';
    containerOutput.style.display = 'inline-block';
}

//Function -- return to menu message
function menuMessage() {
    output("Successfully added score to leaderboard! \nReturn to the menu to view the leaderboard or play again.");
}

//Function -- invalid name
async function invalidName() {
    while (!leaderboardName || leaderboardName in leaderboard1 || leaderboardName in leaderboard2) {
        
        //empty name
        if (!leaderboardName) {
            output("You must enter at least 1 non-whitespace character to continue: ");
            leaderboardName = await input("");
            leaderboardName = leaderboardName.trim();

        //name already exists in leaderboard
        } else if (leaderboardName in leaderboard1 || leaderboardName in leaderboard2) {
            output("This name is already on the leaderboard. Please choose another: ");
            leaderboardName = await input("");
            leaderboardName = leaderboardName.trim();
        }
    }
}

//Function -- main
async function main() {

    //Hiding elements
    menubtn.style.display = 'none';
    container.style.dispaly = 'none';
    containerOutput.style.display = 'none';

    //Menu -- play button
    playbtn.addEventListener('click', async function() {

        //Hiding and revealing elements
        hideElements();

        //Game -- generate number
        let correctNum = Math.round(Math.random() * 99) + 1;
        output(correctNum);
        let guessTracker = 0;
        output("Guess a number between 1 and 100: ");
        let userGuess = await input("");

        //Incorrect Guess
        while (userGuess != correctNum) {

            //Invalid Guess -- throws error
            while (isNaN(userGuess) || !userGuess || userGuess < 1 || userGuess > 100) {
                output("ERROR - Guess must be a number between 1 and 100: ");
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
            let leaderboardName = "";

            //1 guess
            if (guessTracker == 1) {
                output("INCREDIBLE! You guessed the number in a single try! \nPlease enter your name to be displayed on the leaderboard: ");
                leaderboardName = await input("");
                leaderboardName = leaderboardName.trim();
                invalidName();
                leaderboard1[leaderboardName] = guessTracker; //adding name and score to leaderboard1
            } else {

                //Multiple guesses
                output("Congratulations! You guessed the number in " + guessTracker + " tries! \nPlease enter your name to be displayed on the leaderboard: ");
                leaderboardName = await input("");
                leaderboardName = leaderboardName.trim();
                invalidName();
                leaderboard2[leaderboardName] = guessTracker; //adding name and score to leaderboard2
            }

            //adding name to leaderboard
            if (guessTracker == 1) {
                leaderboard1[leaderboardName] = guessTracker;
            } else {
                leaderboard2[leaderboardName] = guessTracker;
            }

            //return to menu message
            menuMessage();
        }
    });

    //Menu -- leaderboard button
    leaderboardbtn.addEventListener('click', function() {

        //Hiding and revealing elements
        hideElements();

        //Displaying scores
        for (let [username, score] of Object.entries(leaderboard1)) {
            output(`${username}  ${score}`);
        }
        for (let [username, score] of Object.entries(leaderboard2)) {
            output(`${username}  ${score}`);
        }
    });

    //Menu -- return to menu
    menubtn.addEventListener('click', function() {

        //Display Menu -- hiding and revealing elements
        menubtn.style.display = 'none';
        arcadeLogo.style.display = 'inline-block';
        playbtn.style.display = 'inline-block';
        leaderboardbtn.style.display = 'inline-block';
        container.style.display = 'none';
        containerOutput.style.display = 'none';

        //Removing previous outputs
        containerOutput.innerHTML = "";
    });

//main function ends
}
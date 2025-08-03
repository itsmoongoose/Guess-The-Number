//Defining Variables
let leaderboardArray = [ ];
const menubtn = document.getElementById("menubtn");
const playbtn = document.getElementById("playbtn");
const leaderboardbtn = document.getElementById("leaderboardbtn");
const arcadeLogo = document.getElementById("arcade-logo");
const container = document.getElementById("container");
const containerOutput = document.getElementById("output");

//Function -- hide and reveal elements
function hideElements() {
    arcadeLogo.style.display = 'none';
    playbtn.style.display = 'none';
    leaderboardbtn.style.display = 'none';
    menubtn.style.display = 'inline-block';
    container.style.display = 'inline-block';
    containerOutput.style.display = 'inline-block';
}

//Function -- main
async function main() {
    try {
        //Hiding elements
        menubtn.style.display = 'none';
        container.style.dispaly = 'none';
        containerOutput.style.display = 'none';

        //Menu -- play button
        playbtn.addEventListener('click', async function() {

            //Hiding and revealing elements
            hideElements();

            //Game -- generate number
            let correctNum = Math.round(Math.random() * 100) + 1;
            let guessTracker = 0;
            output("Guess a number between 1 and 100: ");
            let userGuess = await input("");
            while (userGuess != correctNum) {

                //Invalid Guess -- throws error
                while (isNaN(userGuess) || !userGuess || userGuess < 1 || userGuess > 100) {
                    throw new Error("Guess must be a number between 1 and 100");
                }

                //Guess is too high
                if (userGuess > correctNum) {
                    guessTracker = guessTracker + 1;
                    output("Too Low! Guess Again: ");
                    await input("");
                }

                //Guess is too low
                if (userGuess < correctNum) {
                    guessTracker = guessTracker + 1;
                    output("Too High! Guess Again: ");
                    await input("");
                }
            }

        });

        //Menu -- leaderboard button
        leaderboardbtn.addEventListener('click', function() {

            //Hiding and revealing elements
            hideElements();

            //Displaying scores
            for (let score of leaderboardArray) {
                output(score);
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
        });

    //try ends
    } catch(error) {
        output(`Error: ${error}`);
    }

//main function ends
}
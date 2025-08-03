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

    //Hiding elements
    menubtn.style.display = 'none';
    container.style.dispaly = 'none';
    containerOutput.style.display = 'none';

    //Menu -- play button
    playbtn.addEventListener('click', function() {

        //Hiding and revealing elements
        hideElements();

        //Game starts
        

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

//main function ends
}
//Defining Variables
let leaderboardArray = [ ];

//Function -- main
async function main() {

    //Defining Variables
    const menubtn = document.getElementById("menubtn");
    const playbtn = document.getElementById("playbtn");
    const leaderboardbtn = document.getElementById("leaderboardbtn");
    const arcadeLogo = document.getElementById("arcade-logo");

    //Game start
    menubtn.style.display = 'none';

    //Menu -- play button
    playbtn.addEventListener('click', function() {

        //Hiding arcade logo and buttons
        arcadeLogo.style.display = 'none';
        playbtn.style.display = 'none';
        leaderboardbtn.style.display = 'none';
        menubtn.style.display = 'inline-block';

        //Game starts
        

    });

    //Menu -- leaderboard button
    leaderboardbtn.addEventListener('click', function() {

        //Hiding arcade logo and buttons
        arcadeLogo.style.display = 'none';
        playbtn.style.display = 'none';
        leaderboardbtn.style.display = 'none';
        menubtn.style.display = 'inline-block';

        //Displaying scores
        for (let score of leaderboardArray) {
            output(score);
        }
    });

    //Menu -- return to menu
    menubtn.addEventListener('click', function() {
        menubtn.style.display = 'none'; //hide menu button
        menuClicked = true;

        //Display Menu -- reveal play and leaderboard buttons and arcade logo
        arcadeLogo.style.display = 'inline-block';
        playbtn.style.display = 'inline-block';
        leaderboardbtn.style.display = 'inline-block';
    });

//main function ends    
}
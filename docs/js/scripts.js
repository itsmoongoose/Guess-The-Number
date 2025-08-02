//Defining Variables
let leaderboardArray = [ ];
let menuClicked;

//Function -- main
async function main() {

    //Makes sure all content is loaded before executing code
    document.addEventListener('DOMContentLoaded', function() {

        //Defining Variables
        const menubtn = document.getElementById("menubtn");
        const playbtn = document.getElementById("playbtn");
        const leaderboardbtn = document.getElementById("leaderboardbtn");
        const arcadeLogo = document.getElementById("arcade-logo");

        //Game start
        menubtn.style.display = 'none';

            //Menu -- play button
            playbtn.addEventListener('click', () => {

                //Hiding arcade logo and buttons
                arcadeLogo.style.visibility = "hidden";
                playbtn.style.display = 'none';
                leaderboardbtn.style.display = 'none';
                menubtn.style.display = 'inline-block';

            //Game starts
                
            });

            //Menu -- leaderboard button
            leaderboardbtn.addEventListener('click', () => {

                //Hiding arcade logo and buttons
                arcadeLogo.style.visibility = "hidden";
                playbtn.style.display = 'none';
                leaderboardbtn.style.display = 'none';
                menubtn.style.display = 'inline-block';

                //Displaying scores
                for (let score of leaderboardArray) {
                    output(score);
                }
            });

            //Menu -- return to menu
            menubtn.addEventListener('click', () => {
                menubtn.style.display = 'none'; //hide menu button
                menuClicked = true;

                //Display Menu -- reveal play and leaderboard buttons and arcade logo
                document.getElementById("menubtn").onclick = function() {
                    document.getElementById("arcade-logo").style.visibility = "visible";
                }
                playbtn.style.display = 'inline-block';
                leaderboardbtn.style.display = 'inline-block';
            });

        //DOMContentLoaded event listener ends
        });

//main function ends    
}
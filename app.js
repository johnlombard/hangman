// User presses a key to start the game 
// A word is randomly selected from an array
// separate each letter of the word
// Each letter is replaced with a dash
// The User is limited to a specific amount of guesses
// If the user guesses correctly, every instance the letter in the word is displayed
// If the user guesses incorrectly, the amount of guesses is decreased by one
// The user either runs out of guesses (loses++) or the word is fully displayed (wins++)
// stop the game, offer option to play again

var possibleTeams = [
    "Arsenal",
    "Aston Villa",
    "Barnsley",
    "Birmingham City",
    "Blackburn Rovers",
    "Blackpool",
    "Bolton Wanderers",
    "Bournemouth",
    "Bradford City",
    "Brighton & Hove Albion",
    "Burnley",
    "Cardiff City",
    "Charlton Athletic",
    "Chelsea",
    "Coventry City",
    "Crystal Palace",
    "Derby County",
    "Everton",
    "Fulham",
    "Huddersfield Town",
    "Hull City",
    "Ipswich Town",
    "Leeds United",
    "Leicester City",
    "Liverpool",
    "Manchester City",
    "Manchester United",
    "Middlesbrough",
    "Newcastle United",
    "Norwich City",
    "Nottingham Forest",
    "Oldham Athletic",
    "Portsmouth",
    "Queens Park Rangers",
    "Reading",
    "Sheffield United",
    "Southampton",
    "Stoke City",
    "Sunderland",
    "Swansea City",
    "Swindon Town",
    "Tottenham Hotspur",
    "Watford",
    "West Bromwich Albion",
    "West Ham United",
    "Wigan Athletic",
    "Wimbledon",
    "Wolverhampton Wanderers"
];

var gameStarted = false;
var lettersToBeGuessed = [];

// function picks random team
const randomlyPickTeam = () => {
    var teamToBeGuessed = possibleTeams[Math.floor(Math.random() * possibleTeams.length)];
    lettersToBeGuessed = teamToBeGuessed.split('');
    
    console.log(teamToBeGuessed);
    console.log(lettersToBeGuessed);

};


const startGame = () => {
    randomlyPickTeam();
    gameStarted = true;
    console.log("The Game has started ")
};

const separatePickTeam = () => {

};

startGame();
// if (gameStarted == false) {document.onkeyup = function(e){
//     if(e.keyCode == 32){
//        

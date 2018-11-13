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
var guesses = [];
var remainingGuesses = 10;
var wins = 0;
var losses = 0;


// Limit to only lower case no numbers etc.
$(document).ready(function () {
    $(".start").show(100);
    $(".during").hide(100);
    $(".won").hide(100);
    $(".lost").hide(100);
    $(document).keypress(function (e) {
        if (e.keyCode == 0 || e.keyCode == 32 && gameStarted == false) {// `0` works in mozilla and `32` in other browsers

            startGame();
            $(".start").hide(100);
            $(".during").show(100);
        }
    });
});






// function picks random team
const randomlyPickTeam = () => {
    // selects team
    var teamToBeGuessed = possibleTeams[Math.floor(Math.random() * possibleTeams.length)];

    // splits to letters
    lettersToBeGuessed = teamToBeGuessed.split('');


    var dashes = teamToBeGuessed.replace(/[a-zA-Z]/g, '-');

    console.log()
    //updates the dom

    $("#letters").html(dashes);


    console.log(teamToBeGuessed);
    console.log(lettersToBeGuessed);


};


// starts game
const startGame = () => {
    randomlyPickTeam();
    gameStarted = true;
    console.log("The Game has started ");
    playGame();
    $(".during").show(100);
    $(".lost").hide(100);
};

const playGame = () => {
    document.onkeypress = function (event) {
        var pressedKey = event.keyCode;
        var stringKey = String.fromCharCode(pressedKey);


        guesses.push(stringKey);

        console.log(stringKey);
        remainingGuesses = remainingGuesses - 1;
        console.log(guesses);
        $(".remainingGuesses").html(remainingGuesses);
        $(".lettersGuessed").html(guesses);

        if (remainingGuesses == 0) {

            // Have it so you cant add to guesses array when false 
            gameStarted = false;
            $(".during").hide(100);

            $(".record").html("Record: " + wins + "-" + losses);
            $(".lost").show(100);
            remainingGuesses = 11;
            guesses = [];

        }
    };
}
// if remaining guesses = -1 end game

// if (gameStarted == false) {
//     $(".during").hide(100);
//     $(".won").hide(100);
//         $(".lost").hide(100);
//     $(window).keypress(function (e) {
//         if (e.key === ' ' || e.key === 'Spacebar') {
//             // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
//             e.preventDefault()

//             $(".start").hide(100);



//             startGame();
// //         }
//     })

//     document.onkeyup = function (e) {
//         if (e.keyCode == 32) {

//         }
//     }
// };



// // var game = {}



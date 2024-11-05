"use strict";
//---------------------Setting the Data:

// Set the score = 20
let score = 20;
const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};
setScore(score);

//Set the Highscore
let highscore = 0;
const setHighscore = function (highscore) {
  document.querySelector(".highscore").textContent = highscore;
};
setHighscore(highscore);

// Generating a random Number [1;20]
const randomNumberGenerator = () => Math.trunc(Math.random() * 20 + 1);
let randomNumber = randomNumberGenerator();

//----------------------Setting the UI:

// Displaying the message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
displayMessage("✨ Start guessing...");

//setting backgroundColor : black , green , red
const setBackgroundColor = function (backgroundColor) {
  document.querySelector("body").style.backgroundColor = backgroundColor;
};
setBackgroundColor("#222"); //(black)

//Setting the "?" in the box
const setBox = function (char) {
  document.querySelector(".box").textContent = char;
};
setBox("?");

//----------------------------Events:

//  the Check btn:
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".number").value);
  // case 1 : the guess is not a number
  if (!guess) {
    displayMessage("🛑 Not a number");
  } // case 2 : the guess is the correct number
  else if (score > 1 && guess === randomNumber) {
    displayMessage("🎉 You did it!!");
    setBackgroundColor("#33B14E"); //(green)
    setBox(randomNumber);
    //is the score > highscore
    highscore = score > highscore ? score : highscore;
    setHighscore(highscore);
  } // case 3 : the guess is not the correct number
  else if (score > 1 && guess !== randomNumber) {
    score--;
    setScore(score);
    displayMessage(guess > randomNumber ? "📉To high" : "📈 To low");
  } // case 4 : score = 0 after clicking on the button
  else if (score <= 1) {
    setScore(0);
    displayMessage("💀 U lost the game");
    setBackgroundColor("#EE1814"); //(red)
  }
  console.log(score);
});

// the Again btn:
document.querySelector(".again").addEventListener("click", function () {
  //Regenrate the data
  randomNumber = randomNumberGenerator();
  setHighscore(highscore);
  score = 20;
  setScore(score);
  //Resetting the UI
  setBackgroundColor("#222"); //(black)
  setBox("?");
  displayMessage("✨ Start guessing...");
});

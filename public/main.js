let zero = 0;
let teamOneScore = 0;
let teamTwoScore = 0;

const pageRefresh = () => {
  // NOTE the Team names will reset automatically upon dom reload.
  document.querySelector(".team-1-score").textContent = zero;
  document.querySelector(".team-2-score").textContent = zero;
  //take out the text in the input fields upon page refresh.
  document.querySelector(".team-1-input").value = "";
  document.querySelector(".team-2-input").value = "";
  //when the page is reset add a hide attribute to the .classList
  document.querySelector(".reset-button").classList.add("hide");
};

const resetGame = () => {
  document.querySelector(".team-1-score").textContent = teamOneScore;
  document.querySelector(".team-2-score").textContent = teamTwoScore;
  console.log("Scores have been Reset!");
  document.querySelector(".reset-button").classList.add("hide");
  document.querySelector(".team-1-add-1-button").disabled = false;
  document.querySelector(".team-2-add-1-button").disabled = false;
  document.querySelector(".team-1-subtract-1-button").disabled = false;
  document.querySelector(".team-2-subtract-1-button").disabled = false;
};

const teamOneAddOne = () => {
  //stop team score form going above 21
  if (teamOneScore >= 21) {
    console.log("Team One Won!!!");
    document.querySelector(".team-1-name").append(" WON!");
    //disable the button if score is 21
    document.querySelector(".team-1-add-1-button").disabled = true;
    //remove hide css attribute
    document.querySelector(".reset-button").classList.remove("hide");
    //reset var to 0
    teamOneScore = 0;
    teamTwoScore = 0;
  } else {
    //change team one score
    teamOneScore += 1;
    // update the HTML, hey DOM, find the tag and update the content
    document.querySelector(".team-1-score").textContent = teamOneScore;
    //console.log the changes to the page, so I know they're working
    console.log("added to Team One", teamOneScore);
  }
};

const teamOneSubtractOne = () => {
  //stop the score from going below 0
  if (teamOneScore <= 0) {
    console.log("Team One Score is 0, Cannot go Negative");
  } else {
    //change team one score
    teamOneScore -= 1;
    //hey DOM, find the tag and update the content
    document.querySelector(".team-1-score").textContent = teamOneScore;
    //console.log the changes to the page, so I know they're working
    console.log("subtracted from Team One", teamOneScore);
  }
};

const teamTwoAddOne = () => {
  //stop team score from going above 21
  if (teamTwoScore >= 21) {
    console.log("Team Two Won!!!");
    document.querySelector(".team-2-name").append(" Won!!!");
    //disabling the add one button
    document.querySelector(".team-2-add-1-button").disabled = true;
    //show the reset button by classList .remove 'hide'
    document.querySelector(".reset-button").classList.remove("hide");
    //reset scores for both teams to 0
    teamOneScore = 0;
    teamTwoScore = 0;
  } else {
    //add to team 2 score
    teamTwoScore += 1;
    // update team 2 score to the page.
    document.querySelector(".team-2-score").textContent = teamTwoScore;
    //console.lot the changes so I know you're working.
    console.log("added to Team Two", teamTwoScore);
  }
};

const teamTwoSubtractOne = () => {
  //if score is 0 print message and stop counter
  if (teamTwoScore <= 0) {
    console.log("Team  score is 0 and connot go negative");
  } else {
    //subtract 1 from team 2 score
    teamTwoScore -= 1;
    //make team 2 score update to the page.
    document.querySelector(".team-2-score").textContent = teamTwoScore;
    console.log("subtracted from Team Two", teamTwoScore);
  }
};

const updateTeamOneName = () => {
  //select team 1 name's text content and set it equal to the user input.
  document.querySelector(".team-1-name").textContent = document.querySelector(
    ".team-1-input"
  ).value;
  //console.log so I know what's going on
  console.log("updating Team One name!");
};

const updateTeamTwoName = () => {
  //get the text content of team-2-name and set it equal team-2-input.value
  document.querySelector(".team-2-name").textContent = document.querySelector(
    ".team-2-input"
  ).value;
  console.log("updating Team Two name!");
};

//find the button, when it is clicked, do the thing.
// "Wire up the buttons" in the html to listen for an event('click'), then execute a function.
document //team 1 add one button click
  .querySelector(".team-1-add-1-button")
  .addEventListener("click", teamOneAddOne);

document //team 1 subtract 1 button click
  .querySelector(".team-1-subtract-1-button")
  .addEventListener("click", teamOneSubtractOne);

document //team 2 add 1 button click
  .querySelector(".team-2-add-1-button")
  .addEventListener("click", teamTwoAddOne);

document //team 2 subtract 1 button click
  .querySelector(".team-2-subtract-1-button")
  .addEventListener("click", teamTwoSubtractOne);

document //update team one name
  .querySelector(".update-team-1-name")
  .addEventListener("click", updateTeamOneName);

document //update team two name
  .querySelector(".update-team-2-name")
  .addEventListener("click", updateTeamTwoName);

document //working to reset the game by a button
  .querySelector(".reset-button")
  .addEventListener("click", resetGame);

document.addEventListener("DOMContentLoaded", pageRefresh); //when page is reloaded ('DOMContentLoaded') run pageRefrish function

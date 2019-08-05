let zero = 0;
let teamOneScore = 0;
let teamTwoScore = 0;

const pageRefresh = () => {
  // set the text of both counters to the value of counter
  // NOTE the Team names will reset automatically upon dom reload
  document.querySelector(".team-1-score").textContent = zero;
  document.querySelector(".team-2-score").textContent = zero;
};

const teamOneAddOne = () => {
  //change team one score
  teamOneScore += 1;
  // update the HTML, hey DOM, find the tag and update the content
  document.querySelector(".team-1-score").textContent = teamOneScore;
  //console.log the changes to the page, so I know they're working
  console.log("added to Team One", teamOneScore);
};

const teamOneSubtractOne = () => {
  //change team one score
  teamOneScore -= 1;
  //hey DOM, find the tag and update the content
  document.querySelector(".team-1-score").textContent = teamOneScore;
  //console.log the changes to the page, so I know they're working
  console.log("subtracted from Team One", teamOneScore);
};

const teamTwoAddOne = () => {
  //add to team 2 score
  teamTwoScore += 1;
  // update team 2 score to the page.
  document.querySelector(".team-2-score").textContent = teamTwoScore;
  //console.lot the changes so I know you're working.
  console.log("added to Team Two", teamTwoScore);
};

const teamTwoSubtractOne = () => {
  //subtract 1 from team 2 score
  teamTwoScore -= 1;
  //make team 2 score update to the page.
  document.querySelector(".team-2-score").textContent = teamTwoScore;
  console.log("subtracted from Team Two", teamTwoScore);
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

document.addEventListener("DOMContentLoaded", pageRefresh); //when page is reloaded ('DOMContentLoaded') run pageRefrish function

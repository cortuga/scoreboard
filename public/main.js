let zero = 0;
let teamOneScore = 0;
let teamTwoScore = 0;

const pageRefresh = () => {
  // set the text of both counters to the value of counter
  document.querySelector(".team-1-score").textContent = zero;
  document.querySelector(".team-2-score").textContent = zero;
};

const teamOneAddOne = () => {
  teamOneScore += 1;
  //make the .team-1-score update to the screen
  document.querySelector(".team-1-score").textContent = teamOneScore;
  console.log("added to Team One", teamOneScore);
  // update the HTML
  // hey DOM, find the tag and update the content
};

const teamOneSubtractOne = () => {
  teamOneScore -= 1;
  //make the .team-1-score update to the screen
  document.querySelector(".team-1-score").textContent = teamOneScore;
  console.log("subtracted from Team One", teamOneScore);
};

const teamTwoAddOne = () => {
  teamTwoScore += 1;
  console.log("added to Team Two", teamTwoScore);
};

const teamTwoSubtractOne = () => {
  teamTwoScore -= 1;
  console.log("subtracted from Team Two", teamTwoScore);
};

const updateTeamOneName = () => {
  document.querySelector(".team-1-name").textContent = document.querySelector(
    ".team-1-input"
  ).value;
  console.log("updating Team One name!");
};

const updateTeamTwoName = () => {
  document.querySelector(".team-2-name").textContent = document.querySelector(
    ".team-2-input"
  ).value;
  console.log("updating Team Two name!");
};

//find the button, when it is clicked, do the thing
document
  .querySelector(".team-1-add-1-button")
  .addEventListener("click", teamOneAddOne); //done

document
  .querySelector(".team-1-subtract-1-button") //done
  .addEventListener("click", teamOneSubtractOne);

document
  .querySelector(".team-2-add-1-button")
  .addEventListener("click", teamTwoAddOne);

document
  .querySelector(".team-2-subtract-1-button")
  .addEventListener("click", teamTwoSubtractOne);

document //update team one name
  .querySelector(".update-team-1-name")
  .addEventListener("click", updateTeamOneName);

document //update team two name
  .querySelector(".update-team-2-name")
  .addEventListener("click", updateTeamTwoName);

document.addEventListener("DOMContentLoaded", pageRefresh); //when page is reloaded ('DOMContentLoaded') run pageRefrish function

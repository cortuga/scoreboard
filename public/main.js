let counter = 0;

let teamOneScore = 0;
let teamTwoScore = 0;

const pageRefresh = () => {
// set the text of both counters to the value of counter 
  document.querySelector('.team-1-score').textContent = counter;
  document.querySelector('.team-2-score').textContent = counter;
};

const addOneToCount = () => {  
  counter += 1;
  console.log("adding to counter", counter);
  // update the HTML
  // hey DOM, find the tag and update the content
};

const subtractOneFromCount = () => {  
  counter -= 1;
  console.log("subtracting from counter", counter);

}

const updatingName = () => {
  console.log("updating name!")
}
Document.querySelector('.team-1-input').addEventListener('blur', updatingName);


//find the button, when it is clicked, do the thing
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToCount);

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToCount);

document
  .querySelector(".team-1-subtract-1-button")
  .addEventListener('click', subtractOneFromCount);

document
  .querySelector(".team-2-subtract-1-button")
  .addEventListener('click', subtractOneFromCount);


document.addEventListener('DOMContentLoaded', pageRefresh); //when page is reloaded ('DOMContentLoaded') run pageRefrish function

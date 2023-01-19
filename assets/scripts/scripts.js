// Get each modal and close button
const triggers = document.getElementsByClassName("trigger");
const triggerArray = Array.from(triggers).entries();
const modals = document.getElementsByClassName("modal");
const closeButtons = document.getElementsByClassName("close-button");

let modal01 = document.getElementById('modal01');
let modal02 = document.getElementById('modal02');

// Then use `for...of`-loop with the index of each item in `triggerArray` for listening to a click event which toggles each modal to open and close
for (let [index, trigger] of triggerArray) {
  function toggleModal() {
    modals[index].classList.toggle("show-modal");
  };

  trigger.addEventListener("click", toggleModal);
  closeButtons[index].addEventListener("click", toggleModal);
}

window.onclick = function(event) {
  if (event.target == modal01) {
    modal01.style.display = "none";
  }
  if (event.target == modal02) {
    modal02.style.display = "none";
  }
}
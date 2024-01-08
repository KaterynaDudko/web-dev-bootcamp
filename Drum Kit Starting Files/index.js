const playSound = function (button) {
  switch (button) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("unexpected");
  }
};

//add pressing button animation
const buttonAnimation = function (button) {
  const pressedButton = document.querySelector(`.${button}`);
  pressedButton.classList.add("pressed");
  setTimeout(function () {
    pressedButton.classList.remove("pressed");
  }, 100);
};

// press on UI buttons
const btns = document.querySelectorAll(".drum");
btns.forEach((button) => {
  button.addEventListener("click", function () {
    const button = this.textContent;
    playSound(button);
    buttonAnimation(button);
  });
});

//press on keyboard
document.addEventListener("keydown", function (e) {
  playSound(e.key);
  buttonAnimation(e.key);
});

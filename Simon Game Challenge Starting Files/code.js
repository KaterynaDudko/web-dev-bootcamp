const buttonColors = ["green", "red", "yellow", "blue"];
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = false;
let level = 0;

$(document).keydown(function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

function nextSequence() {
  console.log("called next seq");
  userClickedPattern = [];
  level++;
  $("#level-title").text(`Level ${level}`);
  const randomChosenColour = Math.floor(Math.random() * 4);
  gamePattern.push(randomChosenColour);
  console.log("game pattern", gamePattern);
  btnColor = buttonColors[randomChosenColour];
  $(`#${btnColor}`).css({ opacity: 0 }).animate({ opacity: 1 }, 300);
  playSound(btnColor);
}

function playSound(color) {
  const sound = new Audio(`sounds/${color}.mp3`);
  //sound.play();
}

const animatePress = function (color) {
  $(`#${color}`).addClass("pressed");
  setTimeout(function () {
    $(`#${color}`).removeClass("pressed");
  }, 100);
};

$(".btn").on("click", function () {
  if (gameStarted) {
    //console.log(this);
    const userChosenColour = $(this).attr("id");
    //console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log("user pattern", userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  }
});

function checkAnswer(curLevel) {
  console.log(curLevel);
  userChoice = userClickedPattern[curLevel];
  correctButton = buttonColors[gamePattern[curLevel]];
  if (userChoice === correctButton) {
    console.log("success");
    if (curLevel === level - 1) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    const wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $(`body`).addClass("game-over");
    setTimeout(function () {
      $(`body`).removeClass("game-over");
    }, 200);
    $("#level-title").text(`Game Over, Press Any Key to Restart`);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStarted = false;
}

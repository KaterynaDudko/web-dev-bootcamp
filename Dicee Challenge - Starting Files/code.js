const play = function() {
    let firstNum = Math.floor((Math.random() * 6)) + 1;
    let secondNum = Math.floor((Math.random() * 6)) + 1;
    
    let firstImage = document.querySelector(".img1").setAttribute("src", `images/dice${firstNum}.png`);
    let secondImage = document.querySelector(".img2").setAttribute("src", `images/dice${secondNum}.png`);
    let header = document.querySelector("h1");
    if (firstNum > secondNum) {
        header.textContent = "🚩Player 1 wins!"
    } else if (firstNum < secondNum) {
        header.textContent = "Player 2 wins!🚩"
    } else if (firstNum === secondNum) {
        header.textContent = "Draw!"
    }

}


function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var image1 = document.querySelector(".img1");
    var image2 = document.querySelector(".img2");
    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);
  
    var head = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
      head.innerText = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
      head.innerText = "Player 2 Wins!";
    } else {
      head.innerText = "Draw!";
    }
  }
  
  document.getElementById("roll").addEventListener("click", function() {
    rollDice();
  });
  rollDice();
  
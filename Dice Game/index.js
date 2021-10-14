// DICE FOR PLAYER 1

var a = randomDice();
 function randomDice(){
    var randomNumber1 = Math.floor(Math.random()*6 +1);
    var diceNumber1 = document.getElementById("img");

    if (randomNumber1 === 1){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice1.png");
    }
    else if (randomNumber1 === 2){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice2.png");
    }
    else if (randomNumber1 === 3){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice3.png");
    }
    else if (randomNumber1 === 4){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice4.png");
    }
    else if (randomNumber1 === 5){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice5.png");
    }
    else if (randomNumber1 === 6){
      return diceNumber1.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice6.png");
    }
}


// DICE FOR PLAYER 2
  var b = randomDice2();
 function randomDice2(){
    var randomNumber2 = Math.floor(Math.random()*6 +1);
    var diceNumber2 = document.getElementById("img2");

    if (randomNumber2 === 1){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice1.png");
    }
    else if (randomNumber2 === 2){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice2.png");
    }
    else if (randomNumber2 === 3){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice3.png");
    }
    else if (randomNumber2 === 4){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice4.png");
    }
    else if (randomNumber2 === 5){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice5.png");
    }
    else if (randomNumber2 === 6){
      return diceNumber2.setAttribute("src","C:\\Users\\knguyenle\\Desktop\\webdev\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice6.png");
    }
}


function statement(){

  var headStatement = document.querySelector("h1");

    if (a > b){
      return headStatement.innerHTML = "Player 1 Wins!";
    }
    else if (a < b){
      return headStatement.innerHTML = "Player 2 Wins!";
    }
    else if (a == b){
      return headStatement.innerHTML = "Draw!";
    }
}

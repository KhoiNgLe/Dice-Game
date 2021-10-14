
 function randomDice(){
    var randomNumber1 = Math.floor(Math.random()*6 +1);
    var diceNumber1 = document.getElementById("img");

    if (randomNumber1 === 1){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice1.png");
    }
    else if (randomNumber1 === 2){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice2.png");
    }
    else if (randomNumber1 === 3){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice3.png");
    }
    else if (randomNumber1 === 4){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice4.png");
    }
    else if (randomNumber1 === 5){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice5.png");
    }
    else if (randomNumber1 === 6){
      return diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice6.png");
    }
}

randomDice();

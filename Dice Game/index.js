


// DICE FOR PLAYER 1


 function randomDice(){
    var randomNumber1 = Math.floor(Math.random()*6 +1); //random# from 1-6
    var diceNumber1 = document.getElementById("img");

    if (randomNumber1 === 1){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice1.png");
    }
    else if (randomNumber1 === 2){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice2.png");
    }
    else if (randomNumber1 === 3){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice3.png");
    }
    else if (randomNumber1 === 4){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice4.png");
    }
    else if (randomNumber1 === 5){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice5.png");
    }
    else if (randomNumber1 === 6){
       diceNumber1.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice6.png");
    }
    return randomNumber1;
}
let a = randomDice();

// DICE FOR PLAYER 2

 function randomDice2(){
    var randomNumber2 = Math.floor(Math.random()*6 +1); //random# from 1-6
    var diceNumber2 = document.getElementById("img2");

    if (randomNumber2 === 1){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice1.png");
    }
    else if (randomNumber2 === 2){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice2.png");
    }
    else if (randomNumber2 === 3){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice3.png");
    }
    else if (randomNumber2 === 4){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice4.png");
    }
    else if (randomNumber2 === 5){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice5.png");
    }
    else if (randomNumber2 === 6){
       diceNumber2.setAttribute("src","C:\\Users\\16139\\OneDrive\\Desktop\\Web Development\\Dice-Game-main\\Dice-Game-main\\Dice Game\\dice6.png");
    }

    return randomNumber2;

}


let b = randomDice2();


// PRINT HEAD STATEMENT
function statement(){

  var headStatement = document.querySelector("h1");
  console.log(a,b);
    if (a > b){
       headStatement.innerHTML = "Player 1 Wins!";
    }
    else if (a < b){
       headStatement.innerHTML = "Player 2 Wins!";
    }
    else if (a == b){
       headStatement.innerHTML = "Draw!";
    }

    }

statement();

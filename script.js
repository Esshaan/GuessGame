'use strict';

const display = {
    message: function(msg){
        message.textContent = msg;
    },

    score: function(num){
        currentScore.textContent = num;
    },

    hScore: function(num){
        hiScore.textContent = num;
    },

    ansBox: function(num){
        ans.textContent = num;
    }
}

const reset = function(){
    random = Math.trunc(Math.random() * 20) + 1;
    console.log(random);
    cScore = 20;
    display.score(cScore);
    display.message("Start Guessing!");
    display.ansBox("?");

}

let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);

let userInput = document.querySelector(".userInput").value;
const check = document.querySelector(".check");
const message = document.querySelector(".message");
let currentScore = document.querySelector(".currentScore");
let hiScore = document.querySelector(".highScore");
let ans = document.querySelector(".ans");
let again = document.querySelector(".again");
let popup = document.querySelector(".popup");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");


let cScore = 20;
let highScore = 0;

display.score(cScore);

check.addEventListener('click', function(){
    userInput = Number(document.querySelector(".userInput").value);
    console.log(userInput);

    if(userInput === random){
        display.message("Hooray! You Win.");
        display.ansBox(random);
        
        if(cScore > highScore){
            highScore = cScore;
            display.hScore(highScore);
        }


    }else if(userInput !== random){
        if(cScore > 0){
            cScore--;
            display.score(cScore);

            display.message(userInput > random ? "Too High!": "Too Low");
        }
    }
});

again.addEventListener('click', function(){
    popup.classList.remove("hidden"); 
});

yes.addEventListener('click', function(){
    reset();
    popup.classList.add("hidden");
});

no.addEventListener('click', function(){
    popup.classList.add("hidden");
});


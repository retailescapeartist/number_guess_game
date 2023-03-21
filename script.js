let res1 = document.getElementById("result1");
let res2 = document.getElementById("result2");
let res3 = document.getElementById("result3");

let answer = Math.floor(Math.random()*100 + 1);
let number_of_guesses = 0;
let guessed_numbers = [];

function play() {
    let user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
       alert("Please select a number between 1 and 100")
    }else {
        guessed_numbers.push(user_guess);
        number_of_guesses += 1;

        if (user_guess < answer) {
            res1.textContent = "Guess too low";
            res2.textContent = "Number of Guesses: " + number_of_guesses;
            res3.textContent = "Guessed numbers are: " + guessed_numbers;
        }else if (user_guess > answer) {
            res1.textContent = "Guess too high";
            res2.textContent = "Number of Guesses: " + number_of_guesses;
            res3.textContent = "Guessed numbers are: " + guessed_numbers;
        } else if (user_guess == answer){
            res1.textContent = "You Guessed Right!";
            res2.textContent = "The number was: " + answer;
            res3.textContent = "It took: " + number_of_guesses + " guesses.";
            document.getElementById("guess_button").disabled = true;
        }
    }
}
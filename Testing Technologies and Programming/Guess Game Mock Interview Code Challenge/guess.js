// declare variables that allow to reach to DOM elements
//use 'const' as we do not expect them to change

//input elements
const newGameBtn = document.getElementById ("genBtn");
const guessBtn = document.getElementById ("guessBtn");
const userInput = document.getElementById ("user-input");

//showing result elements
const userNumber = document.getElementById("user-number");
const userAttempt = document.getElementById ("attempt-number");
const result = document.getElementById("result");
const showBtn = document.getElementById ("showBtn");
const revieledNumber = document.getElementById ("show-number");

//add action on element interations
//when user clicks a New Game button - generate a new number and reset attempts
newGameBtn.addEventListener ("click", function(){reset_game()} );
//when user clicks guessBtn compare user entered number in the userInput with the random generated
guessBtn.addEventListener ("click", function(){comapre()} );
//if user wants to see the generated random number he will click button 'Reveal Number';
showBtn.addEventListener ("click", function(){reveal_number()});

//declare variables that will be used across functions
//use let as they are expected to change
let random_number = 0;
let num = userInput.value;
let attempts = 0;

//function to generate a new random number
function reset_game(){
   //range of the number will be 0-100
    random_number = Math.floor(Math.random()*100);
    userInput.value = "";
    console.log (random_number);
    return random_number
}

//check that user input is valid - integer on range0-100
function validate_input (){
    //Number native function converts user input into number value as by default the value we get is a text
    num = Number(userInput.value);
   
    if (userInput.value==""){
        alert ('Please enter your number');
        return (false)
    }
    else if ((num < 0)|| (num > 100)){
        alert ('Please enter number in a range 1-100');
        userInput.value = "";
        return (false)
    }
    //function Number.isInteger checks if number is integer, not float, decimal
    else if ((Number.isInteger( num))!=true){
        alert ('Please enter an integer');
        userInput.value = "";
        return (false)
    }

    else userNumber.innerHTML = userInput.value;
    return (true)
}

function comapre()
{
    if (validate_input ()==true)
    
    {
        if ((random_number) == (num)){
            result .innerHTML = ("You guessed the number!");
            console.log (random_number, num);
        }
        else if ((random_number) > (num)){
            result .innerHTML = ("Your number is lower, try again ");
            console.log (random_number, num);
        }
        else if ((random_number) < (num)){
            result .innerHTML = ("Your number is higher, try again ");
            console.log (random_number, num);
        }
        //calculate attempt only if the input was valid   
        calculate_attempts();
    }
    else {
        console.log ("Your input is invalid");
        result .innerHTML = ("Your input was invalid, try again ")
    }
    
   
}
function calculate_attempts(){
    //increase number of attempts by 1 and show it to user
    attempts+=1;
    userAttempt.innerHTML = attempts;
}
//if user wants to see the number generated he/she can reveal it
function reveal_number(){
    console.log (random_number);
    revieledNumber.innerHTML = random_number;
}

var userChoice = prompt("Do you choose rock, paper, scissors or rope?");
var computerChoice = Math.random();
if (computerChoice <= 0.25) 
    {
      computerChoice = "rock";
    } 
else if (0.26 <= computerChoice <= 0.50) 
    {
      computerChoice = "paper";
    }  
else if (0.51 <= computerChoice <= 0.75)
    {
      computerChoice = "scissors";
    } 
else
    {
        computerChoice = "rope";
    }
    
console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2) 
        {
            return "it's a tie!";
        }
    else if (choice1 === "rock") 
        if (choice2 === "scissors")
            {
                return "rock wins";
            }
        else if (choice2 === "rope")
            {
                return "rope wins";
            }
        else 
            {
                return "paper wins";
            }
    else if (choice1 === "paper")
        if (choice2 === "rock")
            {
                return "paper wins";
            }
        else if (choice2 === "rope")
            {
                return "rope wins";
            }
        else 
            {
                return "scissors wins";
            }
    else if (choice1 === "scissors")
        if (choice2 === "rock")
            {
                return "rock wins";
            }
        else 
            {
                return "scissors wins";
            }
    else if (choice1 === "rope")
        if (choice2 === "scissors")
            {
                return "scissors wins";
            }
        else 
            {
                return "rope wins";
            }
    else
        {
            return "please choose rock, paper scissors or rope";
        }
};

console.log (compare (userChoice, computerChoice));
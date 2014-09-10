var userChoice = prompt("Do you choose rock, paper, scissors or rope?");
choices = ["rock", "paper", "scissors", "rope"]
var computerChoice = choices[Math.floor(Math.random() * 4)]  
console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2){
        return "it's a tie!"
    } else {
        switch (choice1){
            case "rock":
                if (choice2 === "scissors"){
                    return "rock wins";
                } else if (choice2 === "rope") {
                    return "rope wins";
                } else {
                    return "paper wins";
                }
            case "paper":
                if (choice2 === "rock") {
                    return "paper wins";
                } else if (choice2 === "rope"){
                    return "rope wins";
                } else {
                    return "scissors wins";
                }
            case "scissors":
                if (choice2 === "rock") {
                    return "rock wins";
                } else {
                  return "scissors wins";
                }
            case "rope":
                if (choice2 === "scissors") {
                    return "scissors wins";
                } else {
                    return "rope wins";
                }
            }
    }
};

console.log (compare (userChoice, computerChoice));
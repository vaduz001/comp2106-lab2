var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if(computerChoice < 0.34) {
	computerChoice = "rock";
} 
else if
(computerChoice <= 0.67) 
{
computerChoice = "paper";
} 
else 
{
computerChoice = "scissors";
} 
var compare = function(userChoice, computerChoice){
    if(userChoice===computerChoice){
    console.log( "The result is a tie!");
    }  
    else if(userChoice==="rock") {         
    if (computerChoice==="scissors") {
        console.log( "rock wins"); 
    }    
      else {
      console.log( "paper wins");  
    }
    }  
    else if (userChoice==="paper") {
        if (computerChoice==="rock") {
            console.log( "paper wins");
        }
           else 
                {
                    console.log( "scissors wins");
            }
            }     
     else if (userChoice==="scissors") {    
     if (computerChoice==="rock") {
         console.log( "rock wins");
         }
    else {
      console.log( "scissors wins");
    }}
      };




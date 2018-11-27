// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice=""
var winner=""
var randomNumber="0" 
var computerChoice= ""

$("button").click(function() {
    var userChoice = $("#input").val();
       $("#userChoice").text(userChoice);
    
     
       var computerChoiceName;
       
       var computerChoice=Math.floor(Math.random()*3);
       console.log(computerChoice)
     if (computerChoice === 0) {
        $("#text").html ("rock");
        computerChoiceName="rock"
    }  
    
     if (computerChoice === 1 ) {
        $("#text").html ("Scissors"); 
        computerChoiceName="scissors"
    }  

     if (computerChoice === 2 ){
        $("#text").html("Paper");
        computerChoiceName="paper"
}
   if (userChoice === "rock" && computerChoiceName ==="rock")  {
       $("#result").html ("Its A Tie")
       (userChoice === "rock" && computerChoiceName === "paper") 
            $("#result").html ("Paper Wins. As You Should") 
     (userChoice === "rock" && computerChoiceName === "scissors") 
            $("#result").html ("Rock Wins KAPOWWW") 
       }
       
     if (userChoice === "paper" && computerChoiceName === "paper") {
            $("#result").html ("Its A Tie.")
            (userChoice === "paper" && computerChoiceName === "rock")
            $("#result").html ("Paper Wins. As You Should") 
            (userChoice === "paper" && computerChoiceName === "scissors")
            $("#result").html ("Scissors WINNN OKURRRR.") 
     }
     
     if (userChoice === "scissors" && computerChoiceName === "scissors") {
          $("#result").html ("Its A Tie.")
          (userChoice === "scissors" && computerChoiceName === "paper") 
           $("#result").html ("Scissors WINNN OKURRR") 
       (userChoice === "scissors" && computerChoiceName === "rock")
            $("#result").html ("Rock Wins. KAPOWWW") 
     }
});
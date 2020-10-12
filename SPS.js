alert("Let's play Stone Paper Scissor");
game();

function computerSelection(){
    let choices={
        1:"Stone",
        2:"Paper",
        3:"Scissor",
    };
    return choices[Math.floor(Math.random()*3)+1];
}

function playRound(user,comp){
    
    console.log(user.toUpperCase()," VS ",comp.toUpperCase());

    user=user.toLowerCase();
    
    let game={
        stone:"Paper",
        paper:"Scissor",
        scissor:"Stone",
    };
    if(user===comp.toLowerCase())
        return 0;
    if(game[user]===comp)
        return -1;
    return 1;
}

function game(){

    let userSelection,userScore=0,compScore=0,result;

    for(let i=0;i<5;i++){

        while(typeof userSelection!='string' || (!["stone","paper","scissor"].includes(userSelection.toLowerCase()))){

            userSelection=prompt("Enter Selection(stone,paper or scissor");

        }

        result=playRound(userSelection,computerSelection());
        
        userScore+=result;
        compScore+=(-1*result);

        console.log(`User=${userScore} Comp=${compScore}`);
        userSelection=0;
    }

    if(userScore===compScore)
        console.log("DRAW!");
    else if(userScore<compScore)
        console.log("COMPUTER WON!");
    else
        console.log("YOU WON!");

}


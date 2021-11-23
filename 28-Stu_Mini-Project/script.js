const playerOptions = prompt("rock, paper, scissors");
const choiceNumber = Math.floor(Math.random()*3);
const computerOptions = ['rock','paper','scissors']
const computerChoice = computerOptions[choiceNumber];

     const playGame = () => {
                 winner(this.innerText,computerChoice)
               }
        
const winner = (player,computer) => {
    player = (playerOptions);
    computer = (computerChoice);
    if(player === computer){
        console.log('Tie');
        alert('Tie');
    }
    else if(player == 'rock'){
        if(computer == 'paper'){
            console.log('Computer Won');
            alert('Computer Won');
        }else{
            console.log('Player Won');
           alert('Player Won');
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            console.log('Computer Won');
            alert('Computer Won');
        }else{
            console.log('Player Won');
            alert('Player Won');
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            console.log('Computer Won');
            alert('Computer Won');
        }else{
            console.log('Player Won');
            alert('Player Won');
        }
    }
}

 playGame();
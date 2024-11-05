let score=JSON.parse(localStorage.getItem('score'))
      ||{wins:0,losses:0,ties:0}

      updateScoreElement();

      let isAutoPlaying=false;
      let intervalId;
      function autoPlay(){
        if(!isAutoPlaying){
        intervalId=setInterval(() =>{
          playGame(pickComputerMove());
        },1000);
        isAutoPlaying=true;
      }else{
        clearInterval(intervalId);
        isAutoPlaying=false;
      }
      }

      document.body.addEventListener('keydown', (event) =>{
        if(event.key==='r'){
          playGame('rock');
        }
        if(event.key==='p'){
          playGame('paper');
        }
        if(event.key==='s'){
          playGame('scissors');
        }
      });

      function playGame(playerMove){

        const computerMove=pickComputerMove();
        let result='';
        if(playerMove==='scissors'){
          if(computerMove==='rock'){
          result='You lose.';
        } else if(computerMove==='paper'){
          result='You win.';
        } else{
          result='Tie.';
        } 
        }

        if(playerMove==='paper'){
          if(computerMove==='rock'){
           result='You win.';
           } else if(computerMove==='paper'){
          result='Tie.'
          } else{
          result='You lose.'
          }  
        }

        if(playerMove==='rock'){
          if(computerMove==='rock'){
            result='Tie.';
          } else if(computerMove==='paper'){
            result='You lose.'
          } else{
            result='You win.'
          }   
        }

        if(result==='You win.'){
          score.wins+=1;
        }else if(result==='You lose.'){
          score.losses+=1;
        }else{
          score.ties+=1;
        }

        localStorage.setItem('score',JSON.stringify(score));
        
        updateScoreElement();
        document.querySelector('.js-result').innerHTML=result;
        document.querySelector('.js-moves').innerHTML=`You
        <img src="images/${playerMove}-emoji.png"
        class="move-icon">
        <img src="images/${computerMove}-emoji.png"
        class="move-icon">
        computer`;
    
      }

      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      

      function pickComputerMove(){
        let computerMove='';
        const randomNumber= Math.random();
        if(randomNumber>=0 && randomNumber<1/3){
          computerMove='rock'; 
        }
        else if(randomNumber>=1/3 && randomNumber<2/3){
          computerMove='paper';
        }
        else{
          computerMove='scissors';
        }
        return computerMove;
      }
    
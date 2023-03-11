import turn_background_red from '../assets/images/turn-background-red.svg';
import turn_background_yellow from '../assets/images/turn-background-yellow.svg';
import BtnPlayAgain from './BtnPlayAgain';

export default function TurnPlayer({
    playAgain, 
    winnerPlayer, 
    playerOn, 
    timePlayer1, 
    timePlayer2}) {
    
    const turnPlayer1 = 'turn-player1';
    const turnPlayer2 = 'turn-player2';
    const winsPlayer1 = 'wins-player1';
    const winsPlayer2 = 'wins-player2';
    const winsPlayer = [winsPlayer1, winsPlayer2];
  
    const imageTurn = turn_background_red;
    const imageWin = turn_background_yellow;
   
    return (

        <div className={
            `turn 
            ${playerOn === 1 ? turnPlayer1 : turnPlayer2}
            ${winnerPlayer ? winsPlayer[winnerPlayer - 1] : null}
            `}>
            <div hidden={winnerPlayer ?  true : false}  className='turn-time'>
                <h4>{`player ${playerOn}'s turn`}</h4>
                <h1>{playerOn === 1 ? timePlayer1 : timePlayer2}</h1> 
            </div>
            <img 
                hidden={winnerPlayer ?  true : false}  
                src={playerOn === 1 ? imageTurn: imageWin} 
                alt="Turn" 
            />
            
            <div hidden={!winnerPlayer ?  true : false}>
                <div  className='player-box player-wins  '>
                    <h4>{`player ${winnerPlayer}`}</h4>
                    <h1>wins</h1>
                    <BtnPlayAgain playAgain={playAgain} />
                </div>
            </div>
        </div>
    )
};
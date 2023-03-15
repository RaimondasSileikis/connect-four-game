import turn_background_red from '../assets/images/turn-background-red.svg';
import turn_background_yellow from '../assets/images/turn-background-yellow.svg';
import BtnPlayAgain from './BtnPlayAgain';

export default function TurnPlayer({
    playAgain, 
    winnerPlayer, 
    playerOn, 
    timePlayerOne, 
    timePlayerTwo,
    cpuMode
    }) {
    
    const turnPlayerOne = 'turn-player-one';
    const turnPlayerTwo = 'turn-player-two';
    const winsPlayerOne = 'wins-player-one';
    const winsPlayerTwo = 'wins-player-two';
    const winsPlayer = [winsPlayerOne, winsPlayerTwo];
    const turnContentCpuMode = playerOn === 1 ? "YOURN TURN" : "CPU'S TURN";
    const turnPlayerTitle = `player ${playerOn}'s turn`;
    const winsContentCpuMode = playerOn === 2 ? "YOU WIN" : "CPU WINS";
    const winsPlayerTitle = `player ${winnerPlayer}`;
  
    const imageTurn = turn_background_red;
    const imageWin = turn_background_yellow;
   
    return (

        <div className={
            `turn
            ${playerOn === 1 ? turnPlayerOne : turnPlayerTwo}
            ${winnerPlayer ? winsPlayer[winnerPlayer - 1] : null}
            `}>
            <div hidden={winnerPlayer ?  true : false}  className='turn-time'>

                <h4>{cpuMode ? turnContentCpuMode : turnPlayerTitle }</h4>
                <h1>{playerOn === 1 ? timePlayerOne : timePlayerTwo}s</h1> 
            </div>
            <img 
                hidden={winnerPlayer ?  true : false}  
                src={playerOn === 1 ? imageTurn: imageWin} 
                alt="Turn" 
            />
            
            <div hidden={!winnerPlayer ?  true : false}>
                <div  className='player-box player-wins  '>
                    <h4>{cpuMode ? winsContentCpuMode : winsPlayerTitle }</h4>
                    <h1>wins</h1>
                    <BtnPlayAgain playAgain={playAgain} />
                </div>
            </div>
        </div>
    )
};
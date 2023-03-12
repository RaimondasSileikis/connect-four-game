import player_one from '../assets/images/player-one.svg';
import you from '../assets/images/you.svg';

export default function CounterBoxOne({counterPlayerOne, cpuMode}) {
    const playerContent = 'Player 1';
    const youContent = 'you';

    return (
         <div className='player-box counter-box-one '>
             <img src={cpuMode ? you : player_one } alt="" />
             <div className='player-box--content' >
                <h3 className='uppercase'>{cpuMode ? youContent : playerContent}</h3>
                <h1>{counterPlayerOne}</h1>
             </div>
        </div> 
    )
};
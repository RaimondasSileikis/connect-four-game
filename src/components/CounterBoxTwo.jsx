import player_two from '../assets/images/player-two.svg';
import cpu from '../assets/images/cpu.svg';

export default function CounterBoxTwo({counterPlayerTwo, cpuMode}) {
    const playerContent = 'Player 2';
    const cpuContent = 'CPU';

    return (
         <div className='player-box counter-box-two '>
            <img src={cpuMode ? cpu : player_two } alt="" />
            <div className='player-box--content'>
                <h3 className='uppercase'>{cpuMode ? cpuContent : playerContent}</h3>
                <h1>{counterPlayerTwo}</h1> 
            </div>
        </div> 
    )
};
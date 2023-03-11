import player_one from '../assets/images/player-one.svg';
import player_two from '../assets/images/player-two.svg';
import player_vs_cpu from '../assets/images/player-vs-cpu.svg';

export default function CounterBox1({counterPlayer1}) {
    
    return (
         <button className='player-box counter-box '>
             <img src={player_one } alt="" />
                    <h3 className='uppercase'>player 1</h3>
                    <h1>{counterPlayer1}</h1>
                </button> 
    )
};
import player_one from '../assets/images/player-one.svg';

export default function CounterBox1({counterPlayer1}) {
    
    return (
         <button className='player-box counter-box '>
             <img src={player_one } alt="" />
                    <h3 className='uppercase'>player 1</h3>
                    <h1>{counterPlayer1}</h1>
                </button> 
    )
};
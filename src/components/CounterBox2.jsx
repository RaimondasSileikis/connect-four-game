import player_two from '../assets/images/player-two.svg';

export default function CounterBox2({counterPlayer2}) {
    
    return (
         <div className='player-box counter-box-2 '>
            <img src={player_two } alt="" />
            <div className='player-box--content'>
                <h3 className='uppercase'>player 2</h3>
                <h1>{counterPlayer2}</h1> 
            </div>
        </div> 
    )
};
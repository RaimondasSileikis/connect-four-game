import turn_background_red from '../assets/images/turn-background-red.svg';

export default function TurnPlayer1() {
    
    return (

    <div className='turn turn-player1'>
        <div className='turn-time'>
            <h4>player 1's turn</h4>
            <h1>30s</h1> 
        </div>
        <img src={turn_background_red} alt="Turn" />
    </div>

    )
};
import turn_background_yellow from '../assets/images/turn-background-yellow.svg';

export default function TurnPlayer2() {
    
    return (

    <div className='turn turn-player2'>
        <div className='turn-time'>
        <h4>player 2's turn</h4>
        <h1>30s</h1>
        <img src={turn_background_yellow} alt="Turn" />
        </div>
    </div>

    )
};
import player_vs_player from '../assets/images/player-vs-player.svg';

export default function BtnPlayVsPlayer() {
    
    return (

        <buttom className='btn-play bg-yellow flex-space-between'>
            <h2>play vs player</h2>
            <img src={player_vs_player} alt="Button player vs player" />
        </buttom>
    )
};
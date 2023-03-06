import player_vs_cpu from '../assets/images/player-vs-cpu.svg';

export default function BtnPlayVsCpu() {
    
    return (

    <div className='btn-play bg-red text-white flex-space-between'>
        <h2>play vs cpu</h2>
        <img src={player_vs_cpu} alt="Button player vs cpu" />
    </div>

    )
};
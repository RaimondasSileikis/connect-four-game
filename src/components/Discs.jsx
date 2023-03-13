import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';

export default function Discs({
    animationHeight,
    player,
    isFree, 
    id, 
    winnerDiscs, 
    selectDisc,
    }) {

    function styleWinnerDisc(i) {
        const visibility = { visibility: id === winnerDiscs[i]
            ? 'visible' : 'hidden'};
            return visibility
    }

    const playerOne = `url(${counter_red_large})`;
    const playerTwo = `url(${counter_yellow_large})`;
    const players = [playerOne, playerTwo];

    const animationTransform = -150 * animationHeight ;
  
    const styleDisc = { 
        backgroundImage: !isFree ? players[player - 1]: "none",
        zIndex: isFree ? "30" : "20",
        transform: !isFree ? `translateY(${animationTransform}%)` :'translateY(0)',
        animation: !isFree ? 'drop 2s ease forwards' : ''
    }

    return (
     
        <button className='disc' onClick={selectDisc} style={styleDisc}>
            <span  style={styleWinnerDisc(0)} ></span>{player}
            <span  style={styleWinnerDisc(1)} ></span>
            <span  style={styleWinnerDisc(2)} ></span>
            <span  style={styleWinnerDisc(3)} ></span>
        </button>
    )
};
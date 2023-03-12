import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';

export default function Discs({player,isFree, id, winnerDiscs, selectDisc, cpuOn}) {

    function styleWinnerDisc( i) {
        const visibility = { visibility: id === winnerDiscs[i]
            ? 'visible' : 'hidden'};
            return visibility
    }

    const playerOne = `url(${counter_red_large})`;
    const playerTwo = `url(${counter_yellow_large})`;
    const players = [playerOne, playerTwo];

  
    const styleDisc = { 
        backgroundImage: !isFree === true ? players[player - 1]: "none",
        zIndex: isFree ? "30" : "20",
    }

    return (
     
        <button className='disc' onClick={selectDisc} style={styleDisc}>
            <span  style={styleWinnerDisc( 0)} > </span>
            <span  style={styleWinnerDisc( 1)} > </span>
            <span  style={styleWinnerDisc( 2)} > </span>
            <span  style={styleWinnerDisc( 3)} > </span>
        </button>
    )
};
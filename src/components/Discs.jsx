import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_red_small from '../assets/images/counter-red-small.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';
import counter_yellow_small from '../assets/images/counter-yellow-small.svg';

import marker_red from '../assets/images/marker-red.svg';
import marker_yellow from '../assets/images/marker-yellow.svg';

export default function Discs({player,isFree, id, winnerDiscs, selectDisc}) {

  

    function styleWinnerDisc( i) {
        const visibility = { visibility: id === winnerDiscs[i]
            ? 'visible' : 'hidden'};
            return visibility
    }

   

    const player1 = `url(${counter_red_large})`;
    const player2 = `url(${counter_yellow_large})`;
    const players = [player1, player2];


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
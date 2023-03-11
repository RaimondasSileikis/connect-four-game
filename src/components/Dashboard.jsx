

import icon_check from '../assets/images/icon-check.svg';
import icon_check_hover from '../assets/images/icon-check-hover.svg';


import player_vs_player from '../assets/images/player-vs-player.svg';
import cpu from '../assets/images/cpu.svg';
import you from '../assets/images/you.svg';
import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_red_small from '../assets/images/counter-red-small.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';
import counter_yellow_small from '../assets/images/counter-yellow-small.svg';


import player_one from '../assets/images/player-one.svg';
import player_two from '../assets/images/player-two.svg';
import player_vs_cpu from '../assets/images/player-vs-cpu.svg';

import turn_background_red from '../assets/images/turn-background-red.svg';
import turn_background_yellow from '../assets/images/turn-background-yellow.svg';



import marker_red from '../assets/images/marker-red.svg';
import marker_yellow from '../assets/images/marker-yellow.svg';

import board_layer_black_large from '../assets/images/board-layer-black-large.svg';
import board_layer_white_large from '../assets/images/board-layer-white-large.svg';
import Discs from './Discs';


export default function Dashboard({
    winnerDiscs, 
    discs, 
    selectDisc,  
    playerOn, 
    columnValue}) {

    const markerRed = `url(${marker_red })`;
    const markerYellow = `url(${marker_yellow })`;

    function changeCurcor (columNumber) {
    const visibility = { visibility: columNumber === columnValue
        ? 'visible' : 'hidden',
         backgroundImage: playerOn === 1 ? markerRed: markerYellow };
        return visibility
    }

    return (
    
        <div  className='dashboard flex'>
                <img className='d1' src={board_layer_black_large} alt="Dashboard" />
                <img className='d2' src={board_layer_white_large} alt="Dashboard" />
    
                <div className='discs'>
                    <div  className='cursor'>
                        <span style={changeCurcor(1)}></span>
                        <span style={changeCurcor(2)}></span>
                        <span style={changeCurcor(3)}></span>
                        <span style={changeCurcor(4)}></span>
                        <span style={changeCurcor(5)}></span>
                        <span style={changeCurcor(6)}></span>
                        <span style={changeCurcor(7)}></span>
                    </div>
                    {
                    discs.map((disc, i) =>
                        <Discs 
                            key={i} 
                            player={disc.player} 
                            isFree={disc.isFree} 
                            id={disc.id} 
                            winnerDiscs={winnerDiscs} 
                            selectDisc={() => selectDisc(disc.id)}  
                        />
                    )}
                </div> 
        </div>
    )
};
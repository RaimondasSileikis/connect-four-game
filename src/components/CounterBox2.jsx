

import icon_check from '../assets/images/icon-check.svg';
import icon_check_hover from '../assets/images/icon-check-hover.svg';


import player_vs_player from '../assets/images/player-vs-player.svg';
import cpu from '../assets/images/cpu.svg';
import you from '../assets/images/you.svg';
import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_red_small from '../assets/images/counter-red-small.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';
import counter_yellow_small from '../assets/images/counter-yellow-small.svg';

import marker_red from '../assets/images/marker-red.svg';
import marker_yellow from '../assets/images/marker-yellow.svg';
import player_one from '../assets/images/player-one.svg';
import player_two from '../assets/images/player-two.svg';
import player_vs_cpu from '../assets/images/player-vs-cpu.svg';

import turn_background_red from '../assets/images/turn-background-red.svg';
import turn_background_yellow from '../assets/images/turn-background-yellow.svg';


import board_layer_black_large from '../assets/images/board-layer-black-large.svg';
import board_layer_white_large from '../assets/images/board-layer-white-large.svg';





export default function CounterBox2({counterPlayer2}) {
    
    return (
         <button className='player-box counter-box '>
             <img src={player_two } alt="" />
                    <h3 className='uppercase'>player 2</h3>
                    <h1>{counterPlayer2}</h1>
                </button> 
    )
};
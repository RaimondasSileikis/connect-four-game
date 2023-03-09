import counter_red_large from '../assets/images/counter-red-large.svg';
import counter_red_small from '../assets/images/counter-red-small.svg';
import counter_yellow_large from '../assets/images/counter-yellow-large.svg';
import counter_yellow_small from '../assets/images/counter-yellow-small.svg';

export default function Discs(props) {

const player1 = `url(${counter_red_large})`;
const player2 = `url(${counter_yellow_large})`;
const players = [player1, player2];


    const styles = 
    { 
        backgroundImage: !props.isFree === true ? players[props.player - 1]: "none",
        zIndex: props.isFree ? "30" : "20",
  
      }

    return (

        <button    
            onClick={props.putDiscs}
            style={styles}>
            <h4>{props.player}</h4>
        </button>

    )
};
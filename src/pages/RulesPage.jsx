import BtnCheck from '../components/BtnCheck';
import { Link } from 'react-router-dom';

export default function RulesPage() {

    return (
        <div className='menu-container'>
            <div  className='player-box rules-container'>
                <h1>Rules</h1>
                    <div>
                        <h3>OBJECTIVE</h3>
                        <p>Be the first player to connect 4
                         of the same colored discs in a row
                         (either vertically, horizontally, 
                         or diagonally).</p>  
                    </div>
                    <div>
                        <h3>HOW TO PLAY</h3>
                        <li>
                            <span>1</span>
                            <p>Red goes first in the first game.</p>
                        </li>
                        <li>
                            <span>2</span>
                            <p>Players must alternate turns,and only one
                            disc can be dropped in each turn. </p>    
                        </li>
                        <li>
                            <span>3</span>
                            <p>The game ends when there is a 4-in-a-row 
                            or a stalemate.</p>
                        </li>
                        <li>
                            <span>4</span>
                            <p>The starter of the previous game goes 
                            second on the next game.</p>
                        </li>
                    </div>
                    <Link to="/">
                        <BtnCheck />
                    </Link>
            </div>
        </div>
    )
};
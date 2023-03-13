import marker_red from '../assets/images/marker-red.svg';
import marker_yellow from '../assets/images/marker-yellow.svg';
import board_layer_black_large from '../assets/images/board-layer-black-large.svg';
import board_layer_white_large from '../assets/images/board-layer-white-large.svg';
import Discs from './Discs';

export default function Dashboard({
    winnerDiscs, 
    discs, 
    playerTurn,  
    playerOn, 
    columnValue,
    handleMouseOver,
    handleMouseOut
    }) {

    const markerRed = `url(${marker_red })`;
    const markerYellow = `url(${marker_yellow })`;

    function changeCurcor (columNumber) {
    const visibility = { visibility: columNumber === columnValue
        ? 'visible' : 'hidden',
         backgroundImage: playerOn === 1 ? markerRed: markerYellow };
        return visibility
    }

    return (
    
        <div className='dashboard flex'>
                <img className='board-black' src={board_layer_black_large} alt="Dashboard" />
                <img className='board-white' src={board_layer_white_large} alt="Dashboard" />
    
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
                            selectDisc={() => playerTurn(disc.columnValue)}
                            animationHeight={disc.rowValue}
                            handleMouseOver={() =>handleMouseOver(disc.columnValue)}
                            handleMouseOut={() =>handleMouseOut(disc.columnValue)}
                        />
                    )}
                </div> 
        </div>
    )
};
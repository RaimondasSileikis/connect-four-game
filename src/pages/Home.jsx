import logo from '../assets/images/logo.svg';
import BtnMenu from '../components/BtnMenu';
import Dashboard from '../components/Dashboard';
import CounterBox1 from '../components/CounterBox1';
import CounterBox2 from '../components/CounterBox2';
import BtnRestart from '../components/BtnRestart';
import TurnPlayer from '../components/TurnPlayer';
import PausePage from './PausePage';

export default function Home({ 
    discs,
    winnerPlayer,
    winnerDiscs,
    playAgain,
    restartNewTable,
    selectDisc,
    playerOn,
    columnValue,
    timePlayer1,
    timePlayer2,
    counterPlayer1,
    counterPlayer2,
    modal,
    pauseOn,
    pauseOf
    }) {
    
    return (
        <>
            <PausePage 
                modal={modal} 
                pauseOf={pauseOf}
                restartNewTable={restartNewTable}
            />

            <div className='main'>
                <header className='header flex'>
                    <BtnMenu pauseOn={pauseOn} />
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <BtnRestart restartNewTable={restartNewTable}/>
                </header>

                <main className='container'>
                    <CounterBox1 counterPlayer1={counterPlayer1}/>
                    <Dashboard
                        discs={discs}
                        selectDisc={selectDisc}
                        winnerDiscs={winnerDiscs}
                        playerOn={ playerOn} 
                        columnValue={columnValue} 
                    />
                    <CounterBox2 counterPlayer2={counterPlayer2}/>
                </main>

                <TurnPlayer 
                    playAgain={playAgain} 
                    winnerPlayer={winnerPlayer} 
                    playerOn={playerOn} 
                    timePlayer1={timePlayer1} 
                    timePlayer2={timePlayer2}
                />
            </div>
        </>
    )
};
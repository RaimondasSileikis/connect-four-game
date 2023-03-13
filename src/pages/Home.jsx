import logo from '../assets/images/logo.svg';
import BtnMenu from '../components/BtnMenu';
import Dashboard from '../components/Dashboard';
import CounterBoxOne from '../components/CounterBoxOne';
import CounterBoxTwo from '../components/CounterBoxTwo';
import BtnRestart from '../components/BtnRestart';
import TurnPlayer from '../components/TurnPlayer';
import PausePage from './PausePage';

export default function Home({ 
    discs,
    winnerPlayer,
    winnerDiscs,
    playAgain,
    restartNewTable,
    playerTurn,
    playerOn,
    columnValue,
    timePlayerOne,
    timePlayerTwo,
    counterPlayerOne,
    counterPlayerTwo,
    modal,
    pauseOn,
    pauseOf,
    cpuMode
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
                    <CounterBoxOne 
                        counterPlayerOne={counterPlayerOne}
                        cpuMode={cpuMode}
                    />
                    <Dashboard
                        discs={discs}
                        playerTurn={playerTurn}
                        winnerDiscs={winnerDiscs}
                        playerOn={ playerOn} 
                        columnValue={columnValue}
                    />
                    <CounterBoxTwo 
                        counterPlayerTwo={counterPlayerTwo}
                        cpuMode={cpuMode}
                    />
                </main>

                <TurnPlayer 
                    playAgain={playAgain} 
                    winnerPlayer={winnerPlayer} 
                    playerOn={playerOn} 
                    timePlayerOne={timePlayerOne} 
                    timePlayerTwo={timePlayerTwo}
                />
            </div>
        </>
    )
};
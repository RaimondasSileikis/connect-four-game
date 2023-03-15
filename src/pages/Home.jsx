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
    cpuMode,
    handleMouseOver,
    handleMouseOut
    }) {
    
    return (
        <>
            <PausePage 
                modal={modal} 
                pauseOf={pauseOf}
                restartNewTable={restartNewTable}
            />
            <div className='home'>
                <header className='home-header flex'>
                    <BtnMenu pauseOn={pauseOn} />
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <BtnRestart restartNewTable={restartNewTable}/>
                </header>

                <main className='home-container'>
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
                        handleMouseOver={handleMouseOver}
                        handleMouseOut={handleMouseOut}
                    />
                    <CounterBoxTwo 
                        counterPlayerTwo={counterPlayerTwo}
                        cpuMode={cpuMode}
                    />
                </main>
                <footer className='home-footer'>
                     <TurnPlayer 
                    playAgain={playAgain} 
                    winnerPlayer={winnerPlayer} 
                    playerOn={playerOn} 
                    timePlayerOne={timePlayerOne} 
                    timePlayerTwo={timePlayerTwo}
                    cpuMode={cpuMode}
                    />
                </footer>
               
            </div>
        </>
    )
};
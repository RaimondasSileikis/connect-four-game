import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState, useRef} from 'react';
import { nanoid } from 'nanoid';
import './styles/index.scss';
import Home from './pages/Home';
import StartPage from './pages/StartPage';
import RulesPage from './pages/RulesPage';

function App() {

  const [discs, setDiscs] = useState(getNewTable());
  const [playerStartGame, setPlayerStartGame] = useState(1);
  const [playerOn, setPlayerOn] = useState(1);
  const [winnerPlayer, setWinnerPlayer] = useState(null);
  const [winnerDiscs, setWinnerDiscs] = useState([]);
  const [counterPlayer1, setCounterPlayer1] = useState(0);
  const [counterPlayer2, setCounterPlayer2] = useState(0);
  const [columnValue, setColumnValue] = useState(0);
  const [timePlayer1, setTimePlayer1] = useState(30);
  const [timePlayer2, setTimePlayer2] = useState(30);
  const [isRunningPlayer1, setIsRunningPlayer1] = useState(false);
  const [isRunningPlayer2, setIsRunningPlayer2] = useState(false);
  const [isWaitingPlayer1, setIsWaitingPlayer1] = useState(true);
  const [isWaitingPlayer2, setIsWaitingPlayer2] = useState(false);
  const [modal, setModal] = useState(false);

  const delay = 1000;

  useInterval(() => {
    setTimePlayer1(timePlayer1 >=1 ? timePlayer1 - 1 : 0);
  }, isRunningPlayer1 && isWaitingPlayer1 ? delay : null);

  useInterval(() => {
    setTimePlayer2(timePlayer2 >=1 ? timePlayer2 - 1 : 0);
  }, isRunningPlayer2 && isWaitingPlayer2 ? delay : null);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

  if (winnerPlayer === null) {
    if (timePlayer2 === 0 && timePlayer1 > 0) {
      setWinnerPlayer(1);
      setCounterPlayer1(counterPlayer1 + 1); 
      stopTimer();
      } else if (timePlayer1 === 0 && timePlayer2 > 0) {
        setWinnerPlayer(2);
        setCounterPlayer2(counterPlayer2 + 1);
        stopTimer();
      }
    horizontalCondition() ||
    verticalCondition() ||
    diagonalCondition();
  }

  function showWinner(disc1, disc2, disc3, disc4) {
    const isWinner = disc1.player;
    const winnersId = [disc1.id, disc2.id, disc3.id, disc4.id];
    setWinnerPlayer(isWinner);
    setWinnerDiscs(winnersId)
    setIsRunningPlayer1(false);
    setIsRunningPlayer2(false);
    isWinner === 1 ? 
    setCounterPlayer1(counterPlayer1 + 1) :
    setCounterPlayer2(counterPlayer2 + 1);
  }

  function playAgain() {
    setDiscs(getNewTable());
    setPlayerStartGame(playerStartGame === 1 ? 2 : 1)
    setPlayerOn(playerStartGame === 1 ? 2 : 1);
    setWinnerPlayer(null);
    setColumnValue(0);
    stopTimer(playerStartGame);
  }
  
  function restartNewTable() {
    setDiscs(getNewTable());
    setPlayerStartGame(1);
    setPlayerOn(1);
    setWinnerPlayer(null);
    setColumnValue(0);
    setCounterPlayer1(0);
    setCounterPlayer2(0);
    stopTimer(2);
    setModal(false);
  }

  function startTimer() {
    setIsRunningPlayer2(true);
    setIsRunningPlayer1(true);
    setIsWaitingPlayer1(!isWaitingPlayer1)
    setIsWaitingPlayer2(!isWaitingPlayer2)
  }
  
  function stopTimer(player) {
    setIsRunningPlayer2(false);
    setIsRunningPlayer1(false);
    setIsWaitingPlayer1(player === 2 ? true : false);
    setIsWaitingPlayer2(player === 2 ? false : true);
    setTimePlayer1(30);
    setTimePlayer2(30);
  }

  function getNewTable() {
    const newDiscs = [];
    const column = 7;
    const row = 6;
      for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
          newDiscs.push({
          columnValue: j + 1,
          rowValue: i + 1,
          isFree: true,
          player: 0,
          id: nanoid()
        });
      }
    }
    return newDiscs
  }

  function selectDisc(id) {
    if (winnerPlayer === null) {
      setPlayerOn(playerOn === 1 ? 2 : 1);
      setDiscs(oldDisc => oldDisc.map(disc => {
        return disc.id === id ? 
            {...disc, isFree: !disc.isFree, player: playerOn } :
            disc
    }));
    startTimer()
      const disc = discs.filter(disc =>disc.id === id)[0];
      setColumnValue(disc.columnValue)
    }
  }

function checkDischMatch(disc1, disc2, disc3, disc4) {
  return (
    disc1 === disc2 &&
    disc1 === disc3 &&
    disc1 === disc4 &&
    disc1 !== 0
  );
}

function returnDiscValues(columnValue, rowValue) {
  const disc = discs.filter(disc =>
    disc.columnValue === columnValue && disc.rowValue === rowValue)[0];
    return disc
}

function horizontalCondition() {
  for (let row = 1; row < 7; row++) {
    for (let col = 1; col < 5; col++) {
      const disc1 = returnDiscValues(col, row);
      const disc2 = returnDiscValues(col + 1, row);
      const disc3 = returnDiscValues(col + 2, row);
      const disc4 = returnDiscValues(col + 3, row);
          if (
              checkDischMatch(
                disc1.player,
                disc2.player,
                disc3.player,
                disc4.player
                )
              ){
          showWinner(disc1, disc2, disc3, disc4);
          return true
        }    else {
        continue;
      }
    }
  }
}

function verticalCondition() {
  for (let col = 1; col < 8; col++) {
    for (let row = 1; row < 4; row++) {
      const disc1 = returnDiscValues(col, row);
      const disc2 = returnDiscValues(col, row + 1);
      const disc3 = returnDiscValues(col, row + 2);
      const disc4 = returnDiscValues(col, row + 3);
          if (
              checkDischMatch(
                disc1.player,
                disc2.player,
                disc3.player,
                disc4.player
                )
              ){
          showWinner(disc1, disc2, disc3, disc4);
          return true
        }    else {
        continue;
      }
    }
  }
}

function diagonalCondition() {
  for (let col = 1; col < 5; col++) {
    for (let row = 1; row < 4; row++) {
      const disc1 = returnDiscValues(col, row)
      const disc2 = returnDiscValues(col + 1, row + 1);
      const disc3 = returnDiscValues(col + 2, row + 2);
      const disc4 = returnDiscValues(col + 3, row + 3);
      const disc5 = returnDiscValues(col + 3, row);
      const disc6 = returnDiscValues(col + 2, row + 1);
      const disc7 = returnDiscValues(col + 1, row + 2);
      const disc8 = returnDiscValues(col, row + 3);
      if (
        checkDischMatch(
          disc1.player,
          disc2.player,
          disc3.player,
          disc4.player
          )
      ) {
        showWinner(disc1, disc2, disc3, disc4);
        return true;
      } else if (
        checkDischMatch(
          disc5.player,
          disc6.player,
          disc7.player,
          disc8.player
          )
      ) {
        showWinner(disc5, disc6, disc7, disc8);
        return true;
      } else {
        continue;
      }
    }
  }
}

function pauseOn() {
  setModal(!modal)
  setIsWaitingPlayer1(false) 
  setIsWaitingPlayer2(false);
}

function pauseOf() {
  setModal(!modal)
  if (playerOn === 1) {
    setIsWaitingPlayer1( true)
    setIsWaitingPlayer2(false)
  } else {
    setIsWaitingPlayer1(false)
    setIsWaitingPlayer2(true)
  }
}

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>

          <Route path="/"  element={<StartPage/>}/>
          <Route path="/rules"  element={<RulesPage/>}/>
          <Route path="/play" element={
            <Home
              columnValue={columnValue}
              counterPlayer1={counterPlayer1}
              counterPlayer2={counterPlayer2}
              winnerPlayer={winnerPlayer} 
              winnerDiscs={winnerDiscs}
              playAgain={playAgain}
              playerOn={playerOn}
              discs={discs}
              restartNewTable={restartNewTable}
              selectDisc={selectDisc}
              timePlayer1={timePlayer1}
              timePlayer2={timePlayer2}
              modal={modal} 
              pauseOn={pauseOn} 
              pauseOf={pauseOf}
              />
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
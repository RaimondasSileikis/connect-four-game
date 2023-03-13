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
  const [counterPlayerOne, setCounterPlayerOne] = useState(0);
  const [counterPlayerTwo, setCounterPlayerTwo] = useState(0);
  const [columnValue, setColumnValue] = useState(0);
  const [timePlayerOne, setTimePlayerOne] = useState(30);
  const [timePlayerTwo, setTimePlayerTwo] = useState(30);
  const [isRunningPlayerOne, setIsRunningPlayerOne] = useState(false);
  const [isRunningPlayerTwo, setIsRunningPlayerTwo] = useState(false);
  const [isWaitingPlayerOne, setIsWaitingPlayerOne] = useState(true);
  const [isWaitingPlayerTwo, setIsWaitingPlayerTwo] = useState(false);
  const [modal, setModal] = useState(false);
  const [cpuOn, setCpuOn] = useState(false);
  const [cpuMode, setCpuMode] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
 
  const delay = 1000;

  useInterval(() => {
    setTimePlayerOne(timePlayerOne >=1 ? timePlayerOne - 1 : 0);
  }, isRunningPlayerOne && isWaitingPlayerOne ? delay : null);

  useInterval(() => {
    setTimePlayerTwo(timePlayerTwo >=1 ? timePlayerTwo - 1 : 0);
  }, isRunningPlayerTwo && isWaitingPlayerTwo ? delay : null);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    };
  }, [delay]);
};

  useEffect(() => {
      if (cpuOn === true) {
        setTimeout(() => {
        cpuTurn() 
      }, rand(500, 1000));
    };
  });

  if (winnerPlayer === null) {
    if (timePlayerTwo === 0 && timePlayerOne > 0) {
      setWinnerPlayer(1);
      setCounterPlayerOne(counterPlayerOne + 1); 
      stopTimer();
      } else if (timePlayerOne === 0 && timePlayerTwo > 0) {
        setWinnerPlayer(2);
        setCounterPlayerTwo(counterPlayerTwo + 1);
        stopTimer();
      };
    horizontalCondition() ||
    verticalCondition() ||
    diagonalCondition();
  };

  function showWinner(discOne, discTwo, discThree, discFour) {
    const isWinner = discOne.player;
    const winnersId = [discOne.id, discTwo.id, discThree.id, discFour.id];
    setWinnerPlayer(isWinner);
    setWinnerDiscs(winnersId)
    setIsRunningPlayerOne(false);
    setIsRunningPlayerTwo(false);
    isWinner === 1 ? 
    setCounterPlayerOne(counterPlayerOne + 1) :
    setCounterPlayerTwo(counterPlayerTwo + 1);
  };

  function playAgain() {
    setDiscs(getNewTable());
    setPlayerStartGame(playerStartGame === 1 ? 2 : 1)
    setPlayerOn(playerStartGame === 1 ? 2 : 1);
    setWinnerPlayer(null);
    setColumnValue(0);
    stopTimer(playerStartGame);
    if (cpuMode) {
      setCpuOn(playerStartGame === 1 ? !cpuOn : cpuOn);
    };
  };

  function restartNewTable() {
    setDiscs(getNewTable());
    setPlayerStartGame(1);
    setPlayerOn(1);
    setWinnerPlayer(null);
    setColumnValue(0);
    setCounterPlayerOne(0);
    setCounterPlayerTwo(0);
    stopTimer(2);
    setModal(false);
    setCpuOn(false);
  };

  function startTimer() {
    setIsRunningPlayerTwo(true);
    setIsRunningPlayerOne(true);
    setIsWaitingPlayerOne(!isWaitingPlayerOne);
    setIsWaitingPlayerTwo(!isWaitingPlayerTwo);
  };
  
  function stopTimer(player) {
    setIsRunningPlayerTwo(false);
    setIsRunningPlayerOne(false);
    setIsWaitingPlayerOne(player === 2 ? true : false);
    setIsWaitingPlayerTwo(player === 2 ? false : true);
    setTimePlayerOne(30);
    setTimePlayerTwo(30);
  };

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
      };
    };
    return newDiscs;
  };

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function getRandomDisc() {
    const isFree = discs.filter(disc => disc.player === 0);
    const cpuColumnValue = isFree[rand(0, isFree.length - 1)].columnValue;
      return cpuColumnValue;
  };

  function cpuTurn() {
    const playerOnCpu = playerOn;
    selectDisc(getRandomDisc() , playerOnCpu);
    setCpuOn(false);
  };

  function playerTurn(column) {
    const playerOnMe = playerOn;
    if (!cpuOn) {
      selectDisc(column, playerOnMe);
      cpuMode ? setCpuOn(true) : setCpuOn(false);
    };
 };

  function findDisc(column) {
    const columArr = discs.filter(disc => 
      disc.columnValue === column && disc.player === 0
    );
    return columArr[columArr.length - 1].id
  };

  function selectDisc(column, player) {
    if (winnerPlayer === null) {
      setPlayerOn(player === 1 ? 2 : 1);
      setDiscs(oldDisc => oldDisc.map(disc => {
        return disc.id === findDisc(column) ? 
            {...disc, isFree: !disc.isFree, player: player} :
            disc
    }));
    startTimer()
    setColumnValue(column);
    };
  };

  function checkDischMatch(discOne, discTwo, discThree, discFour) {
    return (
      discOne === discTwo &&
      discOne === discThree &&
      discOne === discFour &&
      discOne !== 0
    );
  };

  function returnDiscValues(columnValue, rowValue) {
    const disc = discs.filter(disc =>
      disc.columnValue === columnValue && disc.rowValue === rowValue)[0];
      return disc;
  };

  function horizontalCondition() {
    for (let row = 1; row < 7; row++) {
      for (let col = 1; col < 5; col++) {
        const discOne = returnDiscValues(col, row);
        const discTwo = returnDiscValues(col + 1, row);
        const discThree = returnDiscValues(col + 2, row);
        const discFour = returnDiscValues(col + 3, row);
            if (
                checkDischMatch(
                  discOne.player,
                  discTwo.player,
                  discThree.player,
                  discFour.player
                  )
                ){
            showWinner(discOne, discTwo, discThree, discFour);
            return true
          }    else {
          continue;
        };
      };
    };
  };

function verticalCondition() {
  for (let col = 1; col < 8; col++) {
    for (let row = 1; row < 4; row++) {
      const discOne = returnDiscValues(col, row);
      const discTwo = returnDiscValues(col, row + 1);
      const discThree = returnDiscValues(col, row + 2);
      const discFour = returnDiscValues(col, row + 3);
          if (
              checkDischMatch(
                discOne.player,
                discTwo.player,
                discThree.player,
                discFour.player
                )
              ){
          showWinner(discOne, discTwo, discThree, discFour);
          return true
        }    else {
        continue;
      };
    };
  };
};

  function diagonalCondition() {
    for (let col = 1; col < 5; col++) {
      for (let row = 1; row < 4; row++) {
        const discOne = returnDiscValues(col, row)
        const discTwo = returnDiscValues(col + 1, row + 1);
        const discThree = returnDiscValues(col + 2, row + 2);
        const discFour = returnDiscValues(col + 3, row + 3);
        const discFive = returnDiscValues(col + 3, row);
        const discSix = returnDiscValues(col + 2, row + 1);
        const discSeven = returnDiscValues(col + 1, row + 2);
        const discEight = returnDiscValues(col, row + 3);
        if (
          checkDischMatch(
            discOne.player,
            discTwo.player,
            discThree.player,
            discFour.player
            )
        ) {
          showWinner(discOne, discTwo, discThree, discFour);
          return true;
        } else if (
          checkDischMatch(
            discFive.player,
            discSix.player,
            discSeven.player,
            discEight.player
            )
        ) {
          showWinner(discFive, discSix, discSeven, discEight);
          return true;
        } else {
          continue;
        };
      };
    };
  };

  function pauseOn() {
    setModal(!modal)
    setIsWaitingPlayerOne(false); 
    setIsWaitingPlayerTwo(false);
  };

  function pauseOf() {
    setModal(!modal)
    if (playerOn === 1) {
      setIsWaitingPlayerOne( true);
      setIsWaitingPlayerTwo(false);
    } else {
      setIsWaitingPlayerOne(false);
      setIsWaitingPlayerTwo(true);
    };
  };

  function playVsCpu() {
    setCpuMode(true);
  };

  function playVsPlayer() {
        setCpuMode(false)
  };



  function handleMouseOver(column){
    setIsHovering(true);
    setColumnValue(column)
    console.log(isHovering);
  };

  function handleMouseOut (column){
    setIsHovering(false);
    setColumnValue(column)
  };

  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={
            <StartPage 
              setcpuMode={setCpuMode}
              playVsCpu={playVsCpu} 
              playVsPlayer={playVsPlayer}
              />}
            />
          <Route path="/rules"  element={
            <RulesPage
            />}
          />
          <Route path="/play" element={
            <Home
              columnValue={columnValue}
              counterPlayerOne={counterPlayerOne}
              counterPlayerTwo={counterPlayerTwo}
              winnerPlayer={winnerPlayer} 
              winnerDiscs={winnerDiscs}
              playAgain={playAgain}
              playerOn={playerOn}
              discs={discs}
              restartNewTable={restartNewTable}
              playerTurn={playerTurn}
              timePlayerOne={timePlayerOne}
              timePlayerTwo={timePlayerTwo}
              modal={modal} 
              pauseOn={pauseOn} 
              pauseOf={pauseOf}
              cpuMode={cpuMode}
              handleMouseOver={handleMouseOver}
              handleMouseOut={handleMouseOut}
              />
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
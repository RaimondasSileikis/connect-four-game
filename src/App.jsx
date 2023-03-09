import './styles/index.scss';

import Home from './pages/Home';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';




function App() {

const [discs, setDiscs] = useState(getNewTable());
const [playerOn, setPlayerOn] = useState(1);
const [win, setWin] = useState(false)
console.log('win!!',win);
console.log(discs);


useEffect(() => {

  if (
    horizontalCondition() ||
    verticalCondition() ||
    diagonalCondition()
  ) {
    setWin(true)
    console.log('vvvvin');
  }

}, [discs])


function showWin(one, two, three, four) {
  console.log('showing', one, two, three, four);
}

function checkDischMatch(one, two, three, four) {
  return (
    one === two &&
    one === three &&
    one === four &&
    one !== 0 
    // one !== undefined
  );
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
          showWin(disc1, disc2, disc3, disc4)
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
          showWin(disc1, disc2, disc3, disc4)
          return true
        }    else {
        continue;
      }
    }
  }
}
function returnDiscValues(columnValue, rowValue) {
  const disc = discs.filter(disc =>
    disc.columnValue === columnValue && disc.rowValue === rowValue)[0];
    return disc
}

function diagonalCondition() {
  for (let col = 1; col < 4; col++) {
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
     
        showWin(disc1, disc2, disc3, disc4)
        return true;
      } else if (
        checkDischMatch(
          disc5.player,
          disc6.player,
          disc7.player,
          disc8.player
          )
      ) {
        showWin(disc5, disc6, disc7, disc8)
        return true;
      } else {
        continue;
      }
    }
  }
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
        id: nanoid(),
    });
}

  }
  return newDiscs
}


function restartNewTable() {
  setDiscs(getNewTable());
  setPlayerOn(playerOn === 1 ? 2 : 1)
}

function putDiscs(id) {
  setPlayerOn(playerOn === 1 ? 2 : 1);
  setDiscs(oldDisc => oldDisc.map(disc => {
    return disc.id === id ? 
        {...disc, isFree: !disc.isFree, player: playerOn} :
        disc
}));
}

  return (
    <div className="App ">
    
  <Home  discs={discs} setDiscs={setDiscs} restartNewTable={restartNewTable} putDiscs={putDiscs} />

   
{/* 
   Main menu start

   Play vs player
   Game rules

  Main menu end

  Rules start

  Rules

  Objective

  Be the first player to connect 4 of the same colored discs in a row (either 
  vertically, horizontally, or diagonally).

  How to play

  Red goes first in the first game.
  Players must alternate turns, and only one disc can be dropped in each turn. 
  The game ends when there is a 4-in-a-row or a stalemate.
  The starter of the previous game goes second on the next game.

  Rules end

  Ingame menu start

  Pause

  Continue game
  Restart
  Quit game

  Ingame menu end
  
  Game board start

  Menu
  Restart

  Player 1
  Player 2

  Player 1's turn
  Player 2's turn

  Wins
  Play again

  Game board end */}
    </div>
  );
}

export default App;

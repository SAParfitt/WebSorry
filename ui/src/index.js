import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TYPE = 0;
const SP = 0; //Normal Space
const ST = 1; //Start Space
const S3 = 2; //Slide Three Spaces
const S5 = 3; //Slide Five Spaces
const EN = 4; //Entrance
const SF = 5; //Safety
const FS = 6; //Final Safety
const HO = 7; //Home
const BK = 8; //Blank
const HI = 9; //Hidden
const PL = 10; //Player
const CD = 11; //Card Description

const COLOR = 1;
const YE = 0; //Yellow
const GR = 1; //Green
const RD = 2; //Red
const BL = 3; //Blue
const COLORS = ['yellow', 'green', 'red', 'blue'];
const TURNTEXT = ['Yellow\'s Turn', 'Green\'s Turn', 'Red\'s Turn', 'Blue\'s Turn'];

const PAWNCHAR = '\u265F';

const BOARDLAYOUT = [
  [[SP, YE], [S3, YE], [EN, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [S5, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [ST, YE], [HI, BK], [HI, BK], [BK, BK], [HO, GR], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [S3, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [FS, GR], [SF, GR], [SF, GR], [SF, GR], [SF, GR], [EN, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [ST, GR], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [FS, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[S5, BL], [HO, YE], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [PL, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [CD, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HO, RD], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [S5, GR]],
  [[SP, BL], [ST, BL], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [FS, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HO, BL], [HI, BK], [HI, BK], [BK, BK], [ST, RD], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[EN, BL], [SF, BL], [SF, BL], [SF, BL], [SF, BL], [FS, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[S3, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [S5, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [EN, RD], [S3, RD], [SP, RD]]
];

const PLAYERCOORDS = [
  [1,3,6,2,0,3],
  [3,12,2,7,3,15],
  [12,10,7,12,15,12],
  [10,1,12,6,12,0]
];

const MOVEFROM = ' movefrom';
const MOVETO = ' moveto';

class GameState extends React.Component{

  constructor() {
    super();
    this.players = [new Player(YE), new Player(GR), new Player(RD), new Player(BL)];
    this.deck = new Deck();
    this.board = new GameBoard(this.players);
    this.currentPlayer = 3;
    this.actionList = [];
    this.gameOver = false;
  }

  nextTurn() {
    for (let player of this.players) {
      if (player.pawnsInHome() === 4) {
        player.wins();
        this.gameOver = true;
      }
    }

    if (!this.currentCard) {
      this.currentPlayer = 0;
      this.drawCard();
    } else {
      let drawCardAgain = this.currentCard.drawAgain();
      if (!drawCardAgain) {
        this.currentPlayer = (this.currentPlayer + 1)%4;
      }
      this.drawCard();
    }

    this.setState({});
  }

  drawCard() {
    this.currentCard = this.deck.draw();
    this.actionList = this.calcMoves();
  }

  calcMoves() {
    let actionList = [];
    let card = this.currentCard;
    let player = this.players[this.currentPlayer];

    if (card.moveFromStart()) {
      for (let pawn of player.pawnsInStart()) {
        let endpoint = this.pawnForward(pawn.row, pawn.col, 1);
        if (endpoint) {
          actionList.push(new Action(pawn, endpoint[0], endpoint[1]))
        }
        break; // Only move ONE pawn from Start!
      }
    }
    if (card.moveForward()) {
      for (let pawn of player.pawnsInPlay()) {
        let endpoint = this.pawnForward(pawn.row, pawn.col, card.count);
        if (endpoint) {
          actionList.push(new Action(pawn, endpoint[0], endpoint[1]))
        }
      }
    }
    if (card.moveBackward()) {
      for (let pawn of player.pawnsInPlay()) {
        let endpoint = this.pawnBackward(pawn.row, pawn.col, card.count);
        if (endpoint) {
          actionList.push(new Action(pawn, endpoint[0], endpoint[1]))
        }
      }
    }
    if (card.sorry()) {

    }
    return actionList;
  }

  pawnForward(row, col, count) {

    let cell = BOARDLAYOUT[row][col]

    if (count === 0 ) {
      let pawnsHere = this.board.getPawnList(row, col);
      if (pawnsHere.length > 0) {
        // On the final space, check if there are any pawns
        if (pawnsHere[0].player = this.currentPlayer) {
          // Cannot play onto one's own pawn
          return null;
        } else {
          return [row, col];
        }
      } else if (cell[TYPE] === S3){
        // Is this a slide 3 space?
        if (row === 0 && col < 15){
          // Yellow path
          col+=3;
        } else if (col === 15 && row < 15){
          // Green path
          row+=3;
        } else if (row === 15 && col > 0){
          // Red path
          col-=3;
        } else if (col === 0 && row > 0){
          // Blue path
          row-=3;
        }
      } else if (cell[TYPE] === S5){
        // Is this a slide 5 space?
        if (row === 0 && col < 15){
          // Yellow path
          col+=5;
        } else if (col === 15 && row < 15){
          // Green path
          row+=5;
        } else if (row === 15 && col > 0){
          // Red path
          col-=5;
        } else if (col === 0 && row > 0){
          // Blue path
          row-=5;
        }
      }
      return [row, col];
    }


    if (cell[TYPE] === ST) {
      row = PLAYERCOORDS[this.currentPlayer][4];
      col = PLAYERCOORDS[this.currentPlayer][5];
    }
    if ( cell[TYPE] === EN || cell[TYPE] === SF ) {
      // Pawn is at the entrance to or in a Safety Zone
      switch (this.currentPlayer) {
        case YE:
        row++;
        break;
        case GR:
        col--;
        break;
        case RD:
        row--;
        break;
        case BL:
        col++;
        break;
      }
    } else if (cell[TYPE] === FS) {
      // Pawn is in at the end of the Safety Zone
      switch (this.currentPlayer) {
        case YE:
        row = 6;
        col = 1;
        break;
        case GR:
        row = 1;
        col = 7;
        break;
        case RD:
        row = 7;
        col = 12;
        break;
        case BL:
        row = 12;
        col = 6;

        break;
      }
    } else if (row === 0 && col < 15){
      // Yellow path
      col++;
    } else if (col === 15 && row < 15){
      // Green path
      row++;
    } else if (row === 15 && col > 0){
      // Red path
      col--;
    } else if (col === 0 && row > 0){
      // Blue path
      row--;
    }

    count--;
    return this.pawnForward(row, col, count);
  }

  render() {
    let rows = [];
    for (let row = 0; row < BOARDLAYOUT.length; row++)
    {
      let cells = [];

      for (let col = 0; col < BOARDLAYOUT[row].length; col++) {
        cells.push(<this.square
          row={row}
          col={col}
          card={this.currentCard}
          player={this.currentPlayer}
          pawnList={this.board.getPawnList(row,col)}
          actionList={this.actionList}
          pawnClick={(row,col) => this.handleClick(row,col)}
          cardClick={() => this.nextTurn()}/>
        );
      }
      rows[row] = (<tr>{cells}</tr>);
    }
    let table = (<table><tbody>{rows}</tbody></table>);
    return (<div>{table}</div>);
  }

  square(props) {
    let cell = BOARDLAYOUT[props.row][props.col];
    let canmove;
    let highlight = '';
    let actionList = props.actionList;
    if (actionList.length != 0)
    {
      for (let action of actionList)
      {
        if (action.pawn.row === props.row && action.pawn.col === props.col) {
          canmove = true;
          highlight = MOVEFROM;
        }
        if (action.endRow === props.row && action.endCol === props.col) {
          highlight = MOVETO;
        }
      }
    }
    let pawnList = props.pawnList;
    let pawnColor;
    let pawnDiv;
    if (pawnList.length > 0)
    {
      //console.log(pawnList);
      pawnColor = COLORS[pawnList[0].player];
      let pawnCount = pawnList.length;
      let pawnChars = '';
      if (pawnColor) {
        for (let i = 0; i < pawnCount; i++) {
          pawnChars += PAWNCHAR;
        }
        pawnDiv = (<div className={'pawn ' + pawnColor}>{pawnChars}</div>);
      }
    }

    switch (cell[TYPE]) {
      // Space
      case SP:
      // Slide Three Spaces
      case S3:
      // Slide Five Spaces
      case S5:
      // Entrance
      case EN:
      // Safety
      case SF:
      // Final Safety
      case FS:
      if (canmove) {
        return (<td className={COLORS[cell[COLOR]] + highlight} onClick={()=> props.pawnClick(props.row, props.col)}>{pawnDiv}</td>);
      } else {
        return (<td className={COLORS[cell[COLOR]] + highlight}>{pawnDiv}</td>);
      }
      // Home
      case HO:
      return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
      // Start
      case ST:
      if (canmove) {
        return (<td className={COLORS[cell[COLOR]] + ' home' + highlight} colSpan = "3" rowSpan = "3" onClick={()=> props.pawnClick(props.row, props.col)}>{pawnDiv}</td>);
      } else {
        return (<td className={COLORS[cell[COLOR]] + ' home' + highlight} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
      }
      // Blank
      case BK:
      return (<td className="blank"/>);
      // Hidden
      case HI:
      // Hidden cells are behind Home and Start cells. Do not render these.
      return null;
      case PL:
      let color = COLORS[props.player];
      let turn = TURNTEXT[props.player];
      return (<td class={color} colSpan = "4"><div	text-align="center">{turn}</div></td>);
      case CD:
      let card = props.card;
      if (card) {
        if (actionList.length > 0) {
          return (<td class="card" colSpan = "4" rowSpan = "3"><h2>{card.desc}</h2></td>);
        } else {
          return (<td class="card" colSpan = "4" rowSpan = "3" onClick={()=> props.cardClick()}><h2>{card.desc}</h2><h4>No availible actions. Next turn.</h4></td>);
        }
      } else {
        return (<td class="card" colSpan = "4" rowSpan = "3" onClick={()=> props.cardClick()}><h2>Play!</h2></td>);
      }
      default:
      return (<td/>);
    }
  }

  handleClick(row, col){

    for (let action of this.actionList) {
      if (action.pawn.row === row && action.pawn.col === col) {
        action.pawn.row = action.endRow;
        action.pawn.col = action.endCol;
      }
    }
    this.board.rebuildBoard(this.players);
    this.nextTurn();
  }

}

class Pawn {

  constructor(row, col, player) {
    this.row = row;
    this.col = col;
    this.player = player;
  }

  setNewCoords(row, col) {
    this.row = row;
    this.col = col;
  }

}

class Player {

  constructor(player)
  {
    this.player = player;
    this.pawns = [];
    this.startRow = PLAYERCOORDS[player][0];
    this.startCol = PLAYERCOORDS[player][1];
    this.homeRow = PLAYERCOORDS[player][2];
    this.homeCol = PLAYERCOORDS[player][3];
    this.startSquareRow = PLAYERCOORDS[player][4];
    this.startSquareCol = PLAYERCOORDS[player][5];

    for (let pawn = 0; pawn < 4; pawn++) {
      this.pawns.push(new Pawn(this.startRow, this.startCol, this.player));
    }

  }

  startCoords() {
    return ({row: this.startRow, col: this.startCol});
  }

  pawnsInStart() {
    let pawns = [];
    for (let pawn of this.pawns) {
      if (pawn.col === this.startCol && pawn.row === this.startRow) {
        pawns.push(pawn);
      }
    }
    return pawns;
  }

  pawnsInHome() {
    let pawns = [];
    for (let pawn of this.pawns) {
      if (pawn.col === this.homeCol && pawn.row === this.homeRow) {
        pawns.push(pawn);
      }
    }
    return pawns;
  }

  pawnsInPlay() {
    let pawns = [];
    let startPawns = this.pawnsInStart();
    let homePawns = this.pawnsInHome();
    for (let pawn of this.pawns) {
      if (!startPawns.includes(pawn) && !homePawns.includes(pawn)) {
        pawns.push(pawn);
      }
    }
    return pawns;
  }

  wins() {
    alert( "Player " + COLORS[this.player] + " wins!")
  }
}

class Card {
  constructor(count, desc) {
    this.count = count;
    this.desc = desc;
  }

  moveFromStart() {
    return false;
  }

  moveForward() {
    return false;
  }

  moveBackward() {
    return false;
  }

  drawAgain() {
    return false;
  }

  splitMove() {
    return false;
  }

  swapPawn() {
    return false;
  }

  sorry() {
    return false;
  }
}

class MoveForwardCard extends Card {
  constructor(count) {
    super(count, 'Move forward ' + count + '.');
  }

  moveForward() {
    return this.count;
  }
}

class MoveBackwardCard extends Card {
  constructor(count) {
    super(count, 'Move backward ' + count + '.');
  }

  moveBackward() {
    return this.count;
  }
}

class StartMoveCard extends Card {
  constructor(count, drawCardAgain) {
    super(count, 'Move from Start or move forward ' + count + '.');
    this.drawCardAgain = drawCardAgain;
    if (this.drawCardAgain) {
      this.desc += ' Draw again.';
    }
  }

  moveFromStart() {
    return true;
  }

  moveForward() {
    return this.count;
  }

  drawAgain() {
    return this.drawCardAgain;
  }
}

class Deck {

  draw() {
    // If the deck is empty, shuffle a new deck
    if (!this.cards || !this.cards.length) {
      this.shuffle();
    }

    // Return the last card in the deck and remove it
    return this.cards.pop();
  }

  shuffle() {
    this.cards = [];

    // Create base deck
    for (let i = 0; i < 4; i++) {
      this.cards.push(new StartMoveCard(1, false));
      this.cards.push(new StartMoveCard(2, true));
      this.cards.push(new MoveForwardCard(3));
      //this.cards.push(new MoveBackwardCard(4));
      this.cards.push(new MoveForwardCard(5));
      //this.cards.push(new Card(7, 'Move forward 7 or split between two pawns.'));
      this.cards.push(new MoveForwardCard(8));
      //this.cards.push(new Card(10, 'Move forward 10 or move backward 1.'));
      //this.cards.push(new Card(11, 'Move forward 11 or change places with an opponent.'));
      this.cards.push(new MoveForwardCard(12));
      //this.cards.push(new Card('Sorry', 'Move from Start and switch places with an opponent, whom you bump back to Start.'));
    }

    // Shuffle deck using Modern Fisher-Yetes algorithm
    function randomIndex(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let end = this.cards.length;
    for (let x = 0; x < end - 1; x++) {
      let index = randomIndex(x, end);
      if (x !== index) {
        // Swap
        [this.cards[x], this.cards[index]] = [this.cards[index], this.cards[x]];
      }
    }
  }
}

class Action {
  constructor(pawn, endRow, endCol) {
    this.pawn = pawn;
    this.endRow = endRow;
    this.endCol = endCol;
  }
}

class GameBoard {

  constructor(players) {
    this.rebuildBoard(players);
  }

  rebuildBoard(players){
    this.current = [];
    for (let row = 0; row < 16; row++) {
      let cols = [];
      for (let col = 0; col < 16; col++) {
        let pawns = [];
        for (let player of players) {
          for (let pawn of player.pawns) {
            if (pawn.row === row && pawn.col === col) {
              pawns.push(pawn);
            }
          }
        }
        cols.push(pawns);
      }
      this.current.push(cols);
    }
  }

  getPawnList(row,col) {
    return this.current[row][col];
  }

}

ReactDOM.render(
  <GameState />,
  document.getElementById('root')
);

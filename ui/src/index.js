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

const COLOR = 1;
const YE = 0; //Yellow
const GR = 1; //Green
const RD = 2; //Red
const BL = 3; //Blue
const COLORS = ['yellow', 'green', 'red', 'blue'];

const PAWNCHAR = '\u265F';

const boardLayout = [
  [[SP, YE], [S3, YE], [EN, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [S5, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [ST, YE], [HI, BK], [HI, BK], [BK, BK], [HO, GR], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [S3, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [FS, GR], [SF, GR], [SF, GR], [SF, GR], [SF, GR], [EN, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [ST, GR], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [FS, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[S5, BL], [HO, YE], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HO, RD], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [S5, GR]],
  [[SP, BL], [ST, BL], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [FS, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HO, BL], [HI, BK], [HI, BK], [BK, BK], [ST, RD], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[EN, BL], [SF, BL], [SF, BL], [SF, BL], [SF, BL], [FS, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[S3, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [S5, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [EN, RD], [S3, RD], [SP, RD]]
];

class GameState extends React.Component{

  constructor() {
    super();
    this.players = [new Player(YE), new Player(GR), new Player(RD), new Player(BL)];
    this.deck = new Deck();
    this.board = new GameBoard(this.players);
    this.play();
  }

  play() {
    let card = this.deck.draw();
    console.log(card.label + " " + card.desc);
  }

  render() {
    let rows = [];
    for (let row = 0; row < boardLayout.length; row++)
    {
      let cells = [];

      for (let col = 0; col < boardLayout[row].length; col++) {
        cells.push(<Square
          row={row}
          col={col}
          onClick={(row,col) => this.handleClick(row,col)}/>
        );
      }
      rows[row] = (<tr>{cells}</tr>);
    }
    return (<table><tbody>{rows}</tbody></table>);
  }

}

class Pawn {

  constructor(row, col, player) {
    this.row = row;
    this.col = col;
    this.player = player;
  }

}

class Player {

  constructor(player)
  {
    this.player = player;
    this.pawns = [];
    this.startRow = -1;
    this.startCol = -1;

    switch (player) {
      case YE:
      this.startRow = 1;
      this.startCol = 3;
      break;
      case GR:
      this.startRow = 3;
      this.startCol = 12;
      break;
      case RD:
      this.startRow = 12;
      this.startCol = 10;
      break;
      case BL:
      this.startRow = 10;
      this.startCol = 1;
      break;
    }

    for (let pawn = 0; pawn < 4; pawn++) {
      this.pawns.push(new Pawn(this.startRow, this.startCol, this.player));
    }

  }

  pawnInStart() {

    let pawnList = [];

    for (let pawn of this.pawns) {
      if (pawn.col === this.startCol && pawn.row === this.startRow) {
        return pawn;
      }
    }
    return;
  }
}

class Card {

  constructor(label, desc) {
    this.label = label;
    this.desc = desc;
  }

}

class MoveCard extends Card {
  constructor(count) {
    super(count, 'Move forward ' + count + '.');
  }
}

class Deck {

  draw() {
    // If the deck is empty, shuffle a new deck
    if (!this.cards) {
      this.shuffle();
    }

    // Return the last card in the deck and remove it
    return this.cards.pop();
  }

  shuffle() {
    this.cards = [];

    // Create base deck
    for (let i = 0; i < 4; i++) {
      //this.cards.push(new Card(1, 'Move from Start of move forward 1.'));
      //this.cards.push(new Card(2, 'Move from Start or move forward 2. DRAW AGAIN.'));
      this.cards.push(new MoveCard(3));
      //this.cards.push(new Card(4, 'Move backward 4.'));
      //this.cards.push(new MoveCard(5));
      this.cards.push(new Card(7, 'Move forward 7 or split between two pawns.'));
      //this.cards.push(new MoveCard(8));
      //this.cards.push(new Card(10, 'Move forward 10 or move backward 1.'));
      //this.cards.push(new Card(11, 'Move forward 11 or change places with an opponent.'));
      //this.cards.push(new MoveCard(12));
      //this.cards.push(new Card('Sorry', 'Move from Start and switch places with an opponent, whom you bump back to Start.'));
    }

    // Shuffle deck using Modern Fisher-Yetes algorithm
    function randomIndex(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let end = this.cards.length;
    for (let x = 0; x < end - 1; x++) {
      let index = randomIndex(x, end);
      if (x != index) {
        // Swap
        [this.cards[x], this.cards[index]] = [this.cards[index], this.cards[x]];
      }
    }

  }

}

function Square(props) {
  let cell = boardLayout[props.row][props.col];

  let pawnDiv = '';
  let pawnChars = '';
  let thisPawn = new Pawn();
  let pawnColor = COLORS[thisPawn.color];
  let pawnCount = thisPawn.count;
  if (pawnColor) {
    for (let i = 0; i < pawnCount; i++) {
      pawnChars += PAWNCHAR;
    }
    pawnDiv = (<div className={'pawn ' + pawnColor}>{pawnChars}</div>);
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
    if (pawnColor) {
      return (<td className={COLORS[cell[COLOR]]} onClick={()=> props.onClick(props.row, props.col)}>{pawnDiv}</td>);
    } else {
      return (<td className={COLORS[cell[COLOR]]}>{pawnDiv}</td>);
    }
    // Home
    case HO:
    return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
    // Start
    case ST:
    if (pawnColor) {
      return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3" onClick={()=> props.onClick(props.row, props.col)}>{pawnDiv}</td>);
    } else {
      return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
    };
    // Blank
    case BK:
    return (<td className="blank"/>);
    // Hidden
    case HI:
    // Hidden cells are behind Home and Start cells. Do not render these.
    return null;
    default:
    return (<td/>);
  }
}

class GameBoard extends React.Component {

  constructor(players) {
    super(players);
    this.current = [];
    for (let row = 0; row < 16; row++) {
      let cols = [];
      for (let col = 0; col < 16; col++) {
        let pawns = [];
        for (let player of players) {
          for (let pawn of player.pawns) {
            if (pawn.row === row && pawn.col === col) {
              pawns.push(pawn);
              console.log("Pawn @ " + row + "," + col);
            }
          }
        }
        cols.push(pawns);
      }
      this.current.push(cols);
    }
    console.log(this.current);
  }

  handleClick(row, col){
    let newGameState = new GameState(this.state.gameState);
    console.log(row + "," + col);
    newGameState.advancePawn(row, col, 1);
    this.setState({
      gameState: newGameState,
    })
  }

  render() {
  }

}

ReactDOM.render(
  <GameState />,
  document.getElementById('root')
);

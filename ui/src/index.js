import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TYPE = 0;
const SP = 0; //Normal Space
const ST = 1; //Start Space
const S3 = 2; //Slide Three Spaces
const S5 = 3; //Slide Two Spaces
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


class GameState {

  constructor(copy) {
    if (copy) {
      this.players = copy.players.slice();
    } else {
      this.players = [];
      this.players[YE] = [{row: 1,  col: 3 }, {row: 1,  col: 3 }, {row: 1,  col: 3 }, {row: 1,  col: 3 }];
      this.players[GR] = [{row: 3,  col: 12}, {row: 3,  col: 12}, {row: 3,  col: 12}, {row: 3,  col: 12}];
      this.players[RD] = [{row: 12, col: 10}, {row: 12, col: 10}, {row: 12, col: 10}, {row: 12, col: 10}];
      this.players[BL] = [{row: 10, col: 1 }, {row: 10, col: 1 }, {row: 10, col: 1 }, {row: 10, col: 1 }];
    }
  }

  getPawnDetails(row, col) {
    let color = null;
    let count = 0;
    for (let player in this.players) {
      for (let pawn of this.players[player]) {
        if (pawn.row === row && pawn.col === col) {
          count++;
          color = player;
        }
      }
    }
    return ({
      color: color,
      count: count,
    });
  }

  advancePawn(row, col, count) {

    if (count === 0 ){
      return;
    }

    let moveMade = false;
    for (let player = 0; player < this.players.length; player++) {
      for (let pawn of this.players[player]) {
        if (pawn.row === row && pawn.col === col) {
          // There is a pawn at this location
          let cell = boardLayout[row][col]

          if (cell[TYPE] === ST && cell[COLOR] === player) {
            // Pawn is in a Start Cell
            switch (player){
              case YE:
                row = 0;
                col = 4;
                break;
              case GR:
                row = 4;
                col = 15;
                break;
              case RD:
                row = 15;
                col = 11
                break;
              case BL:
                row = 11;
                col = 0;
                break;
            }
          } else if ( (
              cell[TYPE] === EN ||
              cell[TYPE] === SF )
              && cell[COLOR] === player) {
            // Pawn is at the entrance to or in a Safety Zone
            switch (player){
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
          } else if (cell[TYPE] === FS && cell[COLOR] === player) {
            // Pawn is in at the end of the Safety Zone
            switch (player){
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
          } else if (pawn.row === 0 && pawn.col < 15){
            // Yellow path
            col++;
          } else if (pawn.col === 15 && pawn.row < 15){
            // Green path
            row++;
          } else if (pawn.row === 15 && pawn.col > 0){
            // Red path
            col--;
          } else if (pawn.col === 0 && pawn.row > 0){
            // Blue path
            row--;
          }

          // In the case of a Start Space, there may be multiple pawns.
          // Do not handle more than one pawn.
          moveMade = true;
          pawn.col = col;
          pawn.row = row;
          count--;
          break;
        }
      }
      if (moveMade) break;
    }
    return this.advancePawn(row, col, count);
  }

}

function Square(props) {
  let cell = boardLayout[props.row][props.col];

  let pawnDiv = '';
  let pawnChars = '';
  let thisPawn = props.gameState.getPawnDetails(props.row, props.col);
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

  constructor(props) {
    super(props);
    this.state = {
      gameState : new GameState(),
    };
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
    //console.log(this.state.gameState);
    let rows = [];

    for (let row = 0; row < boardLayout.length; row++)
    {
      let cells = [];

      for (let col = 0; col < boardLayout[row].length; col++) {
        cells.push(<Square
          gameState={this.state.gameState}
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

ReactDOM.render(
  <GameBoard />,
  document.getElementById('root')
);

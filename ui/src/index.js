import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TYPE = 0;
const SP = 0; //Space
const SL = 1; //Slide
const SF = 2; //Safety
const HO = 3; //Home
const ST = 4; //Start
const BK = 5; //Blank
const HI = 6; //Hidden

const COLOR = 1;
const YE = 0; //Yellow
const GR = 1; //Green
const RD = 2; //Red
const BL = 3; //Blue
const COLORS = ['yellow', 'green', 'red', 'blue'];

const PAWNCHAR = '\u265F';

const boardLayout = [
  [[SP, YE], [SL, YE], [SL, YE], [SL, YE], [SL, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, YE], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [ST, YE], [HI, BK], [HI, BK], [BK, BK], [HO, GR], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, GR], [SF, GR], [SF, GR], [SF, GR], [SF, GR], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [ST, GR], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [SF, YE], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [HO, YE], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [ST, RD], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SP, GR]],
  [[SP, BL], [ST, BL], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [BK, BK], [HO, BL], [HI, BK], [HI, BK], [BK, BK], [HO, RD], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [SF, BL], [SF, BL], [SF, BL], [SF, BL], [SF, BL], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [BK, BK], [HI, BK], [HI, BK], [HI, BK], [SF, RD], [BK, BK], [SP, GR]],
  [[SP, BL], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD], [SP, RD]]
];

const STARTCELLS  = [{x: 1, y: 3}, {x: 3, y: 12}, {x: 12, y:10}, {x: 10, y: 1}];
const HOMECELLS   = [{x: 6,  y: 1}, {x: 1,  y: 7}, {x: 7,  y: 12}, {x: 12, y: 6}];
const ENTRANCES   = [{x: 0, y: 2}, {x:2, y: 15}, {x: 15, y: 13}, {x: 0, y: 13}];
const CORNERS     = [{x: 0, y: 0}, {x: 0, y:15}, {x:15, y: 15}, {x: 15, y: 0}];

class GameState {

  constructor(copy) {
    if (copy) {
      this.players = copy.players.slice();
    } else {
      this.players = [];
      this.players[YE] = [{x: 1, y: 3}, {x: 1, y: 3}, {x: 0, y: 0}];
      this.players[GR] = [{x: 0, y: 6}, {x: 3, y: 12}];
      this.players[RD] = [{x: 12, y:10}];
      this.players[BL] = [{x: 10, y: 1}];
    }
  }

  getPawnDetails(x, y) {
    let color = null;
    let count = 0;
    for (let player in this.players) {
      for (let pawn of this.players[player]) {
        if (pawn.x === x && pawn.y === y) {
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

  advancePawn(x, y) {

    for (let player = 0; player < this.players.length; player++) {
      for (let pawn of this.players[player]) {
        if (pawn.x === x && pawn.y === y) {

          // Check if a pawn is at the entrance to a Safety Zone
          if (pawn.x === ENTRANCES[player].x && pawn.y === ENTRANCES[player].y)
          {
            switch (player){
              case YE:
                pawn.x++;
                break;
              case GR:
                pawn.y--;
                break;
              case RD:
                pawn.x--;
                break;
              case BL:
                pawn.y++;
                break;
            }
          } else if (pawn.x === 0 && pawn.y < 15){
            pawn.y++;
          } else if (pawn.y === 15 && pawn.x < 15){
            pawn.x++;
          } else if (pawn.x === 15 && pawn.y > 0){
            pawn.y--;
          } else {
            pawn.x--;
          }

          break;  //only handle the first pawn in the Start space
        }
      }
    }
    return;
  }

}

function Square(props) {
  let cell = boardLayout[props.x][props.y];

  let pawnDiv = '';
  let pawnChars = '';
  let thisPawn = props.gameState.getPawnDetails(props.x, props.y);
  let pawnColor = COLORS[thisPawn.color];
  let pawnCount = thisPawn.count;
  if (pawnColor) {
    for (let i = 0; i < pawnCount; i++) {
      pawnChars += PAWNCHAR;
    }
      pawnDiv = (<div className={'pawn ' + pawnColor}>{pawnChars}</div>);
  }

  switch (cell[TYPE]) {
    case SP:
    case SL:
    case SF:
      if (pawnColor) {
        return (<td className={COLORS[cell[COLOR]]} onClick={()=> props.onClick(props.x, props.y)}>{pawnDiv}</td>);
      } else {
        return (<td className={COLORS[cell[COLOR]]}>{pawnDiv}</td>);
      }
    case HO:
      return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
    case ST:
      if (pawnColor) {
        return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3" onClick={()=> props.onClick(props.x, props.y)}>{pawnDiv}</td>);
      } else {
        return (<td className={COLORS[cell[COLOR]] + ' home'} colSpan = "3" rowSpan = "3">{pawnDiv}</td>);
      };
    case BK:
      return (<td className="blank"/>);
    case HI:
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

  handleClick(x, y){
    let newGameState = new GameState(this.state.gameState);
    newGameState.advancePawn(x, y);
    this.setState({
      gameState: newGameState,
    })
  }

  render() {
    //console.log(this.state.gameState);
    let rows = [];

    for (let x = 0; x < boardLayout.length; x++)
    {
      let cells = [];

      for (let y = 0; y < boardLayout[x].length; y++) {
        cells.push(<Square
          gameState={this.state.gameState}
          x={x}
          y={y}
          onClick={(x,y) => this.handleClick(x,y)}/>
          );
      }

      rows[x] = (<tr>{cells}</tr>);
    }

    return (<table><tbody>{rows}</tbody></table>);

  }

}

ReactDOM.render(
  <GameBoard />,
  document.getElementById('root')
);

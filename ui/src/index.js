import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const TYPE = 0;
const SP = 0; //Space
const SL = 1; //Slide
const SF = 2; //Safety
const HO = 3; //Home
const ST = 4; //Start
const BK = 5; //BKank
const HI = 6; //Hidden

const COLOR = 1;
const YE = 0; //Yellow
const GR = 1; //Green
const RD = 2; //Red
const BL = 3; //Blue
const colors = ['yellow', 'green', 'red', 'blue'];

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


function Square(props) {
  let cell = boardLayout[props.x][props.y];

  switch (cell[TYPE]) {
    case SP:
    case SL:
    case SF:
      return (<td className={colors[cell[COLOR]]} onClick={()=> props.onClick(props.x, props.y)}/>);
    case HO:
    case ST:
      return (<td className={colors[cell[COLOR]] + ' home'} colspan = "3" rowspan = "3" onClick={()=> props.onClick(props.x, props.y)}/>);
    case BK:
      return (<td className="blank"/>);
    case HI:
      return null;
    default:
      return (<td/>);
  }

}


class GameBoard extends React.Component {

  handleClick(x, y){
    alert('Click from ' + x + ', ' + y);
  }

  render() {

    let rows = [];

    for (let x = 0; x < boardLayout.length; x++)
    {
      let cells = [];

      for (let y = 0; y < boardLayout[x].length; y++) {
        cells.push(<Square
          x={x}
          y={y}
          onClick={(x,y) => this.handleClick(x,y)}/>
          );
      }

      rows[x] = (<tr>{cells}</tr>);
    }

    return (<table>{rows}</table>);

  }
}

ReactDOM.render(
  <GameBoard />,
  document.getElementById('root')
);

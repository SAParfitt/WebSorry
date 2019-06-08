import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const colors = ['yellow', 'green', 'red', 'blue'];
const symbols = ['&#x25b6;', '&#x25ad;', '&#x25ef;'];

function cell(color, symbol) {
  return {
    color: color,
    symbol: symbol,
  };
}

function safety(color) {
  return {
    color: color,
    safety: true,
  };
}

function home(color) {
  return {
    color: color,
    home: true,
  };
}

function start(color) {
  return {
    color: color,
    start: true,
  };
}

function space(length) {
  return {
    color: 'space',
    space: length,
  };
}

const boardLayout = [
  [cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(0), cell(1)],
  [cell(3), space(1), safety(0), start(0), space(1), home(1), space(5), cell(1)],
  [cell(3), space(1), safety(0), space(1), safety(1), safety(1), safety(1), safety(1), safety(1), cell(1)],
  [cell(3), space(1), safety(0), space(1), space(2), start(1), cell(1)],
  [cell(3), space(1), safety(0), space(9), cell(1)],
  [cell(3), space(1), safety(0), space(9), cell(1)],
  [cell(3), home(0), space(11), cell(1)],
  [cell(3), space(8), home(2), cell(1)],
  [cell(3), space(8), cell(1)],
  [cell(3), space(11), cell(1)],
  [cell(3), start(3), space(9), cell(2), space(1), cell(1)],
  [cell(3), space(9), cell(2), space(1), cell(1)],
  [cell(3), space(2), home(3), space(1), start(2), cell(2), space(1), cell(1)],
  [cell(3), safety(3), safety(3), safety(3), safety(3), safety(3), space(1), safety(2), space(1), cell(1)],
  [cell(3), space(5), space(1), safety(2), space(1), cell(1)],
  [cell(3), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2), cell(2)]

];


function Square(props) {
  let info = boardLayout[props.x][props.y];

  if (info.space) {
    return (<td className="space" colspan={info.space}/>);
  } else if (info.start || info.home) {
    return (<td className={colors[info.color] + ' home'} colspan="3" rowspan="3" onClick={()=> props.onClick(props.x, props.y)} />);
  } else {
    return (<td className={colors[info.color]} onClick={()=> props.onClick(props.x, props.y)} />);
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

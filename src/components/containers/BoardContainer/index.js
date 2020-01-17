import React from "react";
import Pawn from '../../Piece/Pawn';
import { COLS, ROWS, INITIAL_COORDS, PIECES, TURNS } from '../../constants';
import Lance from '../../Piece/Lance';
import Knight from '../../Piece/Knight';
import Silver from '../../Piece/Silver';
import Golden from '../../Piece/Golden';
import King from '../../Piece/King';
import Rook from '../../Piece/Rook';
import Bishop from '../../Piece/Bishop';
import Board from '../../Board';
import { Container } from 'react-bootstrap';
import Blank from '../../Blank/Blank';

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieces: this.initialDisposition(),
    }
  }

  initialDisposition(){
    let pieces = {};
    // Filling the object with empty components
    COLS.forEach((col, col_index) => {
      pieces[col_index] = [];
      ROWS.forEach((row, row_index) => {
          pieces[col_index].push(  <Blank/>);
      });
    });
    // Generating the components for every piece based on the initial distribution on the board
    for( const turn in TURNS){
      Object.keys(INITIAL_COORDS[turn]).forEach( (key) => {
        INITIAL_COORDS[turn][key].forEach((piece_i) => {
          pieces[piece_i[0]][piece_i[1]] = this.getPieceComponent(key, turn);
        })
      });
    }
    return pieces;
  }
  getPieceComponent(piece, side) {
    switch(piece){
      case PIECES.pawn:
        return <Pawn side={side}/>;
      case PIECES.lance:
        return <Lance side={side}/>;
      case PIECES.knight:
        return <Knight side={side}/>;
      case PIECES.silver:
        return <Silver side={side}/>;
      case PIECES.golden:
        return <Golden side={side}/>;
      case PIECES.king:
        return <King side={side}/>;
      case PIECES.rook:
        return <Rook side={side}/>;
      case PIECES.bishop:
        return <Bishop side={side}/>;
      default:
        return <></>;
    }
  }
  onClick = (piece) => {
    console.log(piece);
  };
  render() {
    const {pieces} = this.state;
    return(
      < Container>
        <Board pieces={pieces} className={"boardContainer"} onClick={this.onClick}/>
      </Container>
    )
  }
}

export default BoardContainer;

import React from "react";
import Square from '../Square';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { COLS, ROWS } from '../constants';
import uuid from 'uuid/v4';
import getInitialPiecesDisposition from '../../helpers/getInitialPiecesDisposition';
import getHighlightedIndexes from '../../helpers/getHighlightedIndexes';
import Blank from '../Blank/Blank';
import buildPieceObject from '../../helpers/buildPieceObject';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.removeHighlighted = this.removeHighlighted.bind(this);
    this.state = {
      pieces: getInitialPiecesDisposition(),
      selected: {},
      indexes: [],
    }
  }

/*  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setState({
      pieces: this.props.pieces,
    });
  }*/

  removeHighlighted = (pieces) => {
    return Object.keys(pieces).map((piece_i) => {
      //Getting only highlighted
      const highlighted = pieces[piece_i].filter( p => p.isHighlight);
      // Removing highlighted
      highlighted.map( h => h.isHighlight = false);
      return pieces[piece_i];
    });
  };

  onClick = (piece) => {
    const {selected, pieces} = this.state;
    // If there is no piece selected or if we select another one-> first click
    if( Object.keys(selected).length === 0 || selected.ref.current.props.side === piece.ref.current.props.side){
      const new_pieces = this.removeHighlighted(pieces);
      const indexes = getHighlightedIndexes(new_pieces, piece);
      indexes.map((index) => {
        new_pieces[index[0]][index[1]].isHighlight = true;
      });
      this.setState({pieces: new_pieces, selected: piece, indexes});
    }
    else{
      const {selected, pieces, indexes} = this.state;
      let pieceToChange = pieces[piece.position[0]][piece.position[1]];
      const isValidIndex = indexes.some( i =>i[0] === piece.position[0] && i[1] === piece.position[1]);
      // Update only if the movement is valid
      if( pieceToChange.isHighlight && isValidIndex){
        //Set the selected piece in the new position
        pieces[piece.position[0]][piece.position[1]] = selected;
        //Remove the piece from the previous position
        pieces[selected.position[0]][selected.position[1]] =
          buildPieceObject(<Blank/>, selected.position[0], selected.position[1], true);
        const new_pieces = this.removeHighlighted(pieces);
        this.setState({pieces: new_pieces, selected: {}, indexes: []});
      }
    }
  };

  render() {

    const { pieces } = this.state;
    return (
      <Container>
        <div className="board">
          <Row className="colIndex">
            {
              COLS.map((col, i) => {
                  return <Col key={uuid()}>{col}</Col>
                }
              )
            }
          </Row>
          {
            Object.keys(pieces).map((piece_i, i) => {
              return (
                <>
                  <Row key={uuid()}>
                    <span className="rowIndex" key={uuid()}>{ROWS[i]}</span>
                    {
                      pieces[piece_i].map((piece) => {
                          return <Square piece={piece} onClick={this.onClick} key={uuid()}/>
                        }
                      )
                    }
                  </Row>
                </>
              )

            })
          }
        </div>
      </Container>
    );
  }
}

export default Board;

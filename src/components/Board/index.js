import React from "react";
import Square from '../Square';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { COLS, ROWS } from '../constants';
import uuid from 'uuid/v4';
import getInitialPiecesDisposition from '../../helpers/getInitialPiecesDisposition';
import getValidPositions from '../../helpers/getValidPositions';
import Blank from '../Blank/Blank';
import buildPieceObject from '../../helpers/buildPieceObject';
import PropTypes from 'react-proptypes';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.removeHighlighted = this.removeHighlighted.bind(this);
    this.pieceSelected = this.pieceSelected.bind(this);
    this.movePiece = this.movePiece.bind(this);
    this.state = {
      pieces: getInitialPiecesDisposition(),
      selected: {},
      indexes: [],
    }
  }

  onClick = (piece) => {
    const { selected, pieces, indexes } = this.state;
    // If there is no piece selected or if we select another one-> first click
    if (Object.keys(selected).length === 0) {
      this.pieceSelected(piece);
    } else {
      let pieceToChange = pieces[piece.position[0]][piece.position[1]];
      const isValidIndex = indexes.some(i => i[0] === piece.position[0] && i[1] === piece.position[1]);
      // Move the piece if it's a valid movement
      if (pieceToChange.isHighlight && isValidIndex) {
        this.movePiece(piece);
      }
      //If the square selected is empty and it's not a valid movement -> remove selection
      else if (piece.isEmpty) {
        const new_pieces = this.removeHighlighted(pieces);
        this.setState({ pieces: new_pieces, selected: {}, indexes: [] });
      }
      // In other case another piece is being selected
      else {
        this.pieceSelected(piece);
      }
    }
  };

  movePiece = (piece) => {
    const { pieces, selected } = this.state;
    const { switchTurn } = this.props;
    const previousPosition = selected.position;
    const newPosition = piece.position;
    //Set the selected piece in the new position
    selected.position = newPosition;
    pieces[newPosition[0]][newPosition[1]] = selected;
    //Set the new position empty
    pieces[previousPosition[0]][previousPosition[1]] =
      buildPieceObject(<Blank/>, previousPosition[0], previousPosition[1], null, true);
    const new_pieces = this.removeHighlighted(pieces);
    switchTurn();
    this.setState({ pieces: new_pieces, selected: {}, indexes: [] });
  };

  pieceSelected = (piece) => {
    const { turn } = this.props;
    if (piece.ref && piece.ref.current.props.side === turn) {
      const { pieces } = this.state;
      const new_pieces = this.removeHighlighted(pieces);
      const indexes = getValidPositions(new_pieces, piece);
      indexes.map((index) => (new_pieces[index[0]][index[1]].isHighlight = true));
      this.setState({ pieces: new_pieces, selected: piece, indexes });
    }
  };

  removeHighlighted = (pieces) => {
    return Object.keys(pieces).map((piece_i) => {
      //Getting only highlighted
      const highlighted = pieces[piece_i].filter(p => p.isHighlight);
      // Removing highlighted
      highlighted.map(h => h.isHighlight = false);
      return pieces[piece_i];
    });
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

Board.propTypes = {
  turn: PropTypes.string.isRequired,
  switchTurn: PropTypes.func,
};
Board.defaultProps = {
  switchTurn: () => {
  },
};
export default Board;

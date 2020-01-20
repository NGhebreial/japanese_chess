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
import canBePromoted from '../../helpers/canBePromoted';
import Promote from '../Promote';
import getPieceComponent from '../../helpers/getComponentByPiece';
import shouldBePromoted from '../../helpers/shouldBePromoted';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.removeHighlighted = this.removeHighlighted.bind(this);
    this.pieceSelected = this.pieceSelected.bind(this);
    this.movePiece = this.movePiece.bind(this);
    this.checkPromotable = this.checkPromotable.bind(this);
    this.promotePiece = this.promotePiece.bind(this);
    this.finishTurn = this.finishTurn.bind(this);
    this.state = {
      pieces: getInitialPiecesDisposition(),
      selected: {},
      indexes: [],
      isPromotable: false,
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
    const previousPosition = selected.position;
    const newPosition = piece.position;
    //Set the selected piece in the new position
    selected.position = newPosition;
    pieces[newPosition[0]][newPosition[1]] = selected;
    //Set the new position empty
    pieces[previousPosition[0]][previousPosition[1]] =
      buildPieceObject(<Blank/>, previousPosition[0], previousPosition[1], null, true);
    this.checkPromotable(selected, previousPosition, this.removeHighlighted(pieces));
  };

  pieceSelected = (piece) => {
    const { turn } = this.props;

    if (piece.ref && piece.ref.current.props.side === turn) {
      const { pieces } = this.state;
      const newPieces = this.removeHighlighted(pieces);
      const indexes = getValidPositions(newPieces, piece);
      indexes.map((index) => (newPieces[index[0]][index[1]].isHighlight = true));
      this.setState({ pieces: newPieces, selected: piece, indexes });
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

  checkPromotable = (piece, previousPosition, pieces) => {
    const isPromotable = canBePromoted(piece, previousPosition);
    if (isPromotable) {
      // If it's promotable check if it should be because doesn't have more movements
      if (shouldBePromoted(piece))
        this.promotePiece();
      else {
        this.setState({ pieces, indexes: [], isPromotable });
      }
    } else {
      this.finishTurn(pieces);
    }
  };

  promotePiece = () => {
    const { pieces, selected } = this.state;
    selected.component = getPieceComponent(selected.ref.current.name(),
      selected.ref.current.props.side,
      selected.ref,
      true);
    pieces[selected.position[0]][selected.position[1]] = selected;
    this.finishTurn(pieces);
  };

  finishTurn = (pieces) => {
    const { switchTurn } = this.props;
    const newPieces = pieces === null ? this.state.pieces : pieces;
    this.setState({ selected: {}, indexes: [], isPromotable: false, newPieces });
    switchTurn();
  };

  render() {

    const { pieces, isPromotable } = this.state;
    return (
      <>
        {
          isPromotable &&
          <Promote promotePiece={this.promotePiece} finishTurn={this.finishTurn}/>
        }
        <Container style={{ marginTop: isPromotable ? '-39%' : '0' }}>
          <div className="side-white-indicator"/>
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
          <div className="side-black-indicator"/>
        </Container>
      </>
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

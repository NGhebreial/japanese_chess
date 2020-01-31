import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PropTypes from 'react-proptypes';
import Square from '../Square';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { COLS, ROWS } from '../constants';
import getInitialPiecesDisposition from '../../helpers/getInitialPiecesDisposition';
import getValidPositions from '../../helpers/getValidPositions';
import buildPieceObject from '../../helpers/buildPieceObject';
import canBePromoted from '../../helpers/canBePromoted';
import Promote from '../Promote';
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
    };
  }

  onClick = (piece) => {
    const { selected, pieces, indexes } = this.state;
    // If there is no piece selected or if we select another one-> first click
    if (Object.keys(selected).length === 0) {
      this.pieceSelected(piece);
    } else {
      const pieceToChange = pieces[piece.position[0]][piece.position[1]];
      const isValidIndex = indexes.some((i) => i[0] === piece.position[0] && i[1] === piece.position[1]);
      // Move the piece if it's a valid movement
      if (pieceToChange.isHighlight && isValidIndex) {
        this.movePiece(piece);
      }
      // If the square selected is empty and it's not a valid movement -> remove selection
      else if (piece.isEmpty) {
        const newPieces = this.removeHighlighted(pieces);
        this.setState({ pieces: newPieces, selected: {}, indexes: [] });
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
    // Set the selected piece in the new position
    selected.position = newPosition;
    pieces[newPosition[0]][newPosition[1]] = selected;
    // Set the new position empty
    pieces[previousPosition[0]][previousPosition[1]] = buildPieceObject(piece.id,
      '',
      '',
      false,
      previousPosition[0],
      previousPosition[1],
      true);
    this.checkPromotable(selected, previousPosition, this.removeHighlighted(pieces));
  };

  pieceSelected = (piece) => {
    const { turn } = this.props;

    if (piece.side === turn) {
      const { pieces } = this.state;
      const newPieces = this.removeHighlighted(pieces);
      const indexes = getValidPositions(newPieces, piece);
      indexes.map((index) => (newPieces[index[0]][index[1]].isHighlight = true));
      this.setState({ pieces: newPieces, selected: piece, indexes });
    }
  };

  removeHighlighted = (pieces) => Object.keys(pieces).map((pieceIndex) => {
    // Getting only highlighted
    const highlighted = pieces[pieceIndex].filter((p) => p.isHighlight);
    // Removing highlighted
    highlighted.map((h) => h.isHighlight = false);
    return pieces[pieceIndex];
  });

  checkPromotable = (piece, previousPosition, pieces) => {
    const isPromotable = canBePromoted(piece, previousPosition);
    if (isPromotable && !piece.isPromoted) {
      // If it's promotable check if it should be because doesn't have more movements
      if (shouldBePromoted(piece)) this.promotePiece();
      else {
        this.setState({ pieces, indexes: [], isPromotable });
      }
    } else {
      this.finishTurn(pieces);
    }
  };

  promotePiece = () => {
    const { pieces, selected } = this.state;
    selected.isPromoted = true;
    pieces[selected.position[0]][selected.position[1]] = selected;
    this.finishTurn(pieces);
  };

  finishTurn = (pieces) => {
    const { switchTurn } = this.props;
    const { pieces: piecesState } = this.state;
    const newPieces = pieces === null ? piecesState : pieces;
    this.setState({
      selected: {},
      indexes: [],
      isPromotable: false,
      pieces: newPieces,
    });
    switchTurn();
  };

  render() {
    const { pieces, isPromotable } = this.state;
    return (
      <>
        {
          isPromotable
          && <Promote promotePiece={this.promotePiece} finishTurn={this.finishTurn} />
        }
        <Container style={{ marginTop: isPromotable ? '-39%' : '0' }}>
          <div className="side-white-indicator" />
          <div className="board">
            <Row className="colIndex">
              {
                COLS.map((col) => <Col key={col}>{col}</Col>)
              }
            </Row>
            {
              Object.keys(pieces).map((pieceIndex, i) => (
                <div key={ROWS[i]}>
                  <Row>
                    <span className="rowIndex">{ROWS[i]}</span>
                    {
                      pieces[pieceIndex].map((piece) => (
                        <Square
                          piece={piece}
                          onClick={this.onClick}
                          key={piece.id}
                        />
                      ))
                    }

                  </Row>
                </div>
              ))
            }

          </div>
          <div className="side-black-indicator" />
        </Container>
      </>
    );
  }
}

Board.propTypes = {
  turn: PropTypes.string.isRequired,
  switchTurn: PropTypes.func.isRequired,
};

export default Board;

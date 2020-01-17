import React from "react";
import Square from '../Square';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { COLS, ROWS } from '../constants';
import uuid from 'uuid/v4';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pieces: {}
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.setState({
      pieces: this.props.pieces,
    });
  }

  render() {

    const { onClick, pieces } = this.props;
    return (
      <div className="board">
        <Row className="colIndex">
        {
          COLS.map((col, i) =>{
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
                <span className="rowIndex">{ROWS[i]}</span>
                {
                  pieces[piece_i].map((piece) =>
                    {
                      return <Square piece={piece} onClick={onClick} key={uuid()}/>
                    }
                  )
                }
              </Row>
              </>
            )

          })
        }
      </div>
    );
  }
}

export default Board;

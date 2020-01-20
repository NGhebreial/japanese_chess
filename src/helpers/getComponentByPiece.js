import { PIECES } from '../components/constants';
import Pawn from '../components/Piece/Pawn';
import Lance from '../components/Piece/Lance';
import Knight from '../components/Piece/Knight';
import Silver from '../components/Piece/Silver';
import Golden from '../components/Piece/Golden';
import King from '../components/Piece/King';
import Rook from '../components/Piece/Rook';
import Bishop from '../components/Piece/Bishop';
import React from 'react';

const getPieceComponent = (piece, side, ref, isPromoted = false) => {
  switch (piece) {
    case PIECES.pawn:
      return <Pawn side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.lance:
      return <Lance side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.knight:
      return <Knight side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.silver:
      return <Silver side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.golden:
      return <Golden side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.king:
      return <King side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.rook:
      return <Rook side={side} ref={ref} isPromoted={isPromoted}/>;
    case PIECES.bishop:
      return <Bishop side={side} ref={ref} isPromoted={isPromoted}/>;
    default:
      return <></>;
  }
};

export default getPieceComponent;

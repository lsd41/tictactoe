import React, {FC, useState} from 'react';
import Board from '../components/Board';

const BoardGame : FC = () => {
    const [game, setGame] = useState({
          squares : ['','','','','','','','',''], 
          xIsNext : true
        });

    const handleClick = (i : number) => {
        const squares = game.squares.slice();
        if ('' === squares[i] )
        {
            squares[i] = game.xIsNext ? 'X' : 'O';
            setGame({
            squares : squares,
            xIsNext : !game.xIsNext
            } );
        }
      }
    
    return (
        <Board squares={game.squares} handleClick={handleClick} xIsNext={game.xIsNext} />
      );
} 
export default BoardGame;
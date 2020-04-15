import React, {FC} from 'react';

interface SquareProps {
    value   : string;
    onClick : () => void;
}

const Square : FC<SquareProps> = (props : SquareProps) => {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square;
import React, { useState } from "react";
import './Board.css';
import Coin from './Coin.js';

const Board = () => {

  function flipCoin() {
    if (Math.random() > 0.5) {
      return "heads";
    } else {
      return "tails";
    }
  }

  const [side, setSide] = useState(null);
  const [total, setTotal] = useState(0);
  const [headCt, setHeadCt] = useState(0);
  const [tailCt, setTailCt] = useState(0);

  const handleClick = () => {
    const newFlip = flipCoin();
    setSide(newFlip);

    setTotal(total + 1);
    // if (side === 'heads') {
    if (newFlip === 'heads') {
      setHeadCt(headCt + 1);
    } else {
      setTailCt(tailCt + 1);
    }
  }

  const CoinEle = side ? <Coin side={side} /> : null;

  return (
    <div className="Board">
      <h1 className="Board-title">Let's flip a coin!</h1>

      {CoinEle}

      <button className="Board-btn" onClick={handleClick}>Flip a coin</button>

      <h3 className="Board-count">
        Out of {total} flips, there have been {headCt} heads and {tailCt} tails.
      </h3>
    </div>
  )
}

export default Board;
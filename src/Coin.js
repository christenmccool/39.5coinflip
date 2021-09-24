import './Coin.css';
import tailsImage from './tails.png';
import headsImage from './heads.png';

const Coin = (props) => {

  const image = props.side === "heads" ? headsImage : tailsImage;

  return (
    <div className="Coin">
      <img src={image} alt={`${props.side}`} className="Coin-image" />
    </div>
  )
}

export default Coin;
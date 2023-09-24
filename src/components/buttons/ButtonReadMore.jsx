import arrow from "../../assets/icon/arrow.svg";
import "./buttonReadMore.scss";
const ButtonReadMore = ({ style }) => {
  return (
    <button style={style} className="buttonReadMore">
      <p>Read more</p> <img src={arrow} alt="arrow" />
    </button>
  );
};

export default ButtonReadMore;

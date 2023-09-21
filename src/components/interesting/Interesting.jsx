import butterfly from "../../assets/img/butterfly.png";
import guitar from "../../assets/img/guitar.png";
import man2 from "../../assets/img/man2.png";
import image176 from "../../assets/img/image176.png";

import "./interesting.scss";
const Interesting = () => {
  return (
    <div className="container">
      <div className="interesting">
        <div className="interesting__item">
          <div className="interesting__title">
            25 Songs That Tell Us Where Music Is Going
          </div>
          <img src={guitar} alt="" className="interesting__img" />
        </div>
        <div className="interesting__item">
          <div className="interesting__title">
            These Ancient Assassins Eat Their Own Kind
          </div>
          <img src={butterfly} alt="" className="interesting__img" />
        </div>
        <div className="interesting__item">
          <div className="interesting__title">
            How Do You Teach People to Love Difficult Music?
          </div>
          <img src={man2} alt="" className="interesting__img" />
        </div>
        <div className="interesting__item">
          <div className="interesting__title">
            International Soccer’s Man of Mystery
          </div>
          <img src={image176} alt="" className="interesting__img" />
        </div>
      </div>
      <div className="interesting__recommended">
        <img src="" alt="nature" className="interesting__mainBg" />
        <img src="" alt="author" className="interesting__author" />
        <p>Destinations</p>
      </div>
    </div>
  );
};

export default Interesting;

import Recomended2 from "../recomended/Recomended2";
import interesting3Img1 from "../../assets/img/interesting3Img1.png";
import bookmark from "../../assets/icon/bookmark.svg";
import heartGrey from "../../assets/icon/heartGrey.svg";
import comment from "../../assets/icon/comment.svg";

import "./interesting3.scss";
const Interesting3 = () => {
  return (
    <section style={{ marginTop: "60px" }} className="interesting3 container">
      <div className="interesting3__wrapp ">
        <div className="interesting3__item">
          <img src={interesting3Img1} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 className="interesting3__title">Flights</h3>
            <h3 className="interesting3__subtitle">
              Passengers Suffer as Crowded Field Puts Pressure on Europe’s
              Airlines
            </h3>
            <p className="interesting3__descr">
              Weaker carriers have fallen by the wayside amid fierce
              competition, while others have been hit by bad luck. The result:
              thousands of canceled flights.
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Aug 6</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">342</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">830</p>
            </div>
          </div>
          <img
            src={bookmark}
            alt="bookmark"
            className="interesting3__imgBookmark"
          />
        </div>
      </div>
      {/* ________________________________ */}
      <Recomended2 />
    </section>
  );
};

export default Interesting3;

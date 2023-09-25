import Recomended2 from "../recomended/Recomended2";
import interesting3Img1 from "../../assets/img/interesting3Img1.png";
import interesting3Img2 from "../../assets/img/interesting3Img2.png";
import interesting3Img3 from "../../assets/img/interesting3Img3.png";
import interesting3Img4 from "../../assets/img/interesting3Img4.png";
import interesting3Img5 from "../../assets/img/interesting3Img5.png";
import interesting3Img6 from "../../assets/img/interesting3Img6.png";
import bookmark from "../../assets/icon/bookmark.svg";
import bookmarkRed from "../../assets/icon/bookmarkRed.svg";
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
        <div className="interesting3__item">
          <img src={interesting3Img2} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 style={{ color: "#3BBDC4" }} className="interesting3__title">
              Food
            </h3>
            <h3 className="interesting3__subtitle">
              Three Courses, 20 Euros: The Affordable Dining Renaissance in
              Paris
            </h3>
            <p className="interesting3__descr">
              The Los Angeles area, for all of its culinary diversity, has not
              historically been thought of as a haven for bread lovers. The area
              has a reputation as a place where gluten fears to tread.
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Oct 7</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">27</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">129</p>
            </div>
          </div>
          <img
            src={bookmarkRed}
            alt="bookmark"
            className="interesting3__imgBookmark"
          />
        </div>
        <div className="interesting3__item">
          <img src={interesting3Img3} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 style={{ color: "#FF4F52" }} className="interesting3__title">
              Science
            </h3>
            <h3 className="interesting3__subtitle">
              Watch the High-Flying Physics of a Plant’s Exploding Fruits
            </h3>
            <p className="interesting3__descr">
              Three undergradute physics majors and their professor worked
              out how the hairyflower wild petunia shoots tiny seeds more than
              20 feet through the air
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Oct 11</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">30</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">284</p>
            </div>
          </div>
          <img
            src={bookmark}
            alt="bookmark"
            className="interesting3__imgBookmark"
          />
        </div>
        <div className="interesting3__item">
          <img src={interesting3Img4} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 sthle={{ color: "#3BBDC4" }} className="interesting3__title">
              Health
            </h3>
            <h3 className="interesting3__subtitle">
              How the Shape of Your Ears Affects What You Hear
            </h3>
            <p className="interesting3__descr">
              We’re able to locate sound because our brains grasp the shape
              of our ears. When that shape changes, we need time and practice
              to adapt. Ears are a peculiarly individual piece of anatomy.
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Oct 19</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">102</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">1,293</p>
            </div>
          </div>
          <img
            src={bookmark}
            alt="bookmark"
            className="interesting3__imgBookmark"
          />
        </div>
        <div className="interesting3__item">
          <img src={interesting3Img5} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 style={{ color: "#FF4F52" }} className="interesting3__title">
              Science
            </h3>
            <h3 className="interesting3__subtitle">
              Forests Protect the Climate. A Future With More Storms Would Mean
              Trouble.
            </h3>
            <p className="interesting3__descr">
              With an increase in extreme weather expected in the years to come,
              forests could be changed permanently as the world continues
              to warm
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Oct 22</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">5</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">82</p>
            </div>
          </div>
          <img
            src={bookmark}
            alt="bookmark"
            className="interesting3__imgBookmark"
          />
        </div>
        <div className="interesting3__item">
          <img src={interesting3Img6} alt="" className="interesting3__img" />
          <div className="interesting3__wrappText">
            <h3 style={{ color: "#AC8EE3" }} className="interesting3__title">
              Art & Design
            </h3>
            <h3 className="interesting3__subtitle">
              New Contemporary Institute Reverberates in Richmond’s Historic
              Landscape
            </h3>
            <p className="interesting3__descr">
              The center, which will open in April, takes a bold look at race
              and other social issues that still resonate in the region as well
              as the nation. A new Institute for Contemporary Art is set to
              open.
            </p>
            <div className="interesting3__wrappData">
              <p className="interesting3__date">Oct 26</p>
              <img
                src={comment}
                alt="message"
                className="interesting3__imgMessage"
              />
              <p className="interesting3__countMessages">101</p>
              <img
                src={heartGrey}
                alt="heart"
                className="interesting3__imgHeart"
              />
              <p className="interesting3__countHeart">432</p>
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

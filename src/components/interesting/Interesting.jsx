import butterfly from "../../assets/img/butterfly.png";
import guitar from "../../assets/img/guitar.png";
import man2 from "../../assets/img/man2.png";
import image176 from "../../assets/img/image176.png";
import arrow from "../../assets/icon/arrow.svg";
import play from "../../assets/icon/play.svg";
import playMini from "../../assets/icon/playMini.svg";
import nature from "../../assets/img/nature.png";
import man3 from "../../assets/img/man3.svg";

import "./interesting.scss";

const Interesting = () => {
  return (
    <div className="interesting">
      <div className="container">
        <div className="interesting__wrappItem">
          <div className="interesting__item">
            <div className="interesting__itemTitle">
              25 Songs That Tell Us Where Music Is Going
            </div>
            <img src={guitar} alt="" className="interesting__img" />
          </div>
          <div className="interesting__item">
            <div className="interesting__itemTitle">
              These Ancient Assassins Eat Their Own Kind
            </div>
            <img src={butterfly} alt="" className="interesting__img" />
          </div>
          <div className="interesting__item">
            <div className="interesting__itemTitle">
              How Do You Teach People to Love Difficult Music?
            </div>
            <img src={man2} alt="" className="interesting__img" />
          </div>
          <div className="interesting__item">
            <div className="interesting__itemTitle">
              International Soccer’s Man of Mystery
            </div>
            <img src={image176} alt="" className="interesting__img" />
          </div>
        </div>
        <div className="interesting__recommended">
          <div className="interesting__wrappMainImg">
            <img src={nature} alt="nature" className="interesting__imgNature" />
            <div className="interesting__authorWrapp">
              <img src={man3} alt="author" className="interesting__imgAuthor" />
              <div className="interesting__authorTitle">
                <p>By Benjamin Turner</p>
                <p>Traveler</p>
              </div>
            </div>
            <p className="interesting__destinations">Destinations</p>
            <h3 className="interesting__title">
              In Southeast England, White Cliffs and Fish
            </h3>
            <div className="interesting__wrappButton">
              <button className="interesting__readMore">
                <p>Read more</p> <img src={arrow} alt="arrow" />
              </button>
              <button className="interesting__play">
                <img src={play} alt="paly" />
              </button>
              <div className="interesting__wrappPlay">
                <p className="interesting__playTitle">
                  The chalk cliff of Beachy Head
                </p>
                <p className="interesting__playTime">18:05</p>
              </div>
            </div>
          </div>
          {/* Section forYou */}
          <div className="interesting__forYou">
            <h3 className="interesting__recommendedForYou">
              Recommended for you
            </h3>
            <div className="interesting__recommendedItem">
              <p className="interesting__titleRecomended">Food</p>
              <div className="interesting__descr">
                For Chicken-Fried Steak, Too Much Is Just Enough
              </div>
              <img src={playMini} alt="play" />
            </div>
            <div className="interesting__recommendedItem">
              <p
                style={{ color: "#6E99AE" }}
                className="interesting__titleRecomended"
              >
                Cars
              </p>
              <div className="interesting__descr">
                Storm Has Car Dealers Doing Swift Business
              </div>
            </div>
            <div className="interesting__recommendedItem">
              <p
                style={{ color: "#AC8EE3" }}
                className="interesting__titleRecomended"
              >
                Movies
              </p>
              <div className="interesting__descr">
                War Is Hell? In New Military Dramas, It’s One-Dimensional
              </div>
            </div>
            <div className="interesting__recommendedItem">
              <p
                style={{ color: "#FFA34D" }}
                className="interesting__titleRecomended"
              >
                NFL
              </p>
              <div className="interesting__descr">
                11 surprising stat rankings for active NFL players
                <img
                  className="interesting__imgDescr"
                  src={playMini}
                  alt="play"
                />
              </div>
            </div>
            <div className="interesting__recommendedItem">
              <p
                style={{ color: "#3DC47E" }}
                className="interesting__titleRecomended"
              >
                Tech Reviews
              </p>
              <div className="interesting__descr">
                The bookcases you can buy online and assemble yourself
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interesting;

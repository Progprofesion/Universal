import car from "../../assets/img/car.png";
import authorCar from "../../assets/icon/authorCar.svg";
import comment from "../../assets/icon/comment.svg";
import cat from "../../assets/img/cat.png";
import avatarBig from "../../assets/icon/avatarBig.svg";
import heart from "../../assets/icon/heart.svg";
import authorColums1 from "../../assets/icon/authorColumns1.svg";
import authorColums2 from "../../assets/icon/authorColumns2.svg";
import authorColums3 from "../../assets/icon/authorColumns3.svg";

import "./interesting2.scss";

const Interesting2 = () => {
  return (
    <section style={{ marginTop: "30px" }} className="interesting2 container">
      <div className="interesting2__grid">
        <div className="interesting2__item1">
          <img src={car} alt="car" className="interesting2__item1__carImg" />
          <p className="interesting2__item1__title">Cars</p>
          <h3 className="interesting2__item1__mainTitle">
            The joy of replicas: A $ 5 million car for $ 50,000
          </h3>
          <p className="interesting2__item1__descr fs-14">
            The 31-year-old self-taught engineer and former amateur racer spends
            his days building artful recreations of one of most iconic sports
            cars
          </p>
          <div className="interesting2__item1__wrappAuthor">
            <img
              src={authorCar}
              alt="avatar"
              className="interesting2__item1__authorImg"
            />
            <p className="interesting2__item1__name">Jessica Miller:</p>
            <p className="interesting2__item1__text fs-14">
              Even as the ride-hailing service’s future remem…
            </p>
            <img
              src={comment}
              alt="message"
              className="interesting2__item1__iconMessage"
            />
            <p className="interesting2__item1__messageCount">342</p>
          </div>
        </div>
        <div className="interesting2__item3">
          <div className="interesting2__item3__popular">Popular</div>
          <h3 className="interesting2__item3__titlePopular">Art & Design</h3>
          <h4 className="interesting2__item3__subtitlePopular">
            Invisible ink: the weird world of tattoo removal – in pictures
          </h4>
          <div className="interesting2__item3__wrappAuthor">
            <img
              src={avatarBig}
              alt="avatar"
              className="interesting2__item3__avatar"
            />
            <div className="interesting2__item3__wrappName">
              <p className="interesting2__item3__name">By Sarah Jenkins</p>
              <div className="interesting2__item3__wrappData">
                <p className="interesting2__item3__date fs-12whiteOpacity">
                  Sept 26
                </p>
                <img
                  src={comment}
                  alt="message"
                  className="interesting2__item3__imgMessage"
                />
                <p className="fs-12whiteOpacity">16</p>
                <img
                  src={heart}
                  alt="heart"
                  className="interesting2__item3__imgHeart"
                />
                <p className="fs-12whiteOpacity">832</p>
              </div>
            </div>
          </div>
        </div>
        <div className="interesting2__item4">
          <img src={cat} alt="cat" className="interesting2__item4__img" />
          <h3 className="interesting2__item4__title fs-16">
            200+ Doomed Cats Saved From Euthanization
          </h3>
        </div>
        {/* ______________________________________________ */}
        <div className="interesting2__item5">
          <h3 className="interesting2__title fs-16">
            Is Coffee Bad for Bones?
          </h3>
          <p className="interesting2__subtitle fs-14">
            Coffee drinkers may excrete more calcium, but it doesn’t appear to
            weaken bones
          </p>
          <p className="interesting2__date fs-12">Oct 15</p>
        </div>
        <div className="interesting2__item6">
          <h3 className="interesting2__title fs-16">What We Manufacture</h3>
          <p className="interesting2__subtitle fs-14">
            A global history of the factory and the modern world that all should
            read
          </p>
          <p className="interesting2__date fs-12">Oct 14</p>
        </div>
        <div className="interesting2__item7">
          <h3 className="interesting2__title fs-16">
            A Treat for Lemon Lovers
          </h3>
          <p className="interesting2__subtitle fs-14">
            This tangerine, ginger and chocolate tart has verve, depth and a
            hint of spice
          </p>
          <p className="interesting2__date fs-12">Oct 13</p>
        </div>
        <div className="interesting2__item8">
          <h3 className="interesting2__title fs-16">It’s a Stressful World</h3>
          <p className="interesting2__subtitle fs-14">
            Can a cruise skeptic enjoy four days on the seas with his family and
            a bunch of princesses?
          </p>
          <p className="interesting2__date fs-12">Oct 14</p>
        </div>
      </div>
      <div className="interesting2__wrappColumns">
        <div className="interesting2__wrappColumns__title fs-14white">
          Columns
        </div>
        <div className="interesting2__wrappColumns__columns">
          <div className="interesting2__wrappColumns__column">
            <div className="interesting2__wrappColumns__subtitle fs-20White">
              Architecture is the thoughtful making of space
            </div>
            <div className="interesting2__wrappColumns__wrappAuthor">
              <img
                src={authorColums1}
                alt="author"
                className="interesting2__wrappColums__imgAuthor"
              />
              <div className="interesting2__wrappColumns__wrappName">
                <p className="interesting2__wrappColums__name">
                  David Williams
                </p>
                <p className="interesting2__wrappColums__post">Architect</p>
              </div>
            </div>
          </div>
          <div className="interesting2__wrappColumns__column">
            <div className="interesting2__wrappColumns__subtitle fs-20White">
              The details are not the details. They make the design.
            </div>
            <div className="interesting2__wrappColumns__wrappAuthor">
              <img
                src={authorColums2}
                alt="author"
                className="interesting2__wrappColums__imgAuthor"
              />
              <div className="interesting2__wrappColumns__wrappName">
                <p className="interesting2__wrappColums__name">
                  Alexandra Green
                </p>
                <p className="interesting2__wrappColums__post">
                  Interior designer
                </p>
              </div>
            </div>
          </div>
          <div className="interesting2__wrappColumns__column">
            <div className="interesting2__wrappColumns__subtitle fs-20White">
              Live life to the fullest, and focus on the positive
            </div>
            <div className="interesting2__wrappColumns__wrappAuthor">
              <img
                src={authorColums3}
                alt="author"
                className="interesting2__wrappColums__imgAuthor"
              />
              <div className="interesting2__wrappColumns__wrappName">
                <p className="interesting2__wrappColums__name">
                  Olivia Thompson
                </p>
                <p className="interesting2__wrappColums__post">Coacher</p>
              </div>
            </div>
          </div>
        </div>
        <p className="interesting2__wrappColumns__readMore fs-14white">
          Read more
        </p>
      </div>
    </section>
  );
};

export default Interesting2;

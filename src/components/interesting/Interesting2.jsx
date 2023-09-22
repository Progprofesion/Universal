import car from "../../assets/img/car.png";
import authorCar from "../../assets/icon/authorCar.svg";
import comment from "../../assets/icon/comment.svg";
import cat from "../../assets/img/cat.png";
import "./interesting2.scss";
const Interesting2 = () => {
  return (
    <section style={{ marginTop: "30px" }} className="interesting2 container">
      <div className="interesting2__item1">
        <img src={car} alt="car" className="interesting2__item1__carImg" />
        <p className="interesting2__item1__title">Cars</p>
        <h3 className="interesting2__item1__mainTitle">
          The joy of replicas: A $ 5 million car for $ 50,000
        </h3>
        <p className="interesting2__item1__descr fs-14">
          The 31-year-old self-taught engineer and former amateur racer spends
          his days building artful recreations of one of most iconic sports cars
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
        <div className="interesting2__popular">Popular</div>
        <h3 className="interesting2__titlePopular">Art & Design</h3>
        <h4 className="interesting2__subtitle">
          Invisible ink: the weird world of tattoo removal – in pictures
        </h4>
        <div className="interesting2__item3__wrappAuthor">
          <img src="" alt="avatar" className="interesting2__item3__avatar" />
          <div className="interesting2__item3__wrappName">
            <p className="interesting2__item3__name">By Sarah Jenkins</p>
            <div className="interesting2__item3__wrappData">
              <p className="interesting2__item3__date">Sept 26</p>
              <img
                src=""
                alt="message"
                className="interesting2__item3__imgMessage"
              />
              <p>16</p>
              <img
                src=""
                alt="heart"
                className="interesting2__item3__imgHeart"
              />
              <p>832</p>
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
        <h3 className="interesting2__title fs-16">Is Coffee Bad for Bones?</h3>
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
        <h3 className="interesting2__title fs-16">A Treat for Lemon Lovers</h3>
        <p className="interesting2__subtitle fs-14">
          This tangerine, ginger and chocolate tart has verve, depth and a hint
          of spice
        </p>
        <p className="interesting2__date fs-12">Oct 13</p>
      </div>
      <div className="interesting2__item8">
        <h3 className="interesting2__title fs-16">It’s a Stressful World</h3>
        <p className="interesting2__subtitle fs-14">
          Can a cruise skeptic enjoy four days on the seas with his family and a
          bunch of princesses?
        </p>
        <p className="interesting2__date fs-12">Oct 14</p>
      </div>
      <div className="interesting2__item9">asdas</div>
      <div className="interesting2__item10">asdas</div>
      <div className="interesting2__item11">asdas</div>
      <div className="interesting2__item12">asdas</div>
    </section>
  );
};

export default Interesting2;

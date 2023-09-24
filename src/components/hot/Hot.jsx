import imgHotGirl from "../../assets/img/imgHotGirl.jpg";
import imageIcon from "../../assets/icon/imageIcon.svg";
import pagination from "../../assets/img/pagination.svg";
import imgCareer from "../../assets/img/imgCareer.png";
import ButtonReadMore from "../buttons/ButtonReadMore";
import "./hot.scss";
const Hot = () => {
  return (
    <section className="hot">
      <div className="container">
        <div className="hot__wrappWinner">
          <div className="hot__winner">
            <div className="hot__hot">Hot</div>
            <img src={imgHotGirl} alt="author" className="hot__authorImg" />
            <p className="hot__author fs-14whiteNormal">By Sarah Jenkins</p>
            <p className="hot__post fs-12whiteOpacity">Photographer</p>
          </div>
          <h3 className="hot__title fs-40whiteCenter">
            Readers' Choice <br /> winners: Your wine country favorites
          </h3>
          <button className="hot__button">
            <img src={imageIcon} alt="imageIcon" className="hot__imgButton" />
            <p className="hot__titleButton fs-14whiteNormal">Watch photos</p>26
          </button>
          <img
            src={pagination}
            alt="pagination"
            className="hot__imgPagination"
          />
        </div>
      </div>
      <div className="hot__wrappHot">
        <div className="hot__careers">
          <h3 className="hot__careers__title">CAREERS</h3>
          <h4 className="hot__careers__subtitle">
            Had a Job Interview but No Callback? Here’s What to Do
          </h4>
          <p className="hot__careers__descr fs-14">
            Try to understand the culture of the company where you want to work
            and be authentic in your interview, experts emphasize
          </p>
          <ButtonReadMore />
          <img src={imgCareer} alt="girl" className="hot__careers__img" />
        </div>
        <div className="hot__wrappInteresting">
          <div className="hot__interesting">
            <h3 className="hot__interesting__title fs-16">
              Is Coffee Bad for Bones?
            </h3>
            <p className="hot__interesting__descr fs-14">
              Coffee drinkers may excrete more calcium, but it doesn’t appear to
              weaken bones
            </p>
            <p className="hot__interesting__date fs-12">Oct 15</p>
          </div>
          <div className="hot__interesting">
            <p
              style={{ marginRight: "0" }}
              className="hot__interesting__title fs-16"
            >
              What We Manufacture
            </p>
            <p className="hot__interesting__descr fs-14">
              A global history of the factory and the modern world that all
              should read
            </p>
            <p className="hot__interesting__date fs-12">Oct 14</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hot;

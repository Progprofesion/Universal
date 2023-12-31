import recomendedImg1 from "../../assets/img/recomendedImg1.png";
import recomendedImg2 from "../../assets/img/recomendedImg2.png";
import recomendedImg3 from "../../assets/img/recomendedImg3.png";
import recomendedImg4 from "../../assets/img/recomendedImg4.png";
import recomendedImg5 from "../../assets/img/recomendedImg5.png";
import recomendedImg6 from "../../assets/img/recomendedImg6.png";
import recomendedImg7 from "../../assets/img/recomendedImg7.png";
import num1 from "../../assets/img/num1.png";
import num2 from "../../assets/img/num2.png";
import num3 from "../../assets/img/num3.png";
import num4 from "../../assets/img/num4.png";
import num5 from "../../assets/img/num5.png";
import num6 from "../../assets/img/num6.png";
import num7 from "../../assets/img/num7.png";
import "./recomended2.scss";
const Recomended2 = () => {
  return (
    <section className="recomended2">
      <div className="recomended2__title">
        <h4>Recommended for you</h4>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg1}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num1} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Office Meetings Leave the Office
              </div>
              <div className="recomended2__wrappText__time fs-12">
                15 minuts ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg2}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num2} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Experimental Vocal Music in Brooklyn
              </div>
              <div className="recomended2__wrappText__time fs-12">
                32 minuts ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg3}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num3} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Google’s Influence Over Think Tanks
              </div>
              <div className="recomended2__wrappText__time fs-12">
                38 minuts ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg4}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num4} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Homes for Sale in NYC and Connecticut
              </div>
              <div className="recomended2__wrappText__time fs-12">
                53 minuts ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg5}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num5} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Are You There, Dad? It’s Me, Alice
              </div>
              <div className="recomended2__wrappText__time fs-12">
                1 hour ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div className="recomended2__item">
            <img
              src={recomendedImg6}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num6} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                The New Punk Look: Lacy and Colorful
              </div>
              <div className="recomended2__wrappText__time fs-12">
                1 hour ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="recomended2__wrappItem">
        <div className="recomended2__wrapp">
          <div style={{ border: "none" }} className="recomended2__item">
            <img
              src={recomendedImg7}
              alt="preview"
              className="recomended2__imgPreview"
            />
            <img src={num7} alt="nums" className="recomended2__nums" />
            <div className="recomended2__wrappText">
              <div className="recomended2__wrappText__title fs-14">
                Sunday Best in Harlem and Brooklyn
              </div>
              <div className="recomended2__wrappText__time fs-12">
                2 hours ago
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ fontWeight: "700" }} className="recomended2__readMore fs-14">
        Read more
      </p>
    </section>
  );
};

export default Recomended2;

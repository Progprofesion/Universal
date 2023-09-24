import logo from "../../assets/icon/logo.svg";
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import youtube from "../../assets/icon/youtube.svg";
import instagram from "../../assets/icon/instagram.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__subscribe">
          <h3 className="footer__subscribe__title fs-40BlackCenter">
            Subscribe now and get 20% off
          </h3>
          <div className="footer__subscribe__wrappInput">
            <input
              placeholder="Enter your email"
              type="text"
              className="footer__subscribe__input"
            />
            <button className="footer__subscribe__button">Subscribe</button>
          </div>
          <div className="footer__subscribe__wrappLine">
            <span
              style={{ backgroundColor: "#FF4F52" }}
              className="footer__subscribe__colorLine"
            ></span>
            <span
              style={{ backgroundColor: "#AC8EE3" }}
              className="footer__subscribe__colorLine"
            ></span>
            <span
              style={{ backgroundColor: "#4592FF" }}
              className="footer__subscribe__colorLine"
            ></span>
            <span
              style={{ backgroundColor: "#FFA34D" }}
              className="footer__subscribe__colorLine"
            ></span>
            <span
              style={{ backgroundColor: "#3DC47E" }}
              className="footer__subscribe__colorLine"
            ></span>
            <span
              style={{ backgroundColor: "#6E99AE", maxWidth: "165px" }}
              className="footer__subscribe__colorLine"
            ></span>
          </div>
        </div>
        <div className="footer__info">
          <div className="footer__info__wrapp">
            <div className="footer__info__title">News</div>
            <div className="footer__info__item fs-14">Nation</div>
            <div className="footer__info__item fs-14">World</div>
            <div className="footer__info__item fs-14">Politics</div>
            <div className="footer__info__item fs-14">Solar Eclipse</div>
          </div>
          <div className="footer__info__wrapp">
            <div className="footer__info__title">Arts</div>
            <div className="footer__info__item fs-14">Art & Design</div>
            <div className="footer__info__item fs-14">Movies</div>
            <div className="footer__info__item fs-14">People</div>
            <div className="footer__info__item fs-14">Video: Arts</div>
            <div className="footer__info__item fs-14">Theater</div>
          </div>
          <div className="footer__info__wrapp">
            <div className="footer__info__title">Travel</div>
            <div className="footer__info__item fs-14">Destinations</div>
            <div className="footer__info__item fs-14">Flights</div>
            <div className="footer__info__item fs-14">Business Travel</div>
          </div>
          <div className="footer__info__wrapp">
            <div className="footer__info__title">Sports</div>
            <div className="footer__info__item fs-14">Olympics</div>
            <div className="footer__info__item fs-14">Motor Sports</div>
            <div className="footer__info__item fs-14">Volleyball</div>
            <div className="footer__info__item fs-14">MMA</div>
            <div className="footer__info__item fs-14">Cycling</div>
          </div>
          <div className="footer__info__wrapp">
            <div className="footer__info__title">Tech</div>
            <div className="footer__info__item fs-14">Tech</div>
            <div className="footer__info__item fs-14">Tech Columnists</div>
            <div className="footer__info__item fs-14">Tech Reviews</div>
            <div className="footer__info__item fs-14">Talking Tech</div>
          </div>
          <div className="footer__info__wrapp">
            <div className="footer__info__title">Moneys</div>
            <div className="footer__info__item fs-14">Markets</div>
            <div className="footer__info__item fs-14">Business</div>
            <div className="footer__info__item fs-14">Personal Finance</div>
            <div className="footer__info__item fs-14">Retirement</div>
            <div className="footer__info__item fs-14">Careers</div>
          </div>
        </div>
        <div className="footer__contacts">
          <div className="footer__contacts__wrappInfo">
            <img src={logo} alt="logo" className="footer__contacts__imgLogo" />
            <a
              href="@"
              className="footer__contacts__title  fs-14blackUpLetSpacing"
            >
              Contact Us
            </a>
            <a
              href="@"
              className="footer__contacts__title fs-14blackUpLetSpacing"
            >
              Work with Us
            </a>
            <a
              href="@"
              className="footer__contacts__title fs-14blackUpLetSpacing"
            >
              Advertise
            </a>
            <a
              href="@"
              className="footer__contacts__title fs-14blackUpLetSpacing"
            >
              Your Ad Choise
            </a>
          </div>
          <div className="footer__contacts__wrappSocial">
            <a href="@" className="footer__contacts__buttonFacebok">
              <img
                src={facebook}
                alt="Facebook"
                className="footer__contacts__social"
              />
            </a>

            <a href="@" className="footer__contacts__buttonTwitter">
              <img
                src={twitter}
                alt="Twitter"
                className="footer__contacts__social"
              />
            </a>

            <a href="@" className="footer__contacts__buttonYoutube">
              <img
                src={youtube}
                alt="YouTube"
                className="footer__contacts__social"
              />
            </a>

            <a href="@" className="footer__contacts__buttonInstagram">
              <img
                src={instagram}
                alt="Instagram"
                className="footer__contacts__social"
              />
            </a>
          </div>
        </div>
        <div className="footer__descr">
          <p className="footer__descr__title fs-14grey">
            Universal’s business concept is to offer fashion and quality at the
            best price in a sustainable way. Universal has since it was founded
            in 2015 grown into one of the world's leading fashion companies.
          </p>
          <p className="footer__descr__subtitle fs-14grey">
            © 2019 Universal UI Kit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import hamburgerMenu from "../../assets/icon/hamburgerMenu.svg";
import search from "../../assets/icon/search.svg";
import image from "../../assets/icon/image.png";
import man from "../../assets/icon/man.svg";
import liberty from "../../assets/img/liberty.png";
import logo from "../../assets/img/logo.svg";
import sun from "../../assets/icon/sun.svg";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__actions">
          <div className="header__dropDownWrapp">
            <button className="header__dropDown">
              <img src={hamburgerMenu} alt="" />
            </button>
            <p className="header__titleDropDawn">Sections</p>
          </div>
          <div className="header__wrappSearch">
            <img src={search} alt="Search" className="header__searchImg" />
            <input
              placeholder="Search"
              type="text"
              className="header__search"
            />
          </div>
          <div className="header__wrappSubscribe">
            <img src={image} alt="subscribe" className="header__subscribeImg" />
            <div>
              <p className="header__subscribeTitle">Subscribe Now</p>
              <div className="header__subscribeSubtitle">3 month for $19</div>
            </div>
          </div>
          <div className="header__wrappSignIn">
            <img src={man} alt="man" className="header__signImg" />
            <button className="header__signIn">Sign In</button>
          </div>
        </div>
        <div className="header__info">
          <img src={liberty} alt="liberty" className="header__imgLiberty" />
          <p className="header__infoTitle">Boston and New York Bear Brunt</p>
          <img src={logo} alt="logo" className="header__imgLogo" />
          <p className="header__date">Monday, January 1, 2018</p>
          <img src={sun} alt="weather" className="header__imgSun" />
          <p className="header__weather">- 23 °C</p>
        </div>
      </div>

      <div className="header__wrappMenu">
        <nav className="header__menu container">
          <a href="@">NEWS</a>
          <a href="@">OPINION</a>
          <a href="@">SCIENCE</a>
          <a href="@">Life</a>
          <a href="@">Travel</a>
          <a href="@">Moneys</a>
          <a href="@">Art & Design</a>
          <a href="@">Sports</a>
          <a href="@">People</a>
          <a href="@">Health</a>
          <a href="@">Education</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import hamburgerMenu from "../../assets/icon/hamburgerMenu.svg";
import search from "../../assets/icon/search.svg";
import image from "../../assets/icon/image.png";
import man from "../../assets/icon/man.svg";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__actions">
        <div className="header__dropDownWrapp">
          <button className="header__dropDown">
            <img src={hamburgerMenu} alt="" />
          </button>
          <p className="header__titleDropDawn">Sections</p>
        </div>
        <div className="header__searchWrapp">
          <img src={search} alt="Search" className="header__searchImg" />
          <input placeholder="Search" type="text" className="header__search" />
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
    </header>
  );
};

export default Header;

import { LOGO_URL } from "../utils/content";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart </li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header ;
import { FcSearch } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import "./navbar.css";
import "../../../App.css";

function Navbar() {
  return (
    <nav class="navigation-bar">
      <div className="upper-nav">
        <span className="log-in">Login</span>
        <span className="sign-up">Sign up</span>
      </div>
      <div className="main-nav">
        <div className="logo-container">
          <img
            className="logo"
            src="http://res.cloudinary.com/dwhran9qg/image/upload/sports/sports_k7rwkw.jpg"
          />
          SportsTown
        </div>
        <div className="search-bar">
          <input type="search" placeholder="Search..."></input>
          <FcSearch />
        </div>
        <div className="page-container">
          <div>
            <BsFillHeartFill className="wishlist" />
            <div class="dot">4</div>
          </div>
          <div>
            <FaShoppingCart className="shopping-cart" />
            <div class="dot">1</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };

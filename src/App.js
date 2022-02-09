import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./style.css";
function App() {
  const menu = document.querySelector(".navbar__menu");
  const icons = document.querySelector(".navbar__icons");
  const toggleBtn = () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
  };
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="navbar__logo">
            <Icon icon="fa-brands:accusoft" />
            <a>DreamCoding</a>
          </div>
          <ul className="navbar__menu">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
            <li>
              <a>Wedding</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Bookings</a>
            </li>
          </ul>
          <ul className="navbar__icons">
            <li>
              <Icon icon="fe:twitter" />
            </li>
            <li>
              <Icon icon="fe:facebook" />
            </li>
          </ul>
          <a className="navbar__toogleBtn" onClick={toggleBtn}>
            <Icon icon="charm:menu-hamburger" />
          </a>
          {/* <Link to="/template">template</Link> |{" "}
          <Link to="/responsive">responsive</Link> */}
        </nav>
      </div>
    </>
  );
}

export default App;

import { FaChevronDown } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="menu">
        <img src="./src/assets/logo.jpg" alt-="logo Blinguage" />
        <ul>
          <li>
            Courses <FaChevronDown />
          </li>
          <li>Why us ?</li>
          <li>Support</li>
          <li>Get started</li>
        </ul>
      </div>
      <img src="src/assets/bg.jpg" />
    </header>
  );
}

export default Header;

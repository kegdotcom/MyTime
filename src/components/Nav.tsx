import { Link } from "react-router-dom";
import Button from "./Button";
import Icon from "./Icon";

interface NavProps {
  darkMode?: boolean;
  onToggleTheme: () => void;
}

function Nav({ darkMode = false, onToggleTheme }: NavProps) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme={darkMode ? "dark" : "light"}
      style={{ height: "10vh" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MyTime
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <Icon name="house" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/calendar">
                <Icon name="calendar3" /> Calendar
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/today">
                <Icon name="calendar" /> Today
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Icon name="person" /> Account
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/register">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Button
                    classes="dropdown-item"
                    darkMode={darkMode}
                    onClick={onToggleTheme}
                  >
                    <Icon name={darkMode ? "sun" : "moon"} /> Use{" "}
                    {darkMode ? "Light" : "Dark"} Theme
                  </Button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;

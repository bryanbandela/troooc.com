import './Header.css';
import { FaChartPie, FaComment, FaHome, FaList, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_app">
      <h2 className="logo_name">troooc</h2>
      <div className="options">
        <nav className="menu">
          <ul>
            <li>
              <NavLink to="/home" activeclassname="main-nav-active">
                <i>
                  <FaHome />
                </i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tips">
                <i>
                  <FaComment />
                </i>
                <p>Tips</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/budget">
                <i>
                  <FaList />
                </i>
                <p>Budget</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <i>
                  <FaUser />
                </i>
                <p>Profile</p>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="chart">
          <i>
            <FaChartPie size="25" />
          </i>
        </div>
      </div>
    </header>
  );
};

export default Header;

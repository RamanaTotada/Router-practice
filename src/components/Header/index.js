import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>

    <ul className="list-of-items">
      <li>
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>

      <li>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>

      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </ul>
  </nav>
)

export default Header

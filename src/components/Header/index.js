// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="nav-btn">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>

      <div className="nav-content nav-big-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="nav-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Products</li>
          <li className="nav-menu-item">Cart</li>
        </ul>
        <button type="button" className="loguout-btn">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-menu-container">
      <ul className="nav-menu-list-moblie">
        <li className="nav-menu-list-moblie">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
            alt="nav home"
          />
        </li>
        <li className="nav-menu-list-moblie">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
            alt="nav products"
          />
        </li>
        <li className="nav-menu-list-moblie">
          <img
            className="nav-bar-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header

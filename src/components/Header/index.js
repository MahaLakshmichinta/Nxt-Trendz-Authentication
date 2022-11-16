// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="container">
      <div className="card-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <button className="button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-logout"
          />
        </button>
      </div>
      <div className="container nav-bar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <ul className="ul-card">
          <li className="list">Home</li>
          <li className="list">Products</li>
          <li className="list">Cart</li>
        </ul>
        <button type="button" className="btn-button">
          Logout
        </button>
      </div>
    </div>
    <div className="nav-items-container">
      <ul className="items-container">
        <li className="list-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-img"
          />
        </li>

        <li className="list-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-img"
          />
        </li>

        <li className="list-items">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)
export default Header

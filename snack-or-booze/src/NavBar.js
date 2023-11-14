import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <h1>Spanglish</h1>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/drink">Drinks</Link>
        <Link to="/snacks">Foods</Link>
        <Link to="/">Create</Link>
        <Link to="/">Login</Link>
        <Link to="/">Register</Link>

      </div>
    </nav>
  );
};

export default Navbar;


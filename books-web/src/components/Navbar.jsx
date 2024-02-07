import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext)
  const { products } = useContext(CartContext)

  console.log(products)

  return (
    <nav className={`navbar bg-${theme} navbar-expand-md`} data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Books demo {` - user: ${user ? user.username : ''}`}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar-menu">
          <div className="navbar-nav">
            <NavLink to="/books" className="nav-link">
              Libros
            </NavLink>
            <NavLink to="/books/new" className="nav-link">
              Create a book
            </NavLink>
          </div>
        </div>
        <button onClick={toggleTheme}>
          {theme}
        </button>
        <div>
          Carrito: {products.length}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

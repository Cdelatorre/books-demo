import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Books demo
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar-menu">
          <div className="navbar-nav">
            <NavLink to="/books" className="nav-link">
              Libros
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
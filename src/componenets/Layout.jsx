import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Pokemon API
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/pokemon">
                Pokemons
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/search">
                Search
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;

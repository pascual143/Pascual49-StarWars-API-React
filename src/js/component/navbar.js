import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";
import SearchBar from "./SearchBar";
import StarWarsPic from "../../img/startwars.png";

export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  const [showHover, setShowHover] = useState(-1);

  return (
    // STARTING IMAGE LOGO SENDING HOME ON CLICK
    <nav className="navbar navbar-light bg-secondary mb-3">
      <Link to="/">
        <img src={StarWarsPic} className="navbar-brand mb-0 h1 starwars" />
      </Link>

      {/* SEARCH BAR */}

      <SearchBar item={store.people} />

      {/* FAVORITES DROPDOWN LIST */}

      <div className="dropdown ml-auto">
        <button
          className="btn btn-warning dropdown-toggle me-5 favorites"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="me-5 ">Favorites</span>
          <div className="bg bg-secondary  me-4 secondary">
            <span>
              <strong>{store.favorites.length}</strong>
            </span>
          </div>
        </button>
        <ul className="dropdown-menu bg bg-warning">
          {store.favorites.length > 0 ? (
            store.favorites.map((item, index) => {
              return (
                <div>
                  <li
                    className="dropdown-item d-flex fst-italic fw-bold"
                    key={index}
                    onMouseEnter={() => setShowHover(index)}
                    onMouseLeave={() => setShowHover(-1)}
                  >
                    {item}
                    <div
                      className="deleteButton fw-bold"
                      onClick={(e) => {
                        actions.deleteItem(index);
                        e.stopPropagation();
                      }}
                    >
                      <span
                        className="ms-4 bg bg-danger rounded-pill"
                        type="button"
                      >
                        {showHover == index ? (
                          <div className="trash">
                            <i className="bi bi-trash"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </li>
                </div>
              );
            })
          ) : (
            <p className="emptyList fw-bold">No favorites yet</p>
          )}
        </ul>
      </div>
    </nav>
  );
};

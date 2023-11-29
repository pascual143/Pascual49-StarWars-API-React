import React from "react";
import "../../../styles/cards.css";
import { useContext } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";

const VehiclesCard = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <div className="card bg bg-secondary">
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/6.jpg`}
        className="card-img-top"
        alt="Should be a StarShip Image"
        style={{ width: "350px", height: "auto", borderRadius: "5px" }}
      />
      <div className="card-body">
        <h5 className="card-title">Name: {props.vehicle.name}</h5>
        <p className="card-text">
          Cargo Capacity: {props.vehicle.cargo_capacity}
        </p>
        <p className="card-text">Length: {props.vehicle.length}</p>
        <p className="card-text">Manufacturer: {props.vehicle.manufacturer}</p>
        <div className="buttonContainer">
          <Link to={"/vehicles/" + props.id}>
            <button href="#" className="btn btn-danger">
              Learn More
            </button>
          </Link>
          <button
            className="favoritesCards"
            onClick={() => {
              if (store.favorites.includes(props.vehicle.name)) {
                alert("Element already on the list");
              } else {
                actions.addFavorites(props.vehicle.name);
              }
            }}>
            <div style={{ marginLeft: "10px" }}>
            <i class="bi bi-star" style={{ color: "#ffd43b" }}>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
            </i>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiclesCard;
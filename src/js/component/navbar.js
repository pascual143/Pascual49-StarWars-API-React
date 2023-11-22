import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from '../../img/startwars.png'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={ProfilePic} />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div class="dropdown">
  						<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  						  FAVORITES
  						</button>
  						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  						 
  						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};

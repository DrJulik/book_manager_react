import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav className="deep-purple lighten-2 ">
				<div className="container">
					<div className="nav-wrapper">
						<Link to="/" className="brand-logo center">
							Book List Manager
						</Link>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<Link to="/book/add">Add a book</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;

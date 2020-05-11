import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

function Header() {
	useEffect(() => {
		let sidenav = document.querySelector("#slide-out");
		M.Sidenav.init(sidenav, {});
	});
	return (
		<header>
			<nav>
				<div className="nav-wrapper deep-purple lighten-2">
					<Link to="/" className="brand-logo center">
						Book List Manager
					</Link>
					<a href="#" data-target="slide-out" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link to="/book/add">Add a book</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</nav>

			<ul className="sidenav" id="slide-out">
				<li>
					<Link to="/book/add">Add a book</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;

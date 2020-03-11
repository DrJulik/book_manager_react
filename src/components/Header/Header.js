import React from "react";

function Header() {
	return (
		<header>
			<nav className="deep-purple lighten-2 ">
				<div className="container">
					<div className="nav-wrapper">
						<a href="/home" className="brand-logo center">
							Book List Manager
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							<li>
								<a href="sass.html">About the Project</a>
							</li>
							<li>
								<a href="badges.html">Components</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;

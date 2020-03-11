import React, { Component } from "react";

export class Search extends Component {
	render() {
		return (
			<div className="row">
				<div className="input-field col s12">
					<input name="search" type="text" />
					<label htmlFor="search">Search</label>
				</div>
			</div>
		);
	}
}

export default Search;

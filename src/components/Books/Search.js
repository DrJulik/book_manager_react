import React, { Component } from "react";

export class Search extends Component {
	state = {
		search: ""
	};

	searchHandler = e => {
		this.setState({ search: e.target.value });
	};
	render() {
		return (
			<div className="row">
				<div className="input-field col s12">
					<input name="search" type="text" onChange={this.searchHandler} />
					<label htmlFor="search">Search</label>
				</div>
			</div>
		);
	}
}

export default Search;

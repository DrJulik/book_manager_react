import React, { Component } from "react";
import { Consumer } from "../../context/context";

export class Search extends Component {
	state = {
		search: ""
	};

	searchHandler = (dispatch, e) => {
		this.setState({ search: e.target.value }, () => {
			dispatch({ type: "SEARCH_BOOK", payload: this.state.search });
			dispatch({ type: "RESET_STATE" });
		});
	};

	render() {
		// let filterText = this.state.search;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div className="row">
							<div className="input-field col s3 right">
								<i className="material-icons prefix">search</i>
								<input
									name="search"
									type="text"
									onChange={this.searchHandler.bind(this, dispatch)}
								/>
								<label htmlFor="search" style={{ pointerEvents: "none" }}>
									Search
								</label>
							</div>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;

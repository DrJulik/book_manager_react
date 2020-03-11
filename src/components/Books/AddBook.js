import React, { Component } from "react";

class AddBook extends Component {
	state = {
		title: "",
		author: "",
		isbn: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div>
				<h2>Add A Book:</h2>
				<div className="row">
					<form className="cols s12">
						<div className="input-field col s12">
							<input
								name="title"
								placeholder="The Stranger"
								type="text"
								onChange={this.onChange}
							/>
							<label htmlFor="title">Title</label>
						</div>
						<div className="input-field col s12">
							<input
								name="author"
								placeholder="Albert Camus"
								type="text"
								onChange={this.onChange}
							/>
							<label htmlFor="author">Author</label>
						</div>
						<div className="input-field col s12 ">
							<input
								name="isbn"
								placeholder="9780679720201"
								type="text"
								onChange={this.onChange}
							/>
							<label htmlFor="isbn">ISBN</label>
						</div>
						<div className="input-field col s12">
							<button
								className="btn indigo lighten-1 waves-effect waves-light"
								type="submit"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default AddBook;

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Consumer } from "../../context/context";

class EditBook extends Component {
	state = {
		title: "",
		author: "",
		isbn: ""
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (dispatch, e) => {
		e.preventDefault();
		const { title, author, isbn } = this.state;

		const newBook = {
			id: uuidv4(),
			title,
			author,
			isbn
		};

		dispatch({ type: "ADD_BOOK", payload: newBook });

		this.setState({
			title: "",
			author: "",
			isbn: ""
		});

		// redirect to book list after added book
		this.props.history.push("/");
	};

	render() {
		const { title, author, isbn } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div>
							<h2>Add A Book:</h2>
							<div className="row">
								<form
									className="cols s12"
									onSubmit={this.onSubmit.bind(this, dispatch)}
								>
									<div className="input-field col s12">
										<input
											value={title}
											name="title"
											type="text"
											onChange={this.onChange}
										/>
										<label htmlFor="title">Title</label>
									</div>
									<div className="input-field col s12">
										<input
											value={author}
											name="author"
											type="text"
											onChange={this.onChange}
										/>
										<label htmlFor="author">Author</label>
									</div>
									<div className="input-field col s12 ">
										<input
											value={isbn}
											name="isbn"
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
				}}
			</Consumer>
		);
	}
}

export default EditBook;

import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
// import { v4 as uuidv4 } from "uuid";
import { Consumer } from "../../context/context";

class AddBook extends Component {
	state = {
		title: "",
		author: "",
		isbn: "",
		errors: {}
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const { title, author, isbn } = this.state;

		// checking for errors
		if (title === "") {
			this.setState({ errors: { title: "Title is required!" } });
			return;
		}
		if (author === "") {
			this.setState({ errors: { author: "Author is required!" } });
			return;
		}
		if (isbn === "") {
			this.setState({ errors: { isbn: "Isbn is required!" } });
			return;
		}

		const newBook = {
			// id: uuidv4(),
			title,
			author,
			isbn
		};

		const res = await axios.post("http://localhost:3000/books", newBook);

		dispatch({ type: "ADD_BOOK", payload: res.data });

		this.setState({
			title: "",
			author: "",
			isbn: ""
		});

		// redirect to book list after added book
		this.props.history.push("/");
	};

	render() {
		const { title, author, isbn, errors } = this.state;
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
											className={classnames("", { invalid: errors.title })}
											value={title}
											name="title"
											type="text"
											onChange={this.onChange}
										/>
										<label htmlFor="title">Title</label>
										{errors.title ? (
											<p style={{ color: "red" }}>{errors.title}</p>
										) : null}
									</div>
									<div className="input-field col s12">
										<input
											className={classnames("", { invalid: errors.author })}
											value={author}
											name="author"
											type="text"
											onChange={this.onChange}
										/>
										<label htmlFor="author">Author</label>
										{errors.author ? (
											<p style={{ color: "red" }}>{errors.author}</p>
										) : null}
									</div>
									<div className="input-field col s12 ">
										<input
											className={classnames("", { invalid: errors.isbn })}
											value={isbn}
											name="isbn"
											type="text"
											onChange={this.onChange}
										/>
										<label htmlFor="isbn">ISBN</label>
										{errors.isbn ? (
											<p style={{ color: "red" }}>{errors.isbn}</p>
										) : null}
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

export default AddBook;

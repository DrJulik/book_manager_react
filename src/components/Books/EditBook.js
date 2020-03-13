import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";
// import { v4 as uuidv4 } from "uuid";
import { Consumer } from "../../context/context";

class EditBook extends Component {
	state = {
		title: "",
		author: "",
		isbn: ""
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		const res = await axios.get(`http://localhost:3000/books/${id}`);

		const book = res.data;

		this.setState({
			title: book.title,
			author: book.author,
			isbn: book.isbn
		});
		M.updateTextFields();
	}

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const { title, author, isbn } = this.state;

		const updContact = {
			title,
			author,
			isbn
		};

		const { id } = this.props.match.params;

		const res = await axios.put(
			`http://localhost:3000/books/${id}`,
			updContact
		);

		dispatch({ type: "UPDATE_BOOK", payload: res.data });

		// clear state
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
							<h2>Edit A Book:</h2>
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
										<label htmlFor="title" className="active">
											Title
										</label>
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
											Update Book
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

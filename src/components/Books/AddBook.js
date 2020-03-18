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
		rating: "",
		year: "",
		pages: "",
		errors: {},
		moreInfo: false
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = async (dispatch, e) => {
		e.preventDefault();
		const { title, author, isbn, rating, year, pages } = this.state;

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
			isbn,
			rating,
			year,
			pages
		};

		const res = await axios.post("http://localhost:3000/books", newBook);

		dispatch({ type: "ADD_BOOK", payload: res.data });

		this.setState({
			title: "",
			author: "",
			isbn: "",
			rating: "",
			year: "",
			pages: ""
		});

		// redirect to book list after added book
		this.props.history.push("/");
	};

	toggleMoreInfo = e => {
		e.preventDefault();
		this.setState({ moreInfo: !this.state.moreInfo });
	};

	render() {
		const { title, author, isbn, errors, year, pages } = this.state;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<div>
							<h2>Add A Book:</h2>
							<form
								className="cols s12"
								onSubmit={this.onSubmit.bind(this, dispatch)}
							>
								<div className="row">
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
									<div className="input-field col s2 ">
										<select
											className="browser-default"
											name="rating"
											onChange={this.onChange}
										>
											<option value="" selected>
												Rate the book!
											</option>
											<option value="1">1</option>
											<option value="2">2</option>
											<option value="3">3</option>
											<option value="4">4</option>
											<option value="5">5</option>
											<option value="6">6</option>
											<option value="7">7</option>
											<option value="8">8</option>
											<option value="9">9</option>
											<option value="10">10</option>
										</select>
									</div>
								</div>
								<div className="row s6 left-align">
									<a href="/123" onClick={this.toggleMoreInfo}>
										More info...
									</a>
									{this.state.moreInfo ? (
										<div className="optional_inputs">
											<div className="input-field col s12 ">
												<input
													value={year}
													name="year"
													type="text"
													onChange={this.onChange}
												/>
												<label htmlFor="year">Year</label>
											</div>

											<div className="input-field col s12 ">
												<input
													value={pages}
													name="pages"
													type="text"
													onChange={this.onChange}
												/>
												<label htmlFor="pages">Number of Pages</label>
											</div>
										</div>
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
					);
				}}
			</Consumer>
		);
	}
}

export default AddBook;

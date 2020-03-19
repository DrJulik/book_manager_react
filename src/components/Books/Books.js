import React, { Component } from "react";
import Book from "./Book";
// import Search from "./Search";
import { Consumer } from "../../context/context";

class Books extends Component {
	state = {
		search: "",
		currentSort: "default"
	};

	searchHandler = e => {
		this.setState({ search: e.target.value });
	};

	onSortChange = e => {
		e.preventDefault(e);
		const { currentSort } = this.state;
		let nextSort;

		if (currentSort === "down") nextSort = "up";
		else if (currentSort === "up") nextSort = "default";
		else if (currentSort === "default") nextSort = "down";

		this.setState({
			currentSort: nextSort
		});
	};

	render() {
		const { currentSort } = this.state;
		const sortTypes = {
			up: {
				class: "expand_less",
				fn: (a, b) => a.title.localeCompare(b.title)
			},
			down: {
				class: "expand_more",
				fn: (a, b) => b.title.localeCompare(a.title)
			},
			default: {
				class: "sort",
				fn: (a, b) => a
			}
		};

		return (
			<Consumer>
				{value => {
					const { books } = value;
					let filteredBooks = books.filter(
						book =>
							book.title
								.toLowerCase()
								.includes(this.state.search.toLowerCase()) ||
							book.author
								.toLowerCase()
								.includes(this.state.search.toLowerCase()) ||
							book.isbn.includes(this.state.search)
					);
					return (
						<div>
							{/* Testing this way of searching */}
							<div className="row">
								<div className="input-field col s3 right">
									<i className="material-icons prefix">search</i>
									<input
										name="search"
										type="text"
										onChange={this.searchHandler}
									/>
									<label htmlFor="search" style={{ pointerEvents: "none" }}>
										Search
									</label>
								</div>
							</div>
							<table className="highlight">
								<thead>
									<tr>
										<th style={{ display: "flex" }}>
											<span>Title</span>{" "}
											<a
												href="/notalink"
												style={{
													display: "flex",
													alignItems: "center",
													marginLeft: "0.5rem"
												}}
												onClick={this.onSortChange}
											>
												<i
													className="material-icons"
													style={{ color: "black" }}
												>{`${sortTypes[currentSort].class}`}</i>
											</a>
										</th>
										<th>Author</th>
										<th>ISBN</th>
										<th>Rating</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
									{[...filteredBooks]
										.sort(sortTypes[currentSort].fn)
										.map(book => {
											return (
												<Book
													key={book.id}
													id={book.id}
													author={book.author}
													title={book.title}
													isbn={book.isbn}
													rating={book.rating}
												/>
											);
										})}
								</tbody>
							</table>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Books;

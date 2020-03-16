import React, { Component } from "react";
import Book from "./Book";
// import Search from "./Search";
import { Consumer } from "../../context/context";

class Books extends Component {
	state = {
		search: ""
	};

	searchHandler = e => {
		this.setState({ search: e.target.value });
	};

	render() {
		return (
			<Consumer>
				{value => {
					const { books } = value;
					let filteredBooks = books.filter(
						book =>
							book.title.includes(this.state.search) ||
							book.author.includes(this.state.search) ||
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
										<th>Title</th>
										<th>Author</th>
										<th>ISBN</th>
										<th></th>
									</tr>
								</thead>

								<tbody>
									{filteredBooks.map(book => {
										return (
											<Book
												key={book.id}
												id={book.id}
												author={book.author}
												title={book.title}
												isbn={book.isbn}
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

import React, { Component } from "react";
import Book from "./Book";
import Search from "./Search";
import { Consumer } from "../../context/context";

class Books extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { books } = value;
					return (
						<div>
							<h2>Book List:</h2>
							<Search />
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
									{books.map(book => {
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

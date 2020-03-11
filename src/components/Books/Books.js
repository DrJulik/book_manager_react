import React, { Component } from "react";
import Book from "./Book";
import Search from "./Search";

class Books extends Component {
	state = {
		books: [
			{
				id: 1,
				author: "Nikolai Gogol",
				title: "Dead Souls",
				isbn: "123123123"
			},
			{
				id: 2,
				author: "Nikolai Gogol",
				title: "Dead Souls",
				isbn: "123123123"
			},
			{
				id: 3,
				author: "Nikolai Gogol",
				title: "Dead Souls",
				isbn: "123123123"
			}
		]
	};
	render() {
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
						</tr>
					</thead>

					<tbody>
						{this.state.books.map(book => {
							return <Book key={book.id} />;
						})}
					</tbody>
				</table>
			</div>
		);
	}
}

export default Books;

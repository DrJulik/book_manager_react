import React from "react";
import Book from "./Book";
import Search from "./Search";

const Books = () => {
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
					<Book />
					<Book />
					<Book />
					<Book />
				</tbody>
			</table>
		</div>
	);
};

export default Books;

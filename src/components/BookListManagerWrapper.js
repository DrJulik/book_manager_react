import React, { Component } from "react";
import Container from "./hoc/Container";
import Header from "./Header/Header";
import AddBook from "./Books/AddBook";
import Books from "./Books/Books";

export class BookListManagerWrapper extends Component {
	render() {
		return (
			<div>
				<Header />
				<Container>
					<AddBook />
					<Books />
				</Container>
			</div>
		);
	}
}

export default BookListManagerWrapper;

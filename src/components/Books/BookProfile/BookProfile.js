import React, { Component } from "react";
import axios from "axios";

class BookProfile extends Component {
	state = {
		title: "",
		author: "",
		isbn: "",
		rating: "",
		year: "",
		pages: "",
	};

	async componentDidMount() {
		const { id } = this.props.match.params;
		// const res = await axios.get(`http://localhost:3000/books/${id}`);

		// const book = res.data;
		let book = JSON.parse(localStorage.getItem(id));

		this.setState({
			title: book.title,
			author: book.author,
			isbn: book.isbn,
			rating: book.rating,
			year: book.year,
			pages: book.pages,
		});
	}

	render() {
		const { title, author, isbn, rating, year, pages } = this.state;
		return (
			<div
				className="container row right-align"
				style={{ height: "100vh", marginTop: "3rem" }}
			>
				<img
					className="col s5 responsive-img"
					src="https://picsum.photos/500/700"
					alt=""
				/>
				<div className="col s7">
					<div className="book_description_group">
						<h5>Title:</h5>
						<h3>{title}</h3>
					</div>
					<div className="book_description_group">
						<h5>Author:</h5>
						<h3>{author}</h3>
					</div>
					<div className="book_description_group">
						<h5>ISBN:</h5>
						<h3>{isbn}</h3>
					</div>
					{rating ? (
						<div className="book_description_group">
							<h5>User Rating:</h5>
							<h3>{rating}</h3>
						</div>
					) : null}

					<div className="optional_info">
						{year ? (
							<div className="book_description_group">
								<h5>Year:</h5>
								<h3>{year}</h3>
							</div>
						) : null}
						{pages ? (
							<div className="book_description_group">
								<h5>Number of pages:</h5>
								<h3>{pages}</h3>
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default BookProfile;

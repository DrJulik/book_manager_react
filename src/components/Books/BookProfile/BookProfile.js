import React, { Component } from "react";
import axios from "axios";

class BookProfile extends Component {
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
	}

	render() {
		const { title, author, isbn } = this.state;
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
				</div>
			</div>
		);
	}
}

export default BookProfile;

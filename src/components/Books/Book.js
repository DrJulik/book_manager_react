import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Consumer } from "../../context/context";

class Book extends Component {
	deleteBook = async (id, dispatch, e) => {
		e.preventDefault();
		await axios.delete(`http://localhost:3000/books/${id}`);

		dispatch({ type: "DELETE_BOOK", payload: id });
	};

	render() {
		const { id } = this.props;
		return (
			<Consumer>
				{value => {
					const { dispatch } = value;
					return (
						<tr>
							<td>{this.props.title}</td>
							<td>{this.props.author}</td>
							<td>{this.props.isbn}</td>
							<td style={{ textAlign: "center" }}>
								<Link
									className="btn-floating btn-small  waves-effect waves-light"
									style={{ marginRight: "1rem" }}
									to={`book/edit/${id}`}
								>
									<i className="material-icons">edit</i>
								</Link>
								<a
									onClick={this.deleteBook.bind(this, id, dispatch)}
									href="/jhg"
									className="btn-floating btn-small  waves-effect waves-light red"
								>
									<i className="material-icons">clear</i>
								</a>
							</td>
						</tr>
					);
				}}
			</Consumer>
		);
	}
}

export default Book;

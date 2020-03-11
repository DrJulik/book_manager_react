import React, { Component } from "react";
import { Consumer } from "../../context/context";

class Book extends Component {
	deleteBook = (id, dispatch, e) => {
		e.preventDefault();
		console.log(123);
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
							<td>
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

import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_BOOK":
			return {
				...state,
				books: state.books.filter(book => book.id !== action.payload)
			};
		case "ADD_BOOK":
			return {
				...state,
				books: [action.payload, ...state.books]
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		books: [
			{
				id: 1,
				author: "Nikolai Gogol",
				title: "Dead Souls",
				isbn: "0140448071"
			},
			{
				id: 2,
				author: "Charles Dickens",
				title: "A Christmas Carol",
				isbn: "1561797464"
			},
			{
				id: 3,
				author: "Emily Bronte",
				title: "Wuthering Heights",
				isbn: "0553212583"
			}
		],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;

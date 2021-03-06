import React, { Component } from "react";
// import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "DELETE_BOOK":
			return {
				...state,
				books: state.books.filter((book) => book.id !== action.payload),
			};
		case "ADD_BOOK":
			return {
				...state,
				books: [action.payload, ...state.books],
			};
		case "UPDATE_BOOK":
			return {
				...state,
				books: state.books.map((book) =>
					book.id === action.payload.id ? (book = action.payload) : book
				),
			};

		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		books: [],
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		},
	};

	async componentDidMount() {
		// const res = await axios.get("http://localhost:3000/books");
		// this.setState({ books: res.data });

		var values = [],
			keys = Object.keys(localStorage),
			i = keys.length;

		while (i--) {
			values.push(JSON.parse(localStorage.getItem(keys[i])));
		}

		this.setState({ books: values });
	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export const Consumer = Context.Consumer;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./hoc/Container";
import Header from "./Header/Header";
import NotFound from "./pages/NotFound";
import AddBook from "./Books/AddBook";
import EditBook from "./Books/EditBook";
import About from "./pages/About";
import Books from "./Books/Books";
import BookProfile from "./Books/BookProfile/BookProfile";

export class BookListManagerWrapper extends Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<Container>
						<Switch>
							<Route exact path="/" component={Books} />
							<Route exact path="/book/add" component={AddBook} />
							<Route exact path="/book/edit/:id" component={EditBook} />
							<Route exact path="/book/:id" component={BookProfile} />
							<Route exact path="/about" component={About} />
							<Route component={NotFound} />
						</Switch>
					</Container>
				</div>
			</Router>
		);
	}
}

export default BookListManagerWrapper;

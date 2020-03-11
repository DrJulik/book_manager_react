import React from "react";
import "./App.css";
import BookListManagerWrapper from "./components/BookListManagerWrapper";
import { Provider } from "./context/context";

function App() {
	return (
		<Provider>
			<div className="App">
				<BookListManagerWrapper />
			</div>
		</Provider>
	);
}

export default App;

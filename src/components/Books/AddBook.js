import React from "react";

const AddBook = () => {
	return (
		<div>
			<h2>Add A Book:</h2>
			<div className="row">
				<form className="cols s12">
					<div className="input-field col s12">
						<input name="title" placeholder="The Stranger" type="text" />
						<label htmlFor="title">Title</label>
					</div>
					<div className="input-field col s12">
						<input name="title" placeholder="Albert Camus" type="text" />
						<label htmlFor="title">Author</label>
					</div>
					<div className="input-field col s12 ">
						<input name="title" placeholder="9780679720201" type="text" />
						<label htmlFor="title">ISBN</label>
					</div>
					<div className="input-field col s12">
						<button
							class="btn indigo lighten-1 waves-effect waves-light"
							type="submit"
						>
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddBook;

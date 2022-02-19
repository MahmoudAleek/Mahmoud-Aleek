import React, { Component } from "react";

class MovieForm extends Component {
	handleSave = () => {
		this.props.history.replace("/movies");
	};
	render() {
		const { params } = this.props.match;
		return (
			<React.Fragment>
				<h1>Movie Form {params.id}</h1>

				<button onClick={this.handleSave} className="btn btn-primary mt-4">
					save
				</button>
			</React.Fragment>
		);
	}
}

export default MovieForm;

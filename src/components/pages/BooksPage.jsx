import React, { Component } from "react";
import { withRouter } from "react-router";

import GOTService from "@services/GOTService.js";
import ItemList from "@components/ItemList/ItemList.jsx";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage.jsx";

export class BooksPage extends Component {
	GOTService = new GOTService();

	state = {
		selectedBook: null,
		error: false,
	};

	onItemSelected = (id) => {
		this.setState({
			selectedBook: id,
		});
	};

	componentDidCatch() {
		this.setState({
			error: true,
		});
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return (
			<ItemList
				onItemSelected={(itemId) => {
					this.props.history.push(itemId);
				}}
				getData={this.GOTService.getAllBooks}
				renderItem={({ name }) => name}
			/>
		);
	}
}
export default withRouter(BooksPage);

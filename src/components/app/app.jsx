import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import GOTService from "@services/GOTService.js";
import Header from "@components/Header/Header.jsx";
import RandomChar from "@components/RandomChar/RandomChar.jsx";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage.jsx";

import CharacterPage from "@components/pages/CharacterPage.jsx";
import BooksPage from "@components/pages/BooksPage.jsx";
import HousesPage from "@components/pages/HousesPage.jsx";
import BooksItem from "@components/pages/BooksItem.jsx";

export default class App extends React.Component {
	GOTService = new GOTService();

	state = {
		randomCharIsVisible: true,
	};

	componentDidCatch() {
		console.log("error");
		this.setState({
			error: true,
		});
	}

	rCharVisibility = () => {
		this.setState((state) => {
			return {
				randomCharIsVisible: !state.randomCharIsVisible,
			};
		});
	};

	randomCharBtn = () => {
		return (
			<Button
				onClick={this.rCharVisibility}
				color="warning"
				className="rchar-toggler"
			>
				Toggle Random Char
			</Button>
		);
	};

	render() {
		const randomChar = this.state.randomCharIsVisible ? <RandomChar /> : null;
		const randomCharBtn = this.randomCharBtn();
		if (this.state.error) {
			return <ErrorMessage />;
		}
		return (
			<Router>
				<div className="app">
					<Container>
						<Header />
					</Container>
					<Container>
						<Row>
							<Col lg={{ size: 5, offset: 0 }}>
								{randomChar}
								{randomCharBtn}
							</Col>
						</Row>
						<Route
							path="/"
							component={() => <h1>Welcome to GOT DB</h1>}
							exact={true}
						/>
						<Route path="/characters" component={CharacterPage} />
						<Route path="/houses" component={HousesPage} />
						<Route path="/books" component={BooksPage} exact />
						<Route
							path="/books/:id"
							render={({ match }) => {
								const { id } = match.params;
								return <BooksItem bookId={id} />;
							}}
						/>
					</Container>
				</div>
			</Router>
		);
	}
}

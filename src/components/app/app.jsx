import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import ItemList from "../itemList/itemList";
import CharDetails from "../charDetails/charDetails";
// import './app.css';
import GoTService from "@services/GoTService.js";
import { Button } from "reactstrap";

export default class App extends React.Component {
	state = {
		randomCharIsVisible: true,
	};
	rCharVisibility = () => {
		this.setState(({ randomCharIsVisible }) => ({
			randomCharIsVisible: !randomCharIsVisible,
		}));
	};
	render() {
		const got = new GoTService();
		// got.getAllCharacters().then(result => console.log(result))

		// got.getCharacter(130).then(result => console.log(result))

		// getResource('https://jsonplaceholder.typicode.com/todos/10000')
		// .then(json => console.log('Успех!', json))
		// .catch(error => console.log(error))
		const randomChar = this.state.randomCharIsVisible ? <RandomChar /> : null;
		
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>{randomChar}</Col>
					</Row>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>
							<Button
								onClick={this.rCharVisibility}
								color="warning"
								className="rchar-toggler"
							>
								Toggle Random Char
							</Button>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<ItemList />
						</Col>
						<Col md="6">
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

const rCharBtn = () => {
	return (
		<Button
			randomCharIsVisible={this.state.randomCharIsVisible}
			color="warning"
			className="rchar-toggler"
		>
			Toggle Random Char visibility
		</Button>
	);
};

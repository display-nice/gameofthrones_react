import React from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header/header";
import RandomChar from "../randomChar/randomChar";
import GoTService from "@services/GoTService.js";
import { Button } from "reactstrap";
import ErrorMessage from "@components/errorMessage/errorMessage";
import CharacterPage from "@components/characterPage/characterPage";

export default class App extends React.Component {
	state = {
		randomCharIsVisible: true,
	};

	componentDidCatch() {
		console.log('error');
		this.setState({
			error: true
		})
	}

	rCharVisibility = () => {		
        this.setState((state) => {
            return {
                randomCharIsVisible: !state.randomCharIsVisible,
            }
        })
	};

    
	render() {
		const got = new GoTService();
		
		const randomChar = this.state.randomCharIsVisible ? <RandomChar /> : null;
		if (this.state.error) {
			return <ErrorMessage/>
		}

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
					<CharacterPage/>
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

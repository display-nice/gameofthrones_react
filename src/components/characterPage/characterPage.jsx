import React from "react";
import { Col, Row } from "reactstrap";
import ItemList from "@components/itemList/itemList.jsx";
import CharDetails from "@components/charDetails/charDetails.jsx";
import ErrorMessage from "@components/errorMessage/errorMessage";
import gotService from "@services/GoTService.js";

export default class CharacterPage extends React.Component {
	gotService = new gotService();

	state = {
		selectedChar: 130,		
		error: false
	};
	onItemSelected = (id) => {
		this.setState({
			selectedChar: id,
			error: false
		});
	};
	componentDidCatch() {
		console.log('error');
		this.setState({
			error: true
		})
	}
	render() {
		if (this.state.error) {
			return <ErrorMessage/>
		}
		return (
			<Row>
				<Row>
					<h4 style={{color: "gray", backgroundColor: "white", textAlign: "center"}}>characterPage.jsx</h4>
				</Row>

				<Row>				
					<Col md="6">
						<ItemList 
							onItemSelected={this.onItemSelected}
							getData={this.gotService.getAllCharacters}
							renderItem={({name, gender}) => `${name} (${gender})`}/>
					</Col>
					<Col md="6">
						<CharDetails charId={this.state.selectedChar} />
					</Col>
				</Row>

			</Row>
		);
	}
}

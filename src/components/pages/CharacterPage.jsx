import React from "react";
import { Row } from "reactstrap";

import GOTService from "@services/GOTService.js";
import ItemList from "@components/ItemList/ItemList.jsx";
import ItemDetails, {Field} from "@components/ItemDetails/ItemDetails.jsx";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";
import RowBlock from "@components/RowBlock/RowBlock";

export default class CharacterPage extends React.Component {
	GOTService = new GOTService();

	state = {
		selectedChar: 130,
		error: false,
	};
	onItemSelected = (id) => {
		this.setState({
			selectedChar: id,
			error: false,
		});
	};
	componentDidCatch() {
		console.log("error");
		this.setState({
			error: true,
		});
	}
	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.GOTService.getAllCharacters}
				renderItem={({ name, gender }) => `${name} (${gender})`}
			/>
		);

		const itemDetails = (
			<ItemDetails
			itemId={this.state.selectedChar}
			getData={this.GOTService.getCharacter} >
				 <Field field='gender' label='Gender'/>
				 <Field field='born' label='Born'/>
				 <Field field='died' label='Died'/>
				 <Field field='culture' label='Culture'/>
			</ItemDetails>
	  )

		return (
			<Row>
				<Row>
					<h4
						style={{
							color: "gray",
							backgroundColor: "white",
							textAlign: "center",
						}}
					>
						characterPage.jsx
					</h4>
				</Row>

				<RowBlock left={itemList} right={itemDetails} />

			</Row>
		);
	}
}

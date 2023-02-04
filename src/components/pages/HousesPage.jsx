import React, {Component} from 'react';

import GOTService from '@services/GOTService.js';
import ItemList from '@components/ItemList/ItemList.jsx';
import ItemDetails, {Field} from '@components/ItemDetails/ItemDetails.jsx';
import ErrorMessage from "@components/ErrorMessage/ErrorMessage.jsx";
import RowBlock from '@components/RowBlock/RowBlock.jsx';

export default class HousesPage extends Component {
    GOTService = new GOTService();

    state = {
        selectedHouse: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.GOTService.getAllHouses}
                renderItem={({name}) => name}/>
        )

        const itemDetails = (
            <ItemDetails
            itemId={this.state.selectedHouse}
            getData={this.GOTService.getHouse} >
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )

        return (
           <RowBlock left={itemList} right={itemDetails} />
        )
    }
}
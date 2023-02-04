import React, {Component} from 'react';

import GOTService from '@services/GOTService.js';
import ItemDetails, {Field} from '@components/ItemDetails/ItemDetails.jsx';

export default class BooksItem extends Component {
    GOTService = new GOTService();

    render () {
        return (
            <ItemDetails
            itemId={this.props.bookId}
            getData={this.gotService.getBook} >
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}
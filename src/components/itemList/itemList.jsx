import React, {Component} from 'react';
import './itemList.css';
import GoTService from "@services/GoTService.js";
import Spinner from '@components/spinner/spinner.jsx';

export default class ItemList extends Component {
    goTService = new GoTService();
    state = {
        charList: null,
    }

    // Хук с инициализацией.
    // При первичном рендере получает список персонажей и складывает в стейт
    componentDidMount() {
        this.goTService.getAllCharacters()
        .then((charList) => {
            this.setState({
                charList
            })
        })
    }
    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(41 + i)}>
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;
        if(!charList) {
            return <Spinner/>
        }
        const items = this.renderItems(charList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
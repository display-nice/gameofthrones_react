import React, {Component} from 'react';
import './itemList.css';
import Spinner from '@components/spinner/spinner.jsx';

export default class ItemList extends Component {
    state = {
        itemList: null,
    }

    // Хук с инициализацией.
    // При первичном рендере получает список персонажей и складывает в стейт
    componentDidMount() {
        const {getData} = this.props;
        
        getData()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {itemList} = this.state;
        if(!itemList) {
            return (
                <>
                    <h4 style={{color: "gray", backgroundColor: "white", textAlign: "center"}}>itemList.jsx</h4>
                    <Spinner/>
                </>
            )
        }
        const items = this.renderItems(itemList)
        return (
            <>
                <ul className="item-list list-group">
                    <li style={{fontSize: "24px", color: "gray", backgroundColor: "white", textAlign: "center"}}>itemList.jsx</li>
                    {items}
                </ul>
            </>
        );
    }
}
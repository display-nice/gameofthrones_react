import React, {Component} from 'react';
import './ItemList.css';
import Spinner from '@components/Spinner/Spinner.jsx';

export default class ItemList extends Component {
    state = {
        itemList: null,
    }
    // Начало работы компонента.
    // 1. Хук с инициализацией.
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

    // 3. Обработка списка персонажей.
    // 3.1 Достаётся айдишник каждого персонажа и присваивается элементу li
    // 3.2 Используется созданная в компоненте characterPage и получаемая здесь в пропсах
    // функция renderItem, которая получает из списка персонажей нужные строчки и отрисовывает их.
    // это паттерн, который называется "Рендер-функция".
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
        // 2: Пока в п.1 асинхронно происходит получение списка персонажей на экран выводится спиннер
        // 2.1: При получении списка персонажей меняется стейт, происходит перерендер.        
        const {itemList} = this.state;
        if(!itemList) {
            return (
                <>
                    <h4 style={{color: "gray", backgroundColor: "white", textAlign: "center"}}>itemList.jsx</h4>
                    <Spinner/>
                </>
            )
        }

        // 2.2: После перерендера список персонажей отправляется на обработку в функцию renderItems
        const items = this.renderItems(itemList)
        // 4. Функция возвращает массив li-шек и он затем выводится на страницу.
        // Конец работы компонента.
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